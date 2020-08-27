import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'

const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
  <Navigator>
    <Screen name="login" component={Login} />
    <Screen name="Cadastro" component={SignUp} />
    <Screen name="home" component={Home} options={{headerLeft: null, gestureEnabled: false}} />
  </Navigator>
)

export default Routes

