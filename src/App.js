import "@fontsource/poppins/100.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import { Box, Container, Flex } from "@chakra-ui/layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { Credits } from "./components/Credits";
import { Maps } from "./components/Maps";
import { Navigation } from "./components/Navigation";
import { Welcome } from "./components/Welcome";
import "./theme/index.css";
import bg from "./theme/background.png";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Hydrophones } from "./components/Hydrophones";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Flex
      flexDir="column"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      // bgImage={bg}
      bgPos="center"
      bgSize="cover"
      pos="relative"
      zIndex="1"
      py="32"
    >
      <Navigation />
      <Container maxW={pathname === "/maps" ? "6xl" : "2xl"}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="maps" element={<Maps />} />
          <Route path="credits" element={<Credits />} />
          <Route path="hydrophones" element={<Hydrophones />} />
        </Routes>
      </Container>
      {/* <Box
        d="none"
        w="100vw"
        h="100vh"
        bg={useColorModeValue("whiteAlpha.800", "blackAlpha.800")}
        pos="fixed"
        zIndex="1"
      ></Box> */}
    </Flex>
  );
}

export default App;
