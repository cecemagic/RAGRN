import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Ionicons";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
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
  };
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2D4739" }}>
      <View>
        <Text style={styles.header}>LOG IN</Text>
      </View>
      <View style={styles.containerParent}>
        <View style={styles.imgPickBox}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <View style={styles.imgPickBox}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Icon
          size={20}
          name="ios-person"
          color="black"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <Text style={styles.textStyle}>Username</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(textInputValue) => setTextInputValue(textInputValue)}
          value={textInputValue}
          placeholder="Insert your username"
        />
      </View>

      <View style={{ flexDirection: "row", marginTop: 3 }}>
        <Icon
          size={20}
          name="ios-key"
          color="black"
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <Text style={styles.textStyle}>Password</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(textInputValue) => setTextInputValue(textInputValue)}
          value={textInputValue}
          placeholder="Insert your password"
        />
      </View>
      <View style={styles.logInCard}>
        <Icon
          size={25}
          name="md-exit"
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Button title="Log In" color="black" style={styles.textStyle}/>
      </View>
      <View style={{flexDirection:'row', alignSelf: "center", marginTop:10}}>
        <Icon
          size={25}
          name="md-person-add"
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.textStyle}>Register</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerParent: {
    flexDirection: "row",
  },
  imgPickBox: {
    width: "50%",
    height: "85%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#22533B",
    borderRadius: 20,
    borderColor: "#90A774",
    borderWidth: 3,
  },
  header: {
    color: "black",
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  inputStyle: {
    height: 40,
    borderColor: "#90A774",
    borderWidth: 1,
    marginTop: 5,
  },
  logInCard: {
    flexDirection: "row",
    alignSelf: "center",
  },
  textStyle: {
    fontSize:18,
    color: 'black',
    alignSelf: "center",
    justifyContent:'center',
    marginLeft: 3
  }
});
