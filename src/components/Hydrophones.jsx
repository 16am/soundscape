import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useState } from "react";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";

const hydrophones = [
  {
    id: 1,
    country: "ITALY",
    code: "CNR IRBIM",
    name: "Ancona",
    coordinates: [12.32, 42.05],
    noise: 58,
  },
  {
    id: 2,
    country: "N/A",
    code: "IOF",
    name: "International waters",
    coordinates: [12.32, 42.05],
    noise: 45,
  },
  {
    id: 3,
    country: "CROTIA",
    code: "BWI",
    name: "Lošinj",
    coordinates: [14.5, 44.5],
    noise: 85,
  },
  {
    id: 4,
    country: "ITALY",
    code: "CF",
    name: "Rimini",
    coordinates: [12.32, 42.05],
    noise: 75,
  },
  {
    id: 5,
    country: "CROTIA",
    code: "IOF",
    name: "Split",
    coordinates: [12.32, 42.05],
    noise: 65,
  },
  {
    id: 6,
    country: "CROTIA",
    code: "BWI",
    name: "Susak",
    coordinates: [12.32, 42.05],
    noise: 55,
  },
  {
    id: 7,
    country: "ITALY",
    code: "ARPA FVG",
    name: "Trieste",
    coordinates: [12.32, 42.05],
    noise: 65,
  },
  {
    id: 8,
    country: "ITALY",
    code: "CNR ISMAR",
    name: "Venice",
    coordinates: [12.32, 42.05],
    noise: 75,
  },
  {
    id: 9,
    country: "CROTIA",
    code: "IOF",
    name: "Zirje",
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
          <Text
            fontSize="xs"
            fontWeight="extrabold"
            color={useColorModeValue("gray.300", "gray.600")}
          >
            {hydrophone.country}
          </Text>
          <Flex alignItems="flex-end">
            <Heading size="md">{hydrophone.name}</Heading>
            <Text ml="2" fontSize="sm" opacity="0.5">
              {hydrophone.code}
            </Text>
          </Flex>
          <Flex fontSize="xs" opacity="0.5">
            {`[${hydrophone.coordinates[0]}, ${hydrophone.coordinates[1]}]`}
          </Flex>
        </Box>
        <Flex flexDir="column" alignItems="flex-start">
          <Text fontSize="10px" color="gray.400" fontWeight="700">
            NOISE LEVEL
          </Text>
          <Progress
            my="1"
            value={hydrophone.noise}
            w="40"
            borderRadius="full"
          />
          <Text fontSize="10px" color="gray.400" fontWeight="700">
            {hydrophone.noise}db
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function Hydrophones() {
  const [criteria, setCritera] = useState("noise");
  const [order, setOrder] = useState(true);
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
      <Box mb="8" px="10">
        Pellentesque eu aliquet sapien, in consequat tortor. Nulla lacinia, orci
        non sagittis fermentum, tellus dolor pellentesque tellus, vel
        pellentesque libero eros ac odio.
      </Box>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        p="2"
        pt="2.5"
        border="1px solid"
        borderRadius="xl"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <RadioGroup size="sm" onChange={setCritera} value={criteria}>
          {Object.keys(hydrophones[0])
            .sort()
            .map((h, i) => (
              <Radio mx="2" key={i} value={h}>
                {h}
              </Radio>
            ))}
        </RadioGroup>
        <Button size="sm" variant="ghost" onClick={() => setOrder(!order)}>
          <Box mr="1">{order ? <RiSortDesc /> : <RiSortAsc />}</Box>
          {order ? "A-Z" : "Z-A"}
        </Button>
      </Flex>
      {hydrophones
        .sort((a, b) => {
          if (order) {
            if (a[criteria] < b[criteria]) {
              return 1;
            }
            if (a[criteria] > b[criteria]) {
              return -1;
            }
          } else {
            if (a[criteria] < b[criteria]) {
              return -1;
            }
            if (a[criteria] > b[criteria]) {
              return 1;
            }
          }
          return 0;
        })
        .map((h, i) => (
          <Box key={i}>
            <Hydrophone hydrophone={h} />
          </Box>
        ))}
    </>
  );
}
