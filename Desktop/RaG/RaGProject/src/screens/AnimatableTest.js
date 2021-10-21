import React from "react";
import { Text, StyleSheet } from "react-native"; 
import * as Animatable from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";
//import Swiper from 'react-native-swiper'

export default function AnimatableTest() {
  return (
    <SafeAreaView>

      <Animatable.View animation={'jello'} iterationCount={"infinite"} style={styles.box}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>jello</Text>
      </Animatable.View>

      <Animatable.View animation={'flipInX'}  iterationCount={'infinite'} iterationDelay={1000} style={styles.box}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>flip in</Text>
      </Animatable.View>

      <Animatable.View animation={'flipOutX'}  iterationCount={'infinite'} iterationDelay={1000} style={styles.box}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>flip out</Text>
      </Animatable.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        width: '30%',
        height: '30%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 150,
        marginRight: 5,
        backgroundColor: 'pink'
    }
});
