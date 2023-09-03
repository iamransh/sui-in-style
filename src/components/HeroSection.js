import React from "react";
import { Flex, Stack, Image, Text, Box } from "@chakra-ui/react";
import bkg from "./Assests/herosection-bkg.png";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();
  return (
    <Flex
      position="relative"
      justify={"center"}
      align={"center"}
      w="100%"
      h={["80vw", "60vw", "40vw"]}
      bg=" rgb(175, 164, 147)"
    >
      <Image
        src={bkg.src}
        w={["65%", "50%", "35%"]}
        h={["80%", "80%", "80%"]}
        alt=""
      />
      <Text
        color="white"
        fontSize={["50px", "60px", "70px"]}
        position="absolute"
        ml="50px"
      >
        सुई-In-Style
      </Text>
      <Text
        color="white"
        fontSize={"20px"}
        position="absolute"
        mt="120px"
        ml="40px"
        onClick={() => {
          router.push("/portfolio");
        }}
        _hover={{
          color: "rgb(150, 36, 36)",
          borderBottom: "1px solid rgb(150, 36, 36)",
          cursor: "pointer",
        }}
      >
        Explore
      </Text>
    </Flex>
  );
}
