import React from "react";
import { Flex, Stack, Image, Text, Link } from "@chakra-ui/react";
import logo from "./Assests/boutique_logo.png";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const NavBarLinks = [
    { name: "Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
  ];
  return (
    <Stack align={"center"} py="20px">
      <Image
        onClick={() => {
          router.push("/");
        }}
        w="200px"
        h="200px"
        alt=""
        src={logo.src}
        mt="-50px"
        mb="-40px"
        cursor={"pointer"}
      />
      <Flex justify={"space-evenly"} w="180px">
        {NavBarLinks.map((link, index) => (
          <Stack key={index}>
            <Text
              cursor={"pointer"}
              onClick={() => {
                router.push(`${link.link}`);
              }}
              className={`navbar__link ${
                router.asPath === `${link.link}` ? "sidebar__link--active" : ""
              }`}
            >
              {link.name}
            </Text>
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
}
