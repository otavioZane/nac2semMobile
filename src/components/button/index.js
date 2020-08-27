import React from 'react';
import {Button, View} from 'react-native';

const AppButton = ({title, onPress}) => {

  return (
    <View>
      <Button title={title} onPress={onPress}/>
    </View>
  );
};

export default AppButton;
