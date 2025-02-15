import {ThemedText} from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import {Colors} from '@/constants/Colors'
import {ActiveSession, useActiveSession} from '@/context/PomodoroContext'
import {AntDesign} from '@expo/vector-icons'
import {router} from 'expo-router'
import React, {useState} from 'react'
import {Modal, Platform, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View} from 'react-native'
import {useForm, Controller} from "react-hook-form";
import {Pomodoro, PomodoroStatus} from '@/types/pomodoro.type'
import ThemedTextInput from '@/components/ui/ThemedTextInput'
import {randomUUID} from 'expo-crypto'
import {useUser} from '@/context/UserContext'
import {formatDuration} from '@/utils/formatDuration'
import {statusColor} from '@/hooks/usePomodoroCycle'
import {cn} from '@/libs/cn'

export type PomodoroFormData = {
  title: string;
  description?: string;
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  cycleCount: number;
  repeatCount: number;
  public: boolean;
  status: PomodoroStatus
};

function PomodoroCreateModal () {
  const [modalVisible, setModalVisible] = useState(false)
  const {pomodoro, activeSession} = useActiveSession()

  return (
    <>
      {pomodoro ?
        <MySessionCard activeSession={activeSession} pomodoro={pomodoro} />
        :
        <Pressable className='py-3 px-5 pb-5 rounded-xl mt-4 bg-white active:bg-slate-50 border border-red-400/70 h-[140px] items-center justify-center gap-4'
          onPress={() => setModalVisible(true)}
        >
          <ThemedText className='text-center !text-primary'>Create Session</ThemedText>
          <View className=' items-center justify-center'>
            <AntDesign name="plus" size={50} color={Colors.primary} />
          </View>
        </Pressable>
      }
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <PomodoroForm setModalVisible={setModalVisible} />
      </Modal>
    </>
  )
}

export default PomodoroCreateModal

function MySessionCard ({activeSession, pomodoro}: {activeSession: ActiveSession, pomodoro: Pomodoro}) {

  return (
    <Pressable className='py-3 px-5 pb-5 rounded-xl gap-2 mt-4 bg-white active:bg-slate-50 border border-red-400/80 h-[140px]'
      onPress={() => {
        if(pomodoro.public) {
          router.push('/(root)/pomodoro/group-session')
        } else {
          router.push('/(root)/pomodoro/active-session')
        }
      }}
    >
      <View className='flex-row items-center justify-center gap-1'>
        <AntDesign name="hourglass" size={14} color={Colors.primary} />
        <ThemedText className='text-center !text-primary capitalize font-meidum'>{activeSession.status}</ThemedText>
      </View>
      <View className=' items-center justify-center'>
        <ThemedText className='!text-[50px] !leading-[64px] font-light'>{formatDuration(activeSession.time)}</ThemedText>
      </View>
      <View className='flex-row items-center justify-center gap-2 mt-2'>
        {[...Array(4)].map((_, index) => {
          return (
            <View key={index + 's'} className={cn("rounded-lg h-1 w-7 m-1")}
              style={{
                backgroundColor: (activeSession.status !== 'idle' && (activeSession.cycles > (index))) ? statusColor[activeSession.status] : '#cbd5e1'
              }}
            ></View>
          )
        })}
      </View>
    </Pressable>
  )
}

function PomodoroForm ({setModalVisible}: {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {setSession} = useActiveSession()
  const {data: userData} = useUser()

  const {control, handleSubmit} = useForm<PomodoroFormData>({
    defaultValues: {
      title: "",
      description: "",
      focusDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15,
      repeatCount: 1,
      public: false,
      status: 'idle',
      cycleCount: 4,
    },
  });

  const onSubmit = (data: PomodoroFormData) => {
    setSession({
      ...data,
      id: randomUUID(),
      focusDuration: data.focusDuration * 60,
      shortBreakDuration: data.shortBreakDuration * 60,
      longBreakDuration: data.longBreakDuration * 60,
      currentLab: 1,
      currentRound: 1,
      progress: 0,
      creator: userData,
      participantCount: 1,
    }, true)
    setModalVisible(false)
    if(data.public) {
      router.navigate('/(root)/pomodoro/group-session')
    } else {
      router.navigate('/(root)/pomodoro/active-session')
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerClassName='gap-1'>
      <View className='flex-row items-center justify-between'>
        <ThemedText type='subtitle' className='mb-2'>Create Pomodoro Session</ThemedText>
        {Platform.OS === 'android' && (
          <Pressable
            hitSlop={10}
            onPress={() => setModalVisible(false)}
            className=' active:opacity-70 active:bg-slate-200 rounded-full p-1'
          >
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
        )}
      </View>
      <Text style={styles.label}>Title</Text>
      <Controller
        control={control}
        name="title"
        rules={{required: "Title is required"}}
        render={({field: {onChange, value}}) => (
          <ThemedTextInput placeholder="Pomodoro title" value={value} onChangeText={onChange} />
        )}
      />

      <Text style={styles.label}>Description</Text>
      <Controller
        control={control}
        name="description"
        render={({field: {onChange, value}}) => (
          <ThemedTextInput placeholder="Description (optional)" value={value} onChangeText={onChange} />
        )}
      />

      <Text style={styles.label}>Focus Duration (minute)</Text>
      <Controller
        control={control}
        name="focusDuration"
        render={({field: {onChange, value}}) => (
          <ThemedTextInput keyboardType="numeric" value={String(value)} onChangeText={(text) => onChange(Number(text))} />
        )}
      />

      <Text style={styles.label}>Break Duration (minute)</Text>
      <Controller
        control={control}
        name="shortBreakDuration"
        render={({field: {onChange, value}}) => (
          <ThemedTextInput keyboardType="numeric" value={String(value)} onChangeText={(text) => onChange(Number(text))} />
        )}
      />
      <View style={{
        ...styles.switchContainer,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
      }}>
        {/* @ts-ignore */}
        <Text style={{
          ...styles.label,
          marginTop: 'unset'
        }}>Public</Text>
        <Controller
          control={control}
          name="public"
          render={({field: {onChange, value}}) => (
            <Switch value={value} onValueChange={onChange} />
          )}
        />
      </View>

      <Button onPress={handleSubmit(onSubmit)}>Create Pomodoro</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "white",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
