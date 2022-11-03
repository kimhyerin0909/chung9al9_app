import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import { Empty } from "./components/Empty";
import Stack from "./components/Stack";

const App = () => {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <Empty />
        <Stack />
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
