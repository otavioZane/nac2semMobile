import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import AppButton from '../../components/button';
import Db from '../../helpers/database';
import {useNavigation} from '@react-navigation/native';

const login = () => {
  const {navigate} = useNavigation();

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    const db = new Db();
    db.executeQuery('select * from NAC1LOGIN where USERNAME = ? and PASSWORD = ?', [username, password]).then((response) => {
      if (response.rows.length) {
        navigate('home');
      } else {
        alert('Usuario ou senha incorretos');
      }
    });
  };

  const pressHandlerSignUp = () => {
    navigate('Cadastro');
  };

  return (
    <View>
      <Text>Usuário</Text>
      <TextInput
        placeholder="Digite seu nome de usuário"
        textContentType="username"
        value={username}
        onChangeText={setUser}
      />
      <Text>Senha</Text>
      <TextInput
        placeholder="Digite seu nome de usuário"
        textContentType="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppButton title="Login" onPress={doLogin} />
      <AppButton title="Cadastrar" onPress={pressHandlerSignUp} />
    </View>
  );
};

export default login;
