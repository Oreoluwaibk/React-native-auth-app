import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomePage from './screens/Homepage';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Forgot" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name="Reset" component={ResetPassword} options={{headerShown: false}}/>
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
