import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  userContainer: { flexDirection: "row" },
  userTextContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    color: "#000",
    fontFamily: "Inter_600SemiBold", 
    fontSize: 16,
  },
  location: {
    color: "#79869F",
    fontFamily: "Inter_400Regular", 
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: "center",
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EFF2F6",
  },
});

export default style;
