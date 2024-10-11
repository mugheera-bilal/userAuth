import {useContext, useState} from 'react';
import AuthContent from '../../components/Auth/authContent';
import {createUser} from '../../util/auth';
import LoadingOverlay from '../../components/Ui/loadingOverlay';
import {Alert} from 'react-native';
import { AuthContext } from '../../../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const authCtx = useContext(AuthContext)

  async function signupHandler({email, password}: any) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        'Aurhentication  failed',
        'Could not create user, Please check your input and try again later',
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="creating user ... " />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
