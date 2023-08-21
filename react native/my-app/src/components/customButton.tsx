import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface CustomButtonProps {
  backgroundColor: any;
  color: any;
  text: any;
  onPress: () => void;
  fontSize?: number;
  width?: any;
  style?: StyleProp<ViewStyle>; // Additional style prop for custom styles
}

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
  style,
}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: '700',
      color,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;