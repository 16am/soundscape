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
        <Box>{languages.credits[language]}</Box>
      </Box>
      <Box d="none" mb="8">
        {languages.credits_description[language]}
      </Box>
      <Box mt="20">
        <Text mb="2">{languages.word_and_pictures[language]}</Text>
        <Box>
          <b>Francesco Martinelli</b>
          <Link d="none" href="#" color={linkColor} isExternal ml="2">
            @fra####
          </Link>
        </Box>
        <Box>
          <b>Elisabetta Zavoli</b>
          <Link
            href="https://twitter.com/elizavola"
            color={linkColor}
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
            isExternal
            ml="2"
          >
            @16amdotnet
          </Link>
        </Box>
      </Box>
      <Box mt="8" d="none">
        <Text mb="2">{languages.more_credits[language]}</Text>
        <Box>
          <b>Lorem Institute</b>
          <Link href="#" color={linkColor} isExternal ml="2">
            @twitter_account
          </Link>
        </Box>
      </Box>
      <Box mt="12"></Box>
    </>
  );
}
