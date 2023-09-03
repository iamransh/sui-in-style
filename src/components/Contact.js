import React from "react";
import { Flex, Stack, Image, Text, Box, Button } from "@chakra-ui/react";
import { FaBuilding, FaPhone, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <Flex
      w="100%"
      h={["70vh"]}
      bg="rgb(245, 245, 245)"
      justify={"center"}
      align={"center"}
    >
      <Stack w={["70%"]} h="90%">
        <Text w="100%" fontSize={"50px"} textAlign={"center"} py="50px">
          Contact Us
        </Text>
        <Flex
          w="100%"
          justify={"space-evenly"}
          flexDir={["column", "column", "row"]}
        >
          <Stack
            w={["100%", "100%", "30%"]}
            align={["center", "center", "normal"]}
            pb="40px"
          >
            <Flex align={"center"} fontSize={["30px", "28px", "25px"]}>
              <FaBuilding />
              <Text ml="10px"> Address</Text>
            </Flex>
            <Text
              w="70%"
              fontSize={["25px", "23px", "20px"]}
              textAlign={["center", "center", "left"]}
            >
              Ashopur, Mustafapur, Patna, Jamsaut, Bihar 801503
            </Text>
          </Stack>
          <Stack
            w={["100%", "100%", "30%"]}
            align={["center", "center", "normal"]}
            pb="40px"
          >
            <Flex align={"center"} fontSize={["30px", "28px", "25px"]}>
              <FaPhone className="phone" />
              <Text ml="10px">Contact</Text>
            </Flex>
            <Text
              ml="25px"
              fontSize={["25px", "23px", "20px"]}
              textAlign={["center", "center", "left"]}
            >
              9334411614
            </Text>
          </Stack>
          <Stack
            w={["100%", "100%", "30%"]}
            align={["center", "center", "normal"]}
            pb="40px"
          >
            <Flex align={"center"} fontSize={["30px", "28px", "25px"]}>
              <FaClock />
              <Text ml="10px">Opening Hours</Text>
            </Flex>
            <Text
              ml="10px"
              fontSize={["25px", "23px", "20px"]}
              textAlign={["center", "center", "left"]}
            >
              <b>Everyday - </b>11:30 A.M. - 8:00 P.M.
            </Text>
            <Text
              ml="10px"
              fontSize={["25px", "23px", "20px"]}
              textAlign={["center", "center", "left"]}
            >
              <b>Friday - </b>Closed
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
