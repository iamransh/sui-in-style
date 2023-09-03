import React from "react";
import {
  Flex,
  Stack,
  Image,
  Text,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import photo from "./Assests/about-img-final.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollBehavior = "inside";
  const size = "xl";

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.500" backdropFilter="blur(10px)" />
  );

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        size={size}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        motionPreset="slideInBottom"
      >
        <OverlayOne />
        {/* <ModalOverlay /> */}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb="20px">
            <Stack>
              <Image w="250px" h="250px" src={photo.src} alt="" />
              <Heading>My name is Sangeeta Srivastava.</Heading>
              <Text>
                <br />
                {
                  "With over 25 years of experience in the beauty industry, I am a certified beautician whose passion for creativity has shaped my dynamic career. I've had the privilege of working with renowned brands and establishing a thriving ladies beauty parlour for five years, where I honed my craft and built lasting relationships with clients."
                }
                <br />
                <br />
                {
                  "My journey began at a young age when I discovered my love for creative professions. Always eager to learn and grow, I've devoted my time to self-improvement and productivity. In 2008, I took my entrepreneurial spirit to the next level, opening my first beauty parlour and boutique in the women's fashion industry."
                }
                <br />
                <br />
                Balancing my professional ambitions with my role as a housewife
                has been made possible by the unwavering support of my loving
                husband and two wonderful children. Their encouragement has
                allowed me to pursue my dreams, gain valuable experiences, and
                successfully manage both my family and career.
                <br />
                <br />
                My story is one of dedication, resilience, and the pursuit of
                creative passions. I continue to thrive in the ever-evolving
                world of beauty and fashion, eager to embrace new opportunities
                and share my expertise with others.
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        w="100%"
        h={["150vh", "120vh", "85vh"]}
        py="20px"
        bg="rgb(245, 245, 245)"
        justify={"center"}
        align={"center"}
      >
        <Flex
          w={["100%", "90%", "90%"]}
          h={["100%", "90%", "90%"]}
          bg="white"
          flexDirection={["column", "column", "row"]}
          align={["center", "center", "normal"]}
          py={["20px", "20px", "0"]}
        >
          <Stack
            w={["100%", "100%", "60%"]}
            h="100%"
            justify={"center"}
            align={"center"}
          >
            <Stack
              w={["90%", "70%", "50%"]}
              align={["center", "center", "flex-start"]}
              textAlign={["center", "center", "left"]}
              spacing={5}
            >
              <Text fontWeight={"medium"} fontSize={"50px"}>
                About
              </Text>
              <Text fontSize={["30px", "28px", "25px"]}>
                My name is Sangeeta Srivastava
              </Text>
              <Text fontSize={["25px", "23px", "20px"]}>
                From a bored housewife, now thriving as a successful business
                owner, crafting dreams for women with passion and precision.
              </Text>
              <Flex align={"center"} fontSize={["25px", "23px", "20px"]}>
                <FaPhone className="phone" />
                <Text ml="10px">9334411614</Text>
              </Flex>
              <Button
                mt="10px"
                w="35%"
                borderRadius={0}
                bg={"black"}
                color="white"
                fontWeight={"normal"}
                onClick={onOpen}
                _hover={{
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                }}
              >
                About Me
              </Button>
            </Stack>
          </Stack>
          <Image
            w={["100%", "70%", "40%"]}
            h="100%"
            src={photo.src}
            alt=""
            pt={["40px", "40px", "0"]}
          />
        </Flex>
      </Flex>
    </>
  );
}
