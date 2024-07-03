import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileTabTitle from "../components/ProfileTabs/ProfileTabTitle";
import ProfileTabContent from "../components/ProfileTabContent/ProfileTabContent";

const ProfileTabs = createMaterialTopTabNavigator();

const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}
    >
      <ProfileTabs.Screen
        name="Tab1"
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title="Photos" />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab2"
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title="Videos" />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab3"
        options={{
          tabBarLabel: ({ focused }) => (
            <ProfileTabTitle isFocused={focused} title="Saved" />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

export default ProfileTabsNavigation;
