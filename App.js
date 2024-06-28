import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
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
import UserStories from "./components/UserStories/UserStories"; // Corrected path
import UserPost from "./components/UsePost/UserPost";
SplashScreen.preventAutoHideAsync();

function AppContent() {
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
  const userPosts = [
    {
      firstName: "Allison",
      lastName: "Becker",
      location: "Boston, MA",
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
      id: 1,
    },
    {
      firstName: "Jennifer",
      lastName: "Wilkson",
      location: "Worcester, MA",
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
      id: 2,
    },
    {
      firstName: "Adam",
      lastName: "Spera",
      location: "Worcester, MA",
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
      id: 3,
    },
    {
      firstName: "Nata",
      lastName: "Vacheishvili",
      location: "New York, NY",
      likes: 200,
      comments: 16,
      bookmarks: 6,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
      id: 4,
    },
    {
      firstName: "Nicolas",
      lastName: "Namoradze",
      location: "Berlin, Germany",
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
      id: 5,
    },
  ];
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={GlobalStyles.header}>
              <Title title={"Let’s Explore"} />
              <TouchableOpacity style={GlobalStyles.messageIcon}>
                <FontAwesome name="envelope" size={20} color={"#898DAE"} />
                <View style={GlobalStyles.messageNumberContainer}>
                  <Text style={GlobalStyles.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingUserStories) {
                    return;
                  }
                  setIsLoadingUserStories(true);
                  const contentToAppend = pagination(
                    userStories,
                    userStoriesCurrentPage + 1,
                    userStoriesPageSize
                  );
                  if (contentToAppend.length > 0) {
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRenderedData((prev) => [
                      ...prev,
                      ...contentToAppend,
                    ]);
                  }
                  setIsLoadingUserStories(false);
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={userStoriesRenderedData}
                renderItem={({ item }) => (
                  <UserStories
                    key={"userStory" + item.id}
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
          </>
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadingUserPosts) {
            return;
          }
          setIsLoadingUserPosts(true);
          console.log("fetching more data for you ", userPostsCurrentPage + 1);
          const contentToAppend = pagination(
            userPosts,
            userPostsCurrentPage + 1,
            userPostsPageSize
          );
          if (contentToAppend.length > 0) {
            setUserPostsCurrentPage(userPostsCurrentPage + 1);
            setUserPostsRenderedData((prev) => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserPosts(false);
        }}
        data={userPostsRenderedData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={GlobalStyles.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
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

  return <AppContent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
