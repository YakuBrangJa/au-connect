import {Colors} from "@/constants/Colors";
import {darkenColor} from "@/utils/darkenColor";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Animated, StyleSheet, Text, View} from "react-native";

const AnimatingBadge: React.FC<{categories: string[]}> = ({categories}) => {
  const isMultiCategory = categories.length > 1

  const initialTextLength = categories[0].length * 11
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textWidth, setTextWidth] = useState(0); // Store text width
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const widthAnim = useRef(new Animated.Value(initialTextLength)).current; // For badge width animation

  const animationLengthVariation = () => {
    const cur = categories[currentIndex].length
    const prev = categories[currentIndex - 1] ? categories[currentIndex - 1].length : categories[categories.length - 1].length

    if((prev - cur) > 4) return 30
    if((prev - cur) < -4) return 13
    else return 80
    // return (Math.abs(prev - cur)) > 4 ? 20 : 80
  }

  useLayoutEffect(() => {
    if(categories.length < 2) return;
    const interval = setInterval(() => {
      // Slide up animation for text
      Animated.timing(translateYAnim, {
        toValue: -20, // Move the text up by 20px
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Update the text index and reset position
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);

        translateYAnim.setValue(20); // Start below
        Animated.timing(translateYAnim, {
          toValue: 0, // Slide text back to center
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }, 2500); // Switch every 2 seconds

    return () => clearInterval(interval);
  }, [categories, translateYAnim]);

  useLayoutEffect(() => {
    // if(textWidth > 0) setInitial(false)
    // if(initial) return;
    // Animate badge width whenever text changes
    Animated.timing(widthAnim, {
      toValue: textWidth,
      duration: animationLengthVariation(),
      useNativeDriver: false, // Width animation requires native driver to be false
    }).start();
  }, [textWidth, widthAnim]);

  return (
    <View className="flex-row"
      style={styles.badge}
    >
      {isMultiCategory && <View className="ml-1.5 bg-primary rounded-full w-[16px] aspect-square items-center justify-center">
        <Text className="text-[12px] text-white font-semibold">{categories.length}</Text>
      </View>}
      <Animated.View
        style={[
          styles.textContainer,
          {
            width: widthAnim
          }, // Smoothly animate badge width
        ]}
      >
        <Animated.Text
          style={[
            styles.badgeText,
            {
              marginLeft: isMultiCategory ? -4 : 0,
              transform: [{translateY: translateYAnim}]
            },
          ]}

          onLayout={(event) => {
            const newTextWidth = event.nativeEvent.layout.width + (isMultiCategory ? 16 : 24); // Add padding to text width
            setTextWidth(newTextWidth);
          }}
        >
          {categories[currentIndex]}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Colors.primary + '22',
    borderRadius: 16,
    paddingVertical: 4,
    overflow: "hidden",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    gap: 2
  },
  textContainer: {
    borderRadius: 16,
    overflow: "hidden",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  badgeText: {
    fontSize: 13,
    textTransform: 'capitalize',
    color: darkenColor(Colors.primary, 0.1),
    fontWeight: 600,
  },
});


export default AnimatingBadge