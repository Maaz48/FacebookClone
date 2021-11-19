import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
const Login = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>PLEASE LOG IN</Text>
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
          Log In
        </Button>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: "center" }}>Dont have an Account..??</Text>
        <Button onPress={() => navigation.navigate("Signup")}>
          Click here for Signup
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 8,
    marginVertical: 10,
  },
  Text: {
    fontSize: 30,
    fontWeight: "700",
    color: "pink",
  },
});
