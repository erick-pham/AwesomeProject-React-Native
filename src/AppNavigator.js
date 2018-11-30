import { createStackNavigator } from 'react-navigation';

// import the different screens
import LoadingScreen from './AuthenciationScreen/Loading'
import SignUpScreen from './AuthenciationScreen/SignUp'
import LoginScreen from './AuthenciationScreen/Login'
import HomeScreen from './HomeScreen/Home'

const AppNavigator = createStackNavigator({
  Loading: { screen: LoadingScreen },
  SignUp: { screen: SignUpScreen },
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
}, {
    initialRouteName: 'LoadingScreen'
  });

export default AppNavigator;
