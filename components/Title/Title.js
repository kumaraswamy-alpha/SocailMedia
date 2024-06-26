import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const Title = (props) => {
  return (
      <Text style={styles.title}>{props.title}</Text>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
