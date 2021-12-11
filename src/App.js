import logo from "./theme/logo.svg";
import { Box } from "@chakra-ui/layout";

function App() {
  return (
    <Box>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </Box>
  );
}

export default App;
