import { NavigationContainer } from "@react-navigation/native";
import { Empty } from "./components/Empty";
import Stack from "./components/Stack";

const App = () => {
  return (
    <NavigationContainer>
      <Empty />
      <Stack />
    </NavigationContainer>
  );
};

export default App;
