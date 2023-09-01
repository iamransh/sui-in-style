import React from "react";
import { Flex, Stack, Image, Text, Box, Button } from "@chakra-ui/react";
import { FaBuilding, FaPhone, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <Flex
      w="100%"
      h="70vh"
      bg="rgb(245, 245, 245)"
      justify={"center"}
      align={"center"}
    >
      <Stack w="70%" h="90%">
        <Text fontSize={"50px"} textAlign={"center"} py="50px">
          Contact Us
        </Text>
        <Flex w="100%" justify={"space-evenly"}>
          <Stack w="30%">
            <Flex align={"center"} fontSize={"25px"}>
              <FaBuilding />
              <Text ml="10px"> Address</Text>
            </Flex>
            <Text w="70%">
              Ashopur, Mustafapur, Patna, Jamsaut, Bihar 801503
            </Text>
          </Stack>
          <Stack w="30%">
            <Flex align={"center"} fontSize={"25px"}>
              <FaPhone className="phone" />
              <Text ml="10px">Contact</Text>
            </Flex>
            <Text ml="25px">9334411614</Text>
          </Stack>
          <Stack w="30%">
            <Flex align={"center"} fontSize={"25px"}>
              <FaClock />
              <Text ml="10px">Opening Hours</Text>
            </Flex>
            <Text ml="10px">
              <b>Everyday - </b>11:30 A.M. - 8:00 P.M.
            </Text>
            <Text ml="10px">
              <b>Friday - </b>Closed
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
