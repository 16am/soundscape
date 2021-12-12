import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";

const hydrophones = [
  {
    id: 1,
    country: "ITALY",
    code: "CNR IRBIM",
    label: "Ancona",
    coordinates: [12.32, 42.05],
    noise: 58,
  },
  {
    id: 2,
    country: "N/A",
    code: "IOF",
    label: "International waters",
    coordinates: [12.32, 42.05],
    noise: 45,
  },
  {
    id: 3,
    country: "CROTIA",
    code: "BWI",
    label: "Losinj",
    coordinates: [12.32, 42.05],
    noise: 85,
  },
  {
    id: 4,
    country: "ITALY",
    code: "CF",
    label: "Rimini",
    coordinates: [12.32, 42.05],
    noise: 75,
  },
  {
    id: 5,
    country: "CROTIA",
    code: "IOF",
    label: "Split",
    coordinates: [12.32, 42.05],
    noise: 65,
  },
  {
    id: 6,
    country: "CROTIA",
    code: "BWI",
    label: "Susak",
    coordinates: [12.32, 42.05],
    noise: 55,
  },
  {
    id: 7,
    country: "ITALY",
    code: "ARPA FVG",
    label: "Trieste",
    coordinates: [12.32, 42.05],
    noise: 65,
  },
  {
    id: 8,
    country: "ITALY",
    code: "CNR ISMAR",
    label: "Venice",
    coordinates: [12.32, 42.05],
    noise: 75,
  },
  {
    id: 9,
    country: "CROTIA",
    code: "IOF",
    label: "Zirje",
    coordinates: [12.32, 42.05],
    noise: 35,
  },
];

function Hydrophone({ hydrophone }) {
  const color = useColorModeValue("#E53E3E", "#E53E3E");
  return (
    <Flex alignItems="center" my="8">
      <Flex w="10" alignItems="center" justifyContent="space-between">
        <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g stroke={color}>
              <ellipse
                opacity=".33"
                cx="18.569"
                cy="18.582"
                rx="18.069"
                ry="18.082"
              />
              <ellipse
                opacity=".66"
                cx="18.569"
                cy="18.582"
                rx="11.317"
                ry="11.325"
              />
            </g>
            <ellipse
              fill={color}
              cx="18.569"
              cy="18.582"
              rx="5.064"
              ry="5.068"
            />
          </g>
        </svg>
      </Flex>
      <Flex w="full" alignItems="center" justifyContent="space-between">
        <Box ml="4" textAlign="left">
          <Text fontSize="xs">{hydrophone.country}</Text>
          <Heading size="md">{hydrophone.label}</Heading>
          <Box fontSize="xs">{`[${hydrophone.coordinates[0]}, ${hydrophone.coordinates[1]}]`}</Box>
          <Text fontSize="sm">{hydrophone.code}</Text>
        </Box>
        <Flex flexDir="column" alignItems="flex-start">
          <Text fontSize="10px" color="gray.400" fontWeight="700">
            NOISE LEVEL
          </Text>
          <Progress
            colorScheme="red"
            value={hydrophone.noise}
            w="40"
            borderRadius="full"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export function Hydrophones() {
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
        <Box>Hydrophones</Box>
      </Box>
      <Box mb="8">
        Pellentesque eu aliquet sapien, in consequat tortor. Nulla lacinia, orci
        non sagittis fermentum, tellus dolor pellentesque tellus, vel
        pellentesque libero eros ac odio.
      </Box>
      {hydrophones.map((h, i) => (
        <Box key={i}>
          <Hydrophone hydrophone={h} />
        </Box>
      ))}
    </>
  );
}
