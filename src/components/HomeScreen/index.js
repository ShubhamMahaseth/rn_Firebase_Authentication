import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
        WELCOME SHUBHAM
      </Text>
      <Button title="LOGOUT" onPress={() => logout()} />
    </View>
  );
};
export default HomeScreen;
