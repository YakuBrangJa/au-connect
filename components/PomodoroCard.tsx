import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {Pomodoro, PomodoroStatus} from '@/types/pomodoro.type'
import {formatDuration} from '@/utils/formatDuration'
import React, {useEffect, useRef, useState} from 'react'
import {Alert, Animated, Modal, PanResponder, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {Feather, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import {Colors} from '@/constants/Colors'
import {cn} from '@/libs/cn'
import {CardShadow} from '@/constants/Shadows'
import usePomodoroCycle, {statusColor} from '@/hooks/usePomodoroCycle'
import {router} from 'expo-router'
import Button from '@/components/ui/Button'
import {useActiveSession} from '@/context/PomodoroContext'

type Props = {
  pomodoro: Pomodoro
}

function PomodoroCard ({pomodoro}: Props) {

  const {cycles, status, time, progress} = usePomodoroCycle(pomodoro)

  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <View className='rounded-xl'
      style={{
        ...CardShadow,
      }}
    >
      <Pressable className='bg-white p-2.5 px-4 gap-0.5 rounded-xl active:bg-slate-50'
        onPress={() => setPreviewOpen(true)}
      >
        <ThemedText type='defaultSemiBold'>{pomodoro.title}</ThemedText>
        <View className='flex-row justify-between items-end'>
          <View className='gap-4 flex-row'>
            <View className='flex-row items-center gap-2'>
              {status === 'focus' ? <AntDesign name="hourglass" size={14} color={statusColor[status]} />
                :
                <Feather name="coffee" size={14} color={statusColor[status]} />}
              <Text className={cn(' font-semibold capitalize')} style={{
                color: statusColor[status]
              }}>{status}</Text>
            </View>
            <View className='flex-row items-center gap-1'>
              <MaterialCommunityIcons name="sync" size={14} color={statusColor[status]} />
              <Text className='font-semibold' style={{
                color: statusColor[status]
              }}>{cycles}</Text>
            </View>
            <View className='flex-row items-center gap-1.5'>
              <Ionicons name="people-outline" size={16} color={statusColor[status]} />
              <Text className='font-semibold' style={{
                color: statusColor[status]
              }}>{pomodoro.participantCount}</Text>
            </View>
          </View>
          <View className='gap-1 items-end'>
            <Text className='!text-[25px]' style={{
              color: statusColor[status]
            }}>{formatDuration(time)}</Text>
          </View>
        </View>
      </Pressable>
      <PreviewModal
        visible={previewOpen}
        pomodoro={pomodoro}
        onClose={() => setPreviewOpen(false)} session={{
          title: pomodoro.title,
          time,
          status,
          cycles,
          progress,
          participants: pomodoro.participantCount
        }} />
    </View>
  )
}


export default PomodoroCard

const PreviewModal = ({visible, onClose, session, pomodoro}: {
  visible: boolean;
  onClose: () => void
  pomodoro: Pomodoro
  session: {
    title: string,
    time: number,
    status: PomodoroStatus,
    cycles: number,
    participants: number
    progress: number
  }
}) => {
  const slideAnim = useRef(new Animated.Value(300)).current; // Start off-screen

  useEffect(() => {
    if(visible) {
      Animated.timing(slideAnim, {
        toValue: 0, // Slide up
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300, // Slide down
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  // Gesture Handler for Swiping Down
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 10, // Start gesture if moved vertically
      onPanResponderMove: (_, gestureState) => {
        if(gestureState.dy > 0) {
          slideAnim.setValue(gestureState.dy); // Move modal with finger
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if(gestureState.dy > 100) {
          Animated.timing(slideAnim, {
            toValue: 300, // Slide down
            duration: 200,
            useNativeDriver: true,
          }).start(onClose); // Close modal
        } else {
          Animated.timing(slideAnim, {
            toValue: 0, // Reset position
            duration: 200,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const {pomodoro: activePomodoro, setSession, activeSession} = useActiveSession()

  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose} />

        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.modalContainer, {transform: [{translateY: slideAnim}]}]}
        >
          <TouchableOpacity activeOpacity={1} className='flex-1 w-full pt-2 pb-[45px] px-6'>
            <View className='items-center'>
              <View className='bg-slate-400 rounded-lg h-1 w-11'></View>
            </View>
            <ThemedText className='mt-6 text-center' type='subtitle2'>{session.title}</ThemedText>
            <View className='mt-5'>
              <Text className='text-center mb-7'>{session.participants} perople are in this session.</Text>
            </View>
            <View className='flex-1 py-3 px-5 pb-5 rounded-xl gap-2 mb-4 bg-white active:bg-slate-50  justify-center'
            >

              <View className=' items-center justify-center'>
                <ThemedText className='!text-[70px] !leading-[74px] font-light'>{formatDuration(session.time)}</ThemedText>
              </View>
              <View className='flex-row justify-center items-center gap-1'>
                <AntDesign name="hourglass" size={15} color={statusColor[session.status]} />
                <ThemedText className='text-center font-medium capitalize'
                  style={{
                    color: statusColor[session.status]
                  }}
                >{session.status}</ThemedText>
              </View>
              <View className='flex-row items-center justify-center gap-2 mt-2'>
                {[...Array(4)].map((_, index) => {
                  return (
                    <View key={index + 's'} className={cn("rounded-lg h-1 w-7 m-1")}
                      style={{
                        backgroundColor: (session.status !== 'idle' && (session.cycles > (index))) ? statusColor[session.status] : '#cbd5e1'
                      }}
                    ></View>
                  )
                })}
              </View>
            </View>
            <Button
              onPress={() => {
                if(activePomodoro) {

                  Alert.alert("Active Session Exist", "Would you like to replace current one?", [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Yes', onPress: () => {
                        setSession
                          ({
                            ...pomodoro,
                            status: session.status,
                            currentLab: session.cycles,
                            progress: session.progress,
                          }, false)
                        onClose()
                        router.navigate('/(root)/pomodoro/group-session')
                      }, style: 'default'
                    },
                  ])
                } else {
                  setSession
                    ({
                      ...pomodoro,
                      status: session.status,
                      currentLab: session.cycles,
                      progress: session.progress,
                    }, false)
                  onClose()
                  router.navigate('/(root)/pomodoro/group-session')
                }
              }
              }
            >Join Session</Button>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
  },
  modalContainer: {
    height: "50%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 15,
  },
  closeText: {
    fontSize: 20,
    color: "#333",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
  },
  content: {
    marginTop: 10,
    fontSize: 16,
  },
});
