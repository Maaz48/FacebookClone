import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  TextInput,
  Button,
  Text,
  IconButton,
  Colors,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

const CoverImage = () => {
  const [image, setImage] = useState(null);

  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();

  const pickImage = async () => {
    console.log("pressed");
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  return (
    <View>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={
          (styles.image,
          {
            width: "100%",
            height: "100%",
          })
        }
        imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      >
        <IconButton
          icon="camera"
          color="white"
          size={20}
          onPress={pickImage}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "black",
            height: 40,
            width: 40,
            borderRadius: 50,
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default CoverImage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
  },
});
