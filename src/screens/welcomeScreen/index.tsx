import {StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { AuthContext } from '../../../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState();

  const authCtx = useContext(AuthContext)
  const token = authCtx.token

  useEffect(() => {
    axios
      .get('https://react-native-meta-default-rtdb.firebaseio.com/message.json?auth=' + token)
      .then(response => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;
