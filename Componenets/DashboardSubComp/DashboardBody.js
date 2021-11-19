import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";

const DashboardBody = () => {
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        MAAZ ANIS
      </Text>
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button
          style={styles.button}
          onPress={() => console.log("pressed")}
          mode="contained"
          dark="true"
          color="#4267B2"
          icon="plus-circle-outline"
        >
          Add to your story
        </Button>
        <View>
          <IconButton
            icon="pencil"
            color="black"
            size={20}
            //   onPress={pickImage}
            style={{
              backgroundColor: "#D3D3D3",
              height: 40,
              width: 40,
              borderRadius: 10,
            }}
          />
        </View>
        <View>
          <IconButton
            icon="dots-horizontal"
            color="black"
            size={20}
            //   onPress={pickImage}
            style={{
              backgroundColor: "#D3D3D3",
              height: 40,
              width: 40,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardBody;

const styles = StyleSheet.create({});
