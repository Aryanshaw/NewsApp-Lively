/* eslint-disable prettier/prettier */

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    ToastAndroid,
  } from "react-native";
  import React, { useState } from "react";
  import CheckBox from 'react-native-check-box'
//   import { CheckBox } from "react-native-elements";
//   import { login } from "../services/user.api.service";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore' ;

  const CreateAcc = ({ navigation }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
  
    const createId =  ()=>{
        auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
          let uid =  auth().currentUser.uid;
             firestore().collection('accounts').doc(uid)
            .set({
              name:name,
              email:email,
              phone:phone,
              password:password,
            }).then(()=>ToastAndroid.show('account created', ToastAndroid.SHORT), navigation.replace("InshortTabs"))
            .catch(e=>console.log(e))
        })
        .catch(e => {
           if(e.code === 'auth/email-already-in-use'){
          //  ToastAndroid.show('That email already exists',ToastAndroid.SHORT);
          Alert.alert("This email already exists")
           }
           if(e.code === 'auth/invalid-email'){
            // ToastAndroid.show('That email is invalid',ToastAndroid.SHORT);
            Alert.alert("This email is invalid")
    
           }
           
          console.log(e)
          ToastAndroid.show("invalid password or email",ToastAndroid.SHORT)
          // Alert.alert(e)
        })
      }


    const check = () => {
      if (toggleCheckBox === true) {
        setToggleCheckBox(false);
      } else {
        setToggleCheckBox(true);
      }
    };
  
    const submit = async () => {
      if (!name || !email || !phone || !password) {
        //   Alert.alert("please fill up every fields")
        return ToastAndroid.show(
          "please fill up every fields",
          ToastAndroid.SHORT
        );
      }

      //   createId();
      createId();
      // console.log(name,password)
    };
  
    return (
      <ScrollView style={styles.container}>
        {/* <Text>Contact.page</Text> */}
        <View style={{ paddingRight: 300 }}>
          <View style={styles.topStyle}>
            <Text></Text>
          </View>
        </View>
  
        <View style={styles.CreateAcc}>
          <Text style={styles.header}>Create An Account</Text>
          <Text
            style={{ color: "gray", fontSize: 15, textAlign: "center", top: 10 }}
          >
            Begin Your New Journey With Us
          </Text>
  
          <View style={{ paddingHorizontal: 20, top: 30 }}>
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Enter your name
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="Enter name"
              value={name}
              onChangeText={(userData) => setName(userData)}
            />
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Enter your email
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="email@gmail.com"
              value={email}
              onChangeText={(userData) => setEmail(userData)}
            />
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Enter your phone number
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="+9155656662"
              value={phone}
              onChangeText={(userData) => setPhone(userData)}
              keyboardType="phone-pad"
            />
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Create Password
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="@1234567"
              value={password}
              onChangeText={(userData) => setPassword(userData)}
              secureTextEntry
            />
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Confirm Password
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="Confirm it"
              value={confirmPass}
              onChangeText={(userData) => setConfirmPass(userData)}
              secureTextEntry
            />

            <View style={styles.wrapper}>
              <CheckBox
               style={{flex: 1, padding: 10}}
                disabled={false}
                checkedColor="#416EE7"
                isChecked={toggleCheckBox}
                onClick={() => check(toggleCheckBox)}
              />
              <Text style={styles.wrapperText}>
                I have read and agreed to all the terms and conditions
              </Text>
            </View>

            <View style={{ paddingRight: 200 }}>
              <View
                style={[
                  styles.button,
                  { backgroundColor: toggleCheckBox ? "#416EE7" : "grey" },
                ]}
              >
                <TouchableOpacity
                  styles={[styles.loginBtn]}
                  disabled={!toggleCheckBox}
                  onPress={submit}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
  
        <View style={{ paddingLeft: 280 }}>
          <View style={styles.BottomStyle}>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default CreateAcc;
  
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      backgroundColor: "white",
      overflow:"hidden"
    },
    topStyle: {
      backgroundColor: "#416EE7",
      padding: 60,
      borderBottomRightRadius: 150,
    },
    BottomStyle: {
      backgroundColor: "#416EE7",
      padding: 60,
      marginTop: 0,
      borderTopLeftRadius: 150,
      // alignItems: "flex-end",
    },
    CreateAcc: {
      display: "flex",
      justifyContent: "center",
      top: -30,
    },
    header: {
      alignSelf: "center",
      fontSize: 35,
      fontWeight: "bold",
    },
    textinput: {
      color: "black",
      borderColor: "black",
      backgroundColor: "#E2E2E2",
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      elevation: 5,
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      // marginTop: 20,
      alignItems: "center",
      left: -16,
    },
    wrapperText: {
      // marginLeft:10,
      color: "#7d7d7d",
      // marginTop:8,
    },
    button: {
      marginTop: 10,
      // backgroundColor: "#416EE7",
  
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