import React from "react";
import { Flex, Stack, Image, Text, Box, Button } from "@chakra-ui/react";
import img from "./Assests/standard-img-2.jpg";

export default function Standards() {
  return (
    <Flex
      w="100%"
      h={["220vh", "75vh", "90vh"]}
      bg="rgb(245, 245, 245)"
      py={["40px", "40px", "0"]}
    >
      <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
        <Flex
          w={["100%", "100%", "50%"]}
          h="100%"
          justify={["center", "center", "flex-end"]}
          align={"center"}
        >
          <Image
            mr={["0", "0", "50px"]}
            src={img.src}
            alt=""
            w="550px"
            h="450px"
            boxShadow={[
              "none",
              "-25px 25px 0px 1px black",
              "-25px 25px 0px 1px black",
            ]}
          />
        </Flex>
        <Stack
          w={["100%", "100%", "50%"]}
          justify={"center"}
          align={["center", "center", "normal"]}
        >
          <Stack
            w={["90%", "80%", "70%"]}
            align={"center"}
            ml={["0px", "0px", "50px"]}
            spacing={[7, 5, 3]}
          >
            <Text fontSize={"50px"} textAlign={["center", "center", "left"]}>
              National Standards
            </Text>
            <Text fontSize={["35px", "30px", "25px"]}>Truly Top-Notch</Text>
            <Text fontSize={["28px", "25px", "20px"]} textAlign={"center"}>
              Our boutique offers bespoke designs, impeccable fittings, and
              personalized consultations. With a range of designs and styles, we
              create garments that reflect individuality and sophistication,
              ensuring every client leaves with a perfect fit and a sense of
              confidence in their attire.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
