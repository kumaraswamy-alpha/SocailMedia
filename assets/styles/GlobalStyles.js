import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "./Scalling";

const GlobalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: "#FFFFFF",
  },
  flex: {
    flex: 1,
  },
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  messageIcon: {
    backgroundColor: "#F9FAFB",
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#F35BAC",
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: "absolute",
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: "#fff",
    fontSize: scaleFontSize(6),
    fontFamily: "Inter_600SemiBold",
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: "#022150",
    marginTop: 8,
    textAlign: "center",
  },
  userImageContainer: {
    borderColor: "#F35BAC",
    borderWidth: 1,
    padding: 3,
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
  flexGrow: {
    flexGrow: 1,
  },
});
export default GlobalStyles;
