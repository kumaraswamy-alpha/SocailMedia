import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import Title from "./components/Title/Title";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import GlobalStyles from "./assets/styles/GlobalStyles";
import UserStories from "./components/UseStories/UserStories";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Olivier",
      id: 4,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nata",
      id: 5,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nino",
      id: 7,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nana",
      id: 8,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Adam",
      id: 9,
      profileImage: require("./assets/images/default_profile.png"),
    },
  ];

  return (
    <SafeAreaView>
      <View style={GlobalStyles.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={GlobalStyles.messageIcon}>
          <FontAwesome name="envelope" size={20} color="#898DAE" />
          <View style={GlobalStyles.messageNumberContainer}>
            <Text style={GlobalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={GlobalStyles.userStoriesContainer}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={userStories}
          renderItem={({ item }) => (
            <UserStories
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
