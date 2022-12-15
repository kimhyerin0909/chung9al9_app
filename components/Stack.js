import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigation } from "./TabNavigation";
import { Login } from "../screens/auth/login";
import { SignUp } from "../screens/auth/signup";
import { BossSignUp } from "../screens/auth/signup/boss";
import { BossMoreInfo } from "../screens/auth/signup/boss/moreInfo";
import { YouthSignUp } from "../screens/auth/signup/youth";
import { Splash } from "./Splash";
import { Detail } from "../screens/home/detail";
import "react-native-gesture-handler";

const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, animation: "none" }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="YouthSignUp"
        component={YouthSignUp}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="BossSignUp"
        component={BossSignUp}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen name="BossMoreInfo" component={BossMoreInfo} />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default Stack;
