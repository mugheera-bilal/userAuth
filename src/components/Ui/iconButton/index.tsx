import { Pressable, StyleSheet } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FC } from 'react';
import { IAuthContent } from '../../../../constants/interface';

const IconButton : FC<IAuthContent> = ({ icon, color, size, onPress })=>  {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;