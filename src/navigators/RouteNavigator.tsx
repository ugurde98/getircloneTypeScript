import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

function RouteNavigator() {
  const CustomTabBarButton = () => {
    return (
      <TouchableOpacity
        style={{
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 32,
          justifyContent: "center",
          marginTop: -15,
          alignItems: "center",
          backgroundColor: "#5C3EBC",
          width: 55,
          height: 55,
        }}
      >
        <Entypo name="list" size={32} color="#FFD00C" />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AnaSayfa"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#5C3EBC",
          tabBarInactiveTintColor: "#959595",
          headerShown: false,
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Bildirimler"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sat"
          component={HomeNavigator}
          options={{
            tabBarButton: (props) => <CustomTabBarButton  />,
          }}
        />

        <Tab.Screen
          name="Sohbet"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="İlanlarım"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="gift" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RouteNavigator;
