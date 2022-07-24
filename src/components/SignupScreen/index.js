import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [icon, setIcon] = useState('eye-off-outline');

  console.log(email);

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor={'gray'}
        keyboardType="email-address"
        autoFocus
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
        onChangeText={name => {
          setName(name);
        }}
        value={name}
      />
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

      <TouchableOpacity
        onPress={() => {
          icon == 'eye-off-outline'
            ? setIcon('eye-outline')
            : setIcon('eye-off-outline'),
            hide == false ? setHide(true) : setHide(false);
        }}
        style={{
          position: 'absolute',
          right: 22,
          top: 23,
        }}>
        <Ionicons name={icon} size={20} color="#b2b1b1" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderRadius: 8,
          backgroundColor: '#9ACAF7',
          width: '94%',
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          register(email, password);
        }}
        activeOpacity={0.8}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
          Already have an account ?{'  '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: '#0096F6',
              fontSize: 16,
              fontWeight: '600',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
