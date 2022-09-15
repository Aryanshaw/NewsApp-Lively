/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToCreate = () => {
    navigation.navigate("Create");
  };

  const submit = async () => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Login successful', ToastAndroid.SHORT),
        navigation.replace('InshortTabs');
        // createChannel();
        // handelNotification();
    })
    .catch(e => {
      if (e.code === 'auth/email-already-in-use') {
        ToastAndroid.show('That email already exists', ToastAndroid.SHORT);
        //  Alert.alert("This email already exists")
      }
      if (e.code === 'auth/invalid-email') {
        ToastAndroid.show('That email is invalid', ToastAndroid.SHORT);
        //  Alert.alert("This email is invalid")
      }

      //  console.log(e)
      ToastAndroid.show('error' + e, ToastAndroid.SHORT);
      // Alert.alert(e)
    });
  };

  return (
    <ScrollView>
      {/* <Text>Login</Text> */}
      <ImageBackground
        source={require("../assets/asset.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello There!</Text>
          <Text style={{ fontSize: 20, color: "#C4C4C6", marginTop: 10 }}>
            Nice to meet you again
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.login}>
        <View style={{}}>
          <Text
            style={{
              marginTop: 30,
              fontSize: 30,
              fontWeight: "bold",
              left: 30,
              elevation: 5,
            }}
          >
            Login here
          </Text>
          <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Email
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="Enter User email"
              value={email}
              onChangeText={(userData) => setEmail(userData)}
            />
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Password
            </Text>
            <TextInput
              style={styles.textinput}
              // keyboardType="phone-pad"
              secureTextEntry
              placeholder="Enter Password"
              value={password}
              onChangeText={(userData) => setPassword(userData)}
            />

            <View
              style={{
                padding: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View style={styles.button}>
                <TouchableOpacity styles={styles.loginBtn} onPress={submit}>
                  <Text
                    style={{ color: "#fff", fontSize: 20, textAlign: "center" }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 110,
                    color: "blue",
                    fontSize: 14,
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={navigateToCreate}
              style={{ paddingBottom: 70 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "blue",
                  fontSize: 17,
                  marginTop: 45,
                  textDecorationLine: "underline",
                }}
              >
                Don't have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    alignSelf: "stretch",
    width: "100%",
    height: "100%",
  },
  header: {
    padding: 40,
    paddingBottom: 200,
  },
  headerText: {
    fontSize: 52,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 60,
    elevation: 5,
  },
  login: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    top: -27,
  },
  textinput: {
    color:"black",
    borderColor: "black",
    backgroundColor: "#D1D1D1",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#416EE7",
    padding: 15,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  loginBtn: {
    padding: 20,
    paddingLeft: 40,
    // alignItems: "center"
  },
});
export default Login;