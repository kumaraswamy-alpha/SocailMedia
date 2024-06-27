import { View, Text, Image } from "react-native";
import React from "react";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import PropTypes from "prop-types";

const UserProfile = (props) => {
  return (
    <View
      style={[
        GlobalStyles.userImageContainer,
        { borderRadius: props.imageDimension },
      ]}
    >
      <Image
        source={props.profileImage}
        style={{ width: props.imageDimension, height: props.imageDimension }}
      />
    </View>
  );
};
UserProfile,
  (propTypes = {
    profileImage: PropTypes.any.isRequired,
    inageDimesion: PropTypes.number.isRequired,
  });

export default UserProfile;
