import React, { useEffect } from "react";

import { ImageBackground } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import { useTheme } from "@hooks";
import { useStore } from "@mobx/stores";
import {
  CharactersScreen,
  EpisodesScreen,
  LocationsScreen,
  LoginScreen,
  ProfileScreen
} from "@screens";
import { getUser, onAuthStateChanged, Screen } from "@utils";

import { styles } from "./styles";

const Tab = createBottomTabNavigator();

type RootTabParams = { [key in Screen]: undefined };

export const Navigation = observer(() => {
  const icon = (route: Screen, color: string) => {
    let name = "";
    if (route === Screen.CHARACTERS) name = "group";
    else if (route === Screen.LOCATIONS) name = "photo";
    else if (route === Screen.EPISODES) name = "video-camera";
    else if (route === Screen.PROFILE) name = "user";
    else return;
    return <Icon name={name} color={color} size={23} />;
  };

  const { colors } = useTheme();
  const { navbar, navbarIcon } = colors;

  const { userStore } = useStore();
  const navigationRef = useNavigationContainerRef<RootTabParams>();

  useEffect(() => {
    const { navigate } = navigationRef;
    const unsubscribe = onAuthStateChanged((user) => {
      userStore.setUser(getUser());
      navigate(user ? Screen.CHARACTERS : Screen.LOGIN);
    });
    SplashScreen.hide();
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <ImageBackground
        blurRadius={5}
        style={styles.image}
        source={require("@assets/background.jpeg")}
      >
        <Tab.Navigator
          sceneContainerStyle={styles.container}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: navbarIcon.active,
            tabBarInactiveTintColor: navbarIcon.inactive,
            tabBarIcon: ({ color }) => icon(route.name as Screen, color),
            tabBarStyle: { backgroundColor: navbar, ...styles.bar }
          })}
        >
          <Tab.Screen
            name={Screen.LOGIN}
            component={LoginScreen}
            options={{
              tabBarItemStyle: styles.loginTab,
              tabBarStyle: styles.loginTab
            }}
          />
          <Tab.Screen name={Screen.CHARACTERS} component={CharactersScreen} />
          <Tab.Screen name={Screen.LOCATIONS} component={LocationsScreen} />
          <Tab.Screen name={Screen.EPISODES} component={EpisodesScreen} />
          <Tab.Screen name={Screen.PROFILE} component={ProfileScreen} />
        </Tab.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
});
