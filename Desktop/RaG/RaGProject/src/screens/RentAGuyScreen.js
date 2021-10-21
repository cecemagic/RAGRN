import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import maleModel1 from "../../assets/maleModel1.jpeg";
import maleModel2 from "../../assets/maleModel2.jpeg";
import maleModel3 from "../../assets/maleModel3.jpeg";
import maleModel4 from "../../assets/maleModel4.jpeg";
import maleModel5 from "../../assets/maleModel5.jpeg";
import maleModel6 from "../../assets/maleModel6.jpeg";
//import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RentAGuyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.welcomeTextBox}>
            <Icon size={20} name="ios-search" color="#E9D09C" style={{marginLeft: 130, marginTop: 3}}/>
          <Text style={styles.searchBarText}>Hello UserName!</Text>
        </View>

        <View style={styles.parentCard}>
          <View style={styles.card}>
            <ImageBackground
              source={maleModel1}
              resizeMode="cover"
              style={styles.img}
            >
              <View style={styles.infoCard}>
                <Text style={styles.infoName}>John Doe</Text>
                <Text style={styles.bio}>
                  This is the place to put your captivating bio that will help
                  to capture the attention of the user.
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={maleModel2}
              resizeMode="cover"
              style={styles.img}
            >
              <View style={styles.infoCard}>
                <Text style={styles.infoName}>Micheal Doe</Text>
                <Text style={styles.bio}>
                  This is the place to put your captivating bio that will help
                  to capture the attention of the user.
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.parentCard}>
          <View style={styles.card}>
            <ImageBackground
              source={maleModel3}
              resizeMode="cover"
              style={styles.img}
            >
              <View style={styles.infoCard}>
                <Text style={styles.infoName}>Bob Doe</Text>
                <Text style={styles.bio}>
                  This is the place to put your captivating bio that will help
                  to capture the attention of the user.
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={maleModel4}
              resizeMode="cover"
              style={styles.img}
            >
              <View style={styles.infoCard}>
                <Text style={styles.infoName}>Clint Doe</Text>
                <Text style={styles.bio}>
                  This is the place to put your captivating bio that will help
                  to capture the attention of the user.
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.parentCard}>
          <View style={styles.card}>
            <ImageBackground
              source={maleModel5}
              resizeMode="cover"
              style={styles.img}
            >
              <View style={styles.infoCard}>
                <Text style={styles.infoName}>Paul Doe</Text>
                <Text style={styles.bio}>
                  This is the place to put your captivating bio that will help
                  to capture the attention of the user.
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={maleModel6}
              resizeMode="cover"
              style={styles.img}
            >
              <View style={styles.infoCard}>
                <Text style={styles.infoName}>Alexander Doe</Text>
                <Text style={styles.bio}>
                  This is the place to put your captivating bio that will help
                  to capture the attention of the user.
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202F29",
  },
  welcomeTextBox: {
    flexDirection: 'row',
    width: "100%",
    height: 30,
    marginTop: 5,
    backgroundColor: "rgba(99, 154, 102, 0.5)",
    borderRadius: 100,
  },
  searchBarText: {
    fontSize: 18,
    color: "#E9D09C",
    textAlign: "center",
    marginTop: 4,
    marginLeft: 10,
  },
  parentCard: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  card: {
    height: 300,
    width: 185,
    borderRadius: 5,
    marginTop: 5,
  },
  img: {
    width: "100%",
    height: "100%",
    borderColor: "#121619",
    borderWidth: 2,
  },
  infoCard: {
    justifyContent: "flex-start",
    width: "100%",
    height: "30%",
    backgroundColor: "blue",
    marginTop: 207,
    backgroundColor: "rgba(99, 154, 102, 0.5)",
  },
  infoName: {
    color: "#E7CB92",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 2,
    textShadowColor: "black",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  bio: {
    color: "#E9D09C",
    fontSize: 13,
    alignContent: "center",
    textShadowColor: "black",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 15,
  },
});
