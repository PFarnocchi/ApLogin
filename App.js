
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const entrar = () => {
    console.log("Entrou no ApLogin")
    console.log("eMail = ", email)
    console.log("Senha = ", password)
  }
 
  return (
    <View style={styles.container}>
      <Text h2>Entrar no ApLogin !</Text>
      <Input
          placeholder='E-mail'
          leftIcon={{ type: 'font-awesome', name: 'envelope'}}
          onChangeText={value => setEmail(value)}
          keyboardType='email-address'
      />
      <Input
          placeholder='Senha'
          leftIcon={{ type: 'font-awesome', name: 'lock'}}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
      />
      <Button
          icon={
            <Icon
                name="check"
                size={15}
                color="white"
            />
          }
          title="Manda bala"
          onPress={() => entrar()}
      />    
    </View>
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
