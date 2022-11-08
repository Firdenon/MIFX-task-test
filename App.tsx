import { SafeAreaView, StatusBar, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProductList from "./src/views/ProductList";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={{ backgroundColor: "#f0f0f0" }}>
        <ProductList />
      </View>
    </SafeAreaView>
  );
}
