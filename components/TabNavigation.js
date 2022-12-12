import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Diary } from "../screens/diary";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Community } from "../screens/community";
import { HomeScreen } from "../screens/home";
import { MyPage } from "../screens/mypage";

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          tabBarActiveTintColor: "#7C81FF",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-home" size={24} color="#7C81FF" />
            ) : (
              <Ionicons name="ios-home-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          unmountOnBlur: true,
          tabBarLabel: "커뮤니티",
          tabBarActiveTintColor: "#7C81FF",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="post" size={24} color="#7C81FF" />
            ) : (
              <MaterialCommunityIcons
                name="post-outline"
                size={24}
                color="black"
              />
            ),
        }}
        navigationKey="Home"
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{
          unmountOnBlur: true,
          tabBarLabel: "일기장",
          tabBarActiveTintColor: "#7C81FF",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="notebook"
                size={24}
                color="#7C81FF"
              />
            ) : (
              <MaterialCommunityIcons
                name="notebook-outline"
                size={24}
                color="black"
              />
            ),
        }}
        navigationKey="Diary"
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          unmountOnBlur: true,
          tabBarLabel: "마이페이지",
          tabBarActiveTintColor: "#7C81FF",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-circle" size={24} color="#7C81FF" />
            ) : (
              <Ionicons name="person-circle-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
