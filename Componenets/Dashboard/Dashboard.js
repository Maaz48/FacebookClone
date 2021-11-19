import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CoverImage from "../DashboardSubComp/CoverImage";
import { TextInput, Button, Text } from "react-native-paper";
import DashboardBody from "../DashboardSubComp/DashboardBody";
import ProfileImage from "../DashboardSubComp/ProfileImage";
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.subcontainer}>
        <View style={styles.coverimage}>
          <CoverImage />
        </View>
        <View style={styles.profileimage}>
          <ProfileImage />
        </View>
        <View style={styles.dashboardbody}>
          <DashboardBody />
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 25,
  },
  subcontainer: {
    flex: 1,
    position: "relative",
  },
  coverimage: {
    flex: 0.4,
    width: "100%",
    backgroundColor: "#808080",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dashboardbody: {
    flex: 0.4,
    width: "100%",
    backgroundColor: "#fff",
    // alignItems:"center",
    justifyContent: "flex-end",
  },
  profileimage: {
    position: "absolute",
    top: 200,
    left: 120,
    backgroundColor: "black",
    width: 130,
    height: 130,
    zIndex: 9999999,
    borderRadius: 50,
  },
});
