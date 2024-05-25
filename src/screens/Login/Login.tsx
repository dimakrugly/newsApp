import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../../firebaseConfig.ts';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoding] = useState(false);
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoding(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoding(false);
    }
  };

  const signUp = async () => {
    setLoding(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(response)
    } catch (e) {
      console.log(e);
    } finally {
      setLoding(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        onChangeText={t => setEmail(t)}
        autoCapitalize="none"
        value={email}
      />
      <TextInput
        placeholder="password"
        onChangeText={t => setPassword(t)}
        autoCapitalize="none"
        value={password}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Login" onPress={signIn} />
          <Button title="Sign Up" onPress={signUp} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
});
