import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile/Profile";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<Profile/>
		</ChakraProvider>
		
	);
}

export default App;
