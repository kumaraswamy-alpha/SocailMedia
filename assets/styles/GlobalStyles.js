import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  messageIcon: { padding: 14, backgroundColor: "#F9FAFB", borderRadius: 100 },
  messageNumberContainer: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#F35BAC",
    borderRadius: 10,
    width: 10,
    height: 10,
    position: "absolute",
    top: 12,
    right: 10,
  },
  messageNumber: {
    color: "#fff",
    fontSize: 6,
    fontFamily: "Inter_600SemiBold",
  },
  userStoriesContainer: {
    marginTop: 20,
    marginHorizontal: 28,
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
});
export default GlobalStyles;
