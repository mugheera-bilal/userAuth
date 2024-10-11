import { Pressable, StyleSheet, Text, View } from 'react-native';

import { styles } from './styles';
import { FC } from 'react';
import { IAuthContent } from '../../../../constants/interface';

const Button : FC <IAuthContent> = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;