import React from "react";
import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import style from "./style";
import ProfileTabsNavigation from "../../navigation/ProfileTabsNavigation";

const Profile = () => {
  const profileData = [
    { key: "profileImage" },
    { key: "userName" },
    { key: "statContainer" },
    { key: "profileTabs" },
  ];

  const renderItem = ({ item }) => {
    switch (item.key) {
      case "profileImage":
        return (
          <View style={style.profileImageContainer}>
            <View style={style.profileImageContent}>
              <Image
                style={style.profileImage}
                source={require("../../assets/images/default_profile.png")}
              />
            </View>
          </View>
        );
      case "userName":
        return <Text style={style.userName}>Emmanuel Robertsen</Text>;
      case "statContainer":
        return (
          <View style={style.statContainer}>
            <View>
              <Text style={style.statAmount}>45</Text>
              <Text style={style.statType}>Following</Text>
            </View>
            <View style={style.statBorder} />
            <View>
              <Text style={style.statAmount}>30M</Text>
              <Text style={style.statType}>Followers</Text>
            </View>
            <View style={style.statBorder} />
            <View>
              <Text style={style.statAmount}>100</Text>
              <Text style={style.statType}>Posts</Text>
            </View>
          </View>
        );
      case "profileTabs":
        return <ProfileTabsNavigation />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={profileData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={GlobalStyles.flexGrow}
      />
    </SafeAreaView>
  );
};

export default Profile;
