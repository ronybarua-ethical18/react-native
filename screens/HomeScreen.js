import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_APIKEY } from "@env";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white w-full p-5`}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput:{
                fontSize:18
            }
          }}
          query={{
            key: GOOGLE_MAP_APIKEY,
            language: "en",
          }}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "orange",
  },
});
