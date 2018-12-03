import { createStackNavigator } from 'react-navigation';

// import the different screens
import LoadingScreen from './AuthenciationScreen/Loading'
import SignUpScreen from './AuthenciationScreen/SignUp'
import LoginScreen from './AuthenciationScreen/Login'
import HomeScreen from './HomeScreen/Home'

const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Loading: { screen: LoadingScreen },
  SignUp: { screen: SignUpScreen },
  Home: { screen: HomeScreen }
});

export default AppNavigator;
