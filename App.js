import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { Empty } from "./components/Empty";
import Stack from "./components/Stack";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Empty />
          <Stack />
        </QueryClientProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
