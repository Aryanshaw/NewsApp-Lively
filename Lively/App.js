/* eslint-disable prettier/prettier */

import { useContext } from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Context, { NewsContext } from './src/API/Context';
import InshortTabs from './src/components/InshortTabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen';
import Login from './src/Screens/Login';
import CreateAcc from './src/Screens/CreateAcc';

function App() {
  const Stack = createNativeStackNavigator();
  const {darkTheme} = useContext(NewsContext);

  return (
    <View style={{...styles.container, backgroundColor: darkTheme ? '#282C35' :"white"}}>
      {/* <Text>hello</Text> */}
      <NavigationContainer>
      <Stack.Navigator
      initialRouteName="splashScreen"
      >
      <Stack.Screen
            name="InshortTabs"
            component={InshortTabs}
            options={{
              headerShown: false,
              backgroundColor:darkTheme ? '#282C35' :"white"
            }}
          />
      <Stack.Screen
            name="splashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
      />
      <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
      />
      <Stack.Screen
            name="Create"
            component={CreateAcc}
            options={{headerShown: false}}
      />
      </Stack.Navigator>
      </NavigationContainer>
      {/* <InshortTabs /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
