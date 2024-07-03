import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from "../../assets/styles/Scalling";

const style = StyleSheet.create({
  title: {
    color: "#022150",
    fontFamily: "Inter_500Medium",
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: "#79869F",
    fontFamily: "Inter_400Regular",
  },
});

export default style;
