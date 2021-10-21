import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import homeScreenImage from "../../assets/homeScreen.jpeg";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.parentCard}>

        <ImageBackground
          source={homeScreenImage}
          resizeMode="cover"
          style={styles.image}
        >

          <View>
            <Text style={styles.titleText}>Rent A Guy</Text>
          </View>
          
          <View style={styles.cardOptions}>
            <Text style={styles.cardText}>Rent A Guy</Text>
          </View>

          <View style={styles.cardOptions}>
            <Text style={styles.cardText}>Be a Date</Text>
          </View>

        </ImageBackground>
      </View>

    </SafeAreaView>
  );
}

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentCard: {
    flex: 1,
    backgroundColor: "pink",
  },
  image: {
    flex: 1,
    height: viewportHeight,
    width: viewportWidth,
  },
  titleText: {
    alignSelf: "center",
    color: "#639A66",
    marginTop: 300,
    marginLeft: 9,
    fontWeight: "bold",
    fontSize: 45,
    textShadowColor: "black",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 15,
  },
  cardOptions: {
    backgroundColor: "rgba(188, 179, 130, 0.5)",
    borderRadius: 50,
    marginHorizontal: 80,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 100, 
  },
  cardText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 15,
  },
});
