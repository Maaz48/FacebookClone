import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Facebook from "expo-facebook";
// import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({ navigation }) => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  /////////////// LOGIN WITH FACEBOOK ///////////////////////

  async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: "308946880866727",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Text}>PLEASE SIGN UP</Text>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              width: "100%",
            }}
          >
            <TextInput
              mode="outlined"
              label="First Name"
              value={fname}
              onChangeText={(fname) => setfname(fname)}
              style={{ width: "48%" }}
            />
            <View style={{ paddingHorizontal: 5 }}></View>
            <TextInput
              mode="outlined"
              label="Last Name"
              value={lname}
              onChangeText={(lname) => setlname(lname)}
              style={{ width: "48%" }}
            />
          </View>
          <View style={{ width: "100%" }}>
            <View style={{ width: "100%", marginVertical: 5 }}>
              <TextInput
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={(email) => setemail(email)}
              />
            </View>
            <View style={{ width: "100%", marginVertical: 5 }}>
              <TextInput
                mode="outlined"
                label="Password"
                value={password}
                onChangeText={(password) => setpassword(password)}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("Dashboard")}
              mode="contained"
              dark="true"
              color="pink"
            >
              Sign Up
            </Button>
          </TouchableOpacity>
          <View>
            <View>
              <Text style={{ textAlign: "center" }}>OR </Text>
            </View>
            <TouchableOpacity>
              <Button
                style={styles.button}
                onPress={logIn}
                mode="contained"
                dark="true"
                color="pink"
              >
                LOG IN With faceBook
              </Button>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>
              Already have an Account..??
            </Text>
            <Button onPress={() => navigation.navigate("Login")}>
              Click here for login
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 50,
    paddingVertical: 8,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginTop: 50,
  },
  Text: {
    fontSize: 30,
    fontWeight: "700",
    color: "pink",
  },
});
