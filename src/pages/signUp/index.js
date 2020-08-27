import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import AppButton from '../../components/button';
import Db from '../../helpers/database';
import {useNavigation} from '@react-navigation/native';

const Cadastrar = () => {
  const {navigate} = useNavigation();

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const doSignup = () => {
    const db = new Db();
    db.executeQuery('select * from NAC1LOGIN where USERNAME = ? ', [
      username,
    ]).then((response) => {
      console.log("aqui", response)
      if (response.rows.length) {   
        alert('Usuario ja esta cadastrado');
        return;
      }
      db.executeQuery(
        'insert into NAC1LOGIN (USERNAME, PASSWORD) values (?, ?)',
        [username, password],
      )
        .then((response) => {
          console.log('caiu aqui', response);
          if (response) {
            navigate('home');
          } else {
            alert('Falha no cadastro');
          }
        })
        .catch((error) => {
          console.log('insert Querry falhou', error);
        });
    });
  };

  return (
    <View>
      <Text>Usuário</Text>
      <TextInput
        textContentType="username"
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUser}
      />

      <Text>Senha</Text>
      <TextInput
        textContentType="password"
        placeholder="Insira sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton title="Cadastrar" onPress={doSignup} />
    </View>
  );
};

export default Cadastrar;
