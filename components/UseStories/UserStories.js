import { View, Text, Image } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import UserProfile from "../UserProfile/UserProfile";

const UserStories = (props) => {
  return (
    <View style={GlobalStyles.storyContainer}>
      <UserProfile profileImage={props.profileImage} imageDimension={65} />
      <Text style={GlobalStyles.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStories.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStories;
