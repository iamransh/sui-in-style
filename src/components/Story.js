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

export default function Story() {
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
          <ModalHeader fontWeight={"bold"} fontSize={"40px"}>
            Our Story
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="20px">
            <Stack>
              <Text>
                <br />
                {
                  'As the proud owner of our ladies tailor shop, I am delighted to share our journey with you. Our story began in August 2020, born out of my personal desire to break free from the monotony of lockdown life. Boredom, coupled with a passion for fashion, led me to establish this venture, initially with just one dedicated staff member, "Tailor Master Rizwan".'
                }
                <br />
                <br />
                {
                  "From the very beginning, our mission has been clear: to offer unparalleled craftsmanship, impeccable fittings, andpersonalized consultations to our clients. We understand that clothing is not just fabric; it's an expression of individuality and style. Therefore, we painstakingly craft each garment to reflect the unique personality and sophistication of our clients."
                }
                <br />
                <br />
                At our shop, we value your time and money. Timely delivery is a
                commitment we take seriously, ensuring that you receive your
                custom-made attire as promised. Moreover, we believe in making
                quality fashion accessible. We strive to keep our services
                affordable without compromising on the precision and attention
                to detail that define our work.
                <br />
                <br />
                Honesty is the cornerstone of our business. You can trust us to
                provide transparent and fair services, putting your satisfaction
                at the forefront of everything we do. Our commitment to
                integrity is mirrored in the exceptional quality of our
                craftsmanship and the way we conduct our business.
                <br />
                <br />
                {
                  "Our journey, which began as a response to boredom during the lockdown, has evolved into a thriving establishment that takes pride in transforming your fashion aspirations into reality. To meet the growing demand and maintain our commitment to quality and timeliness, we've expanded to a team of three dedicated staff members."
                }
                <br />
                <br />
                Thank you for being a part of our story. We invite you to
                experience the transformational power of personalized, honest,
                and expert tailoring services, where your confidence in your
                attire is our ultimate goal.
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        w="100%"
        h={["170vh", "120vh", "70vh"]}
        flexDir={["column", "column", "row"]}
      >
        <Stack
          w={["100%", "100%", "50%"]}
          h="100%"
          bg="blackAlpha.900"
          justify={"center"}
          align={"center"}
        >
          <Stack w="60%" color="white" pb={["40px", "0", "0"]}>
            <Text
              fontSize={"70px"}
              w={["100%", "350px", "200px"]}
              pt={["30px", "30px", "50px"]}
              pb={["50px"]}
              borderBottom={"1px solid white"}
              bor
            >
              Our Story
            </Text>
            <Text
              pt="50px"
              pb="5px"
              w={["120px", "100px", "85px"]}
              onClick={onOpen}
              _hover={{
                translateY: "5px",
                borderBottom: "1px solid white",
                cursor: "pointer",
              }}
              fontSize={["23px", "20px", "17px"]}
            >
              Read More
            </Text>
          </Stack>
        </Stack>
        <Stack
          w={["100%", "100%", "50%"]}
          h="100%"
          justify={"center"}
          align={"center"}
          py={["40px", "0", "0"]}
        >
          <Stack w="70%" spacing={10}>
            <Text fontSize={["50px", "40px", "30px"]}>Get to know us</Text>
            <Text fontSize={["22px", "20px", "18px"]}>
              {
                "Born from lockdown boredom, a housewife's determination led to a thriving boutique in 2020. Crafting elegance, her passion transformed into a successful venture, empowering her to create and inspire."
              }
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
