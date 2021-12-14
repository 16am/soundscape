import { Container, Flex } from "@chakra-ui/layout";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Credits } from "./components/Credits";
import { Hydrophones } from "./components/Hydrophones";
import { Maps } from "./components/Maps";
import { Navigation } from "./components/Navigation";
import { Welcome } from "./components/Welcome";
import "./theme/index.css";

function App() {
  const { pathname } = useLocation();
  const [language, setLanguage] = useState("EN");

  function handleLanguageChange() {
    setLanguage(language === "EN" ? "IT" : "EN");
  }

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
      <Navigation onLanguageChange={handleLanguageChange} language={language} />
      <Container
        maxW={pathname === "/maps" ? "5xl" : "2xl"}
        px={{ base: "6", sm: "0" }}
      >
        <Routes>
          <Route path="/" element={<Welcome language={language} />} />
          <Route path="maps" element={<Maps language={language} />} />
          <Route path="credits" element={<Credits language={language} />} />
          <Route
            path="hydrophones"
            element={<Hydrophones language={language} />}
          />
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
