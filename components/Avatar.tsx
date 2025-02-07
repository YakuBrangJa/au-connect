import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";

interface AvatarProps {
  name: string;
  src?: string;
  size?: number; // Dynamic size in pixels
  style?: object; // Additional styles if needed
}

const colors = [
  "#F87171", "#FACC15", "#4ADE80", "#60A5FA", "#A78BFA", "#F472B6",
  "#FB923C", "#34D399", "#818CF8", "#F59E0B", "#EC4899", "#10B981"
];

const Avatar: React.FC<AvatarProps> = ({name, src, size = 40, style}) => {
  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    return words.length > 1
      ? `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
      : words[0][0].toUpperCase();
  };

  const getBackgroundColor = () => {
    let hash = 0;
    for(let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: getBackgroundColor(),
        },
        style,
      ]}
    >
      {src ? (
        <Image source={{uri: src}} style={[styles.image, {width: size, height: size}]} />
      ) : (
        <Text style={[styles.initials, {fontSize: size * 0.4}]}>{getInitials(name)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    borderRadius: 9999,
  },
  initials: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Avatar;
