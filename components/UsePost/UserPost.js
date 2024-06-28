import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import UserProfileImage from "../UserProfile/UserProfile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import style from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import UserProfile from "../UserProfile/UserProfile";
import {
  faBookmark,
  faHeart,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
const UserPost = (props) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfile profileImage={props.profileImage} imageDimension={48} />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}> {props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesome name="ellipsis-h" size={24} color={"#79869F"} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name={"heart-o"} size={18} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.likes}</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 27 }}>
          <FontAwesome name={"comment-o"} size={18} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>
            {props.comments}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 27 }}>
          <FontAwesome name={"bookmark-o"} size={18} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPost;
