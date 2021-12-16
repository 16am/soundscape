import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link, Text } from "@chakra-ui/layout";
import { languages } from "../language/languages";

export function Credits({ language }) {
  const linkColor = useColorModeValue("cyan.400", "cyan.700");
  return (
    <>
      <Box
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color={useColorModeValue("gray.900", "gray.100")}
        mb={6}
        pos="relative"
        zIndex="2"
      >
        <Box pr="0.25">{languages.credits[language]}</Box>
      </Box>
      <Box mb="8">{languages.credits_description[language]}</Box>
      <Box mt="20">
        <Text mb="2">{languages.word_and_pictures[language]}</Text>
        <Box>
          <b>Francesco Martinelli</b>
          <Link
            href="https://www.instagram.com/frahmartino/"
            title="Instagram personale profile page"
            color={linkColor}
            isExternal
            ml="2"
          >
            @frahmartino
          </Link>
        </Box>
        <Box>
          <b>Elisabetta Zavoli</b>
          <Link
            href="https://twitter.com/elizavola"
            color={linkColor}
            title="Twitter personale profile page"
            isExternal
            ml="2"
          >
            @elizavola
          </Link>
        </Box>
      </Box>
      <Box mt="8">
        <Text mb="2">{languages.web_design[language]}</Text>
        <Box>
          <b>Alessandro D'Alfonso</b>
          <Link
            href="https://twitter.com/16amdotnet"
            color={linkColor}
            title="Twitter personale profile page"
            isExternal
            ml="2"
          >
            @16amdotnet
          </Link>
        </Box>
      </Box>
      <Box mt="8">
        <Text mb="2">{languages.sound_credits[language]}</Text>
        <Box>
          <b>Emiliano Battistini, Fabio Mina, Fondazione Cetacea</b>
          <Link d="none" href="#" color={linkColor} isExternal ml="2">
            @twitter_account
          </Link>
        </Box>
      </Box>
      <Box mt="12"></Box>
    </>
  );
}
