import {useContext, useState} from 'react';
import AuthContent from '../../components/Auth/authContent';
import LoadingOverlay from '../../components/Ui/loadingOverlay';
import {login} from '../../util/auth';
import {Alert} from 'react-native';
import { AuthContext } from '../../../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const authCtx = useContext(AuthContext)


  async function loginHandler({email, password}: any) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token)

    } catch (error) {
      Alert.alert(
        'authentication failed',
        'could not log you in, please check your credentials or try again later',
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="logging you in ... " />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
