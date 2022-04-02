import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CharactersScreen from "@screens/characters";
import EpisodesScreen from "@screens/episodes";
import LocationsScreen from "@screens/locations";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  const icon = (name: string, color: string) => {
    return <Icon name={name} color={color} size={23} />;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Characters"
        activeColor="#e91e63"
        inactiveColor="black"
        barStyle={{ backgroundColor: "white" }}>
        <Tab.Screen
          name="Characters"
          component={CharactersScreen}
          options={{
            tabBarLabel: "Characters",
            tabBarIcon: ({ color }) => icon("group", color),
          }}
        />
        <Tab.Screen
          name="Locations"
          component={LocationsScreen}
          options={{
            tabBarLabel: "Locations",
            tabBarIcon: ({ color }) => icon("photo", color),
          }}
        />
        <Tab.Screen
          name="Episodes"
          component={EpisodesScreen}
          options={{
            tabBarLabel: "Episodes",
            tabBarIcon: ({ color }) => icon("video-camera", color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
