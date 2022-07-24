import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [icon, setIcon] = useState('eye-off-outline');
  const [hide, setHide] = useState(true);

  const {login} = useContext(AuthContext);

  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <View
        style={{
          borderWidth: 1,
          backgroundColor: 'white',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View style={{width: '30%', height: '35%'}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../../assets/images/FoodMonkey.jpg')}
          />
        </View>

        <TextInput
          placeholder="Email"
          placeholderTextColor={'gray'}
          keyboardType="email-address"
          style={{
            height: 48,
            margin: 10,
            borderWidth: 2,
            padding: 10,
            borderColor: '#DADADA',
            borderRadius: 8,
            width: '94%',
            color: 'black',
            fontWeight: '400',
            fontSize: 16,
          }}
          onChangeText={email => {
            setEmail(email);
          }}
          value={email}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={'gray'}
          keyboardType="visible-password"
          style={{
            height: 48,
            marginTop: 10,
            borderWidth: 2,
            padding: 10,
            borderColor: '#DADADA',
            borderRadius: 8,
            width: '94%',
            color: 'black',
            fontWeight: '400',
            fontSize: 16,
          }}
          onChangeText={password => {
            setPassword(password);
          }}
          value={password}
        />

        {/* <TouchableOpacity
          onPress={() => {
            icon == 'eye-off-outline'
              ? setIcon('eye-outline')
              : setIcon('eye-off-outline'),
              hide == false ? setHide(true) : setHide(false);
          }}
          style={{
            // borderWidth: 1,
            position: 'absolute',
            right: 22,
            top: 23,
          }}>
          <Ionicons name={icon} size={20} color="#b2b1b1" />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={{marginLeft: 232, marginTop: 5}}
          activeOpacity={0.6}>
          <Text
            style={{
              color: '#6BB0F5',
              fontSize: 15,
              color: '#0096F6',

              fontWeight: '500',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: '#9ACAF7',
            width: '88%',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
          onPress={() => {
            login(email, password);
          }}
          activeOpacity={0.8}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
            Log In
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
            Don't have an account ?{'  '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text
              style={{
                color: '#0096F6',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
