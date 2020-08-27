import React, {Component} from 'react'
import {View, Text} from 'react-native'
import AppButton from '../../components/button'
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();

  const doLogout = () => {
    navigate('login')
  }

  return (
    <View>
      <Text>Area reservada ao usuario logado</Text>
      <AppButton title="Logout" onPress={doLogout}/>
    </View>
  )
}

export default Home
