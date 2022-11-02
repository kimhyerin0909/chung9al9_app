import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigation } from "./TabNavigation";
import { Login } from "../screens/auth/login";
import { SignUp } from "../screens/auth/signup";
import { BossSignUp } from "../screens/auth/signup/boss";
import { BossMoreInfo } from "../screens/auth/signup/boss/moreInfo";
import { YouthSignUp } from "../screens/auth/signup/youth";
import { Splash } from "./Splash";

const Stack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, animation: "none" }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="YouthSignUp" component={YouthSignUp} />
      <Stack.Screen name="BossSignUp" component={BossSignUp} />
      <Stack.Screen name="BossMoreInfo" component={BossMoreInfo} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default Stack;
