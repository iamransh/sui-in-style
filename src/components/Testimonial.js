import React from "react";
import Slider from "react-slick";
import { Flex, Stack, Image, Text, Box, Button } from "@chakra-ui/react";

function SampleNextArrow2(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="nextArrow2">
      &gt;
    </div>
  );
}

function SamplePrevArrow2(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prevArrow2">
      &lt;
    </div>
  );
}

export default function Testimonial() {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
  };
  const testimonials = [
    {
      name: "Pranav",
      comment:
        '" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cum repellat voluptate odit, quos vel! Dolore fugit voluptas eveniet earum porro nesciunt dicta harum placeat nam, architecto nobis, modi magni? "',
    },
    {
      name: "Aman",
      comment:
        '" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cum repellat voluptate odit, quos vel! Dolore fugit voluptas eveniet earum porro nesciunt dicta harum placeat nam, architecto nobis, modi magni? "',
    },
  ];
  return (
    <Stack
      w="100%"
      h={["", "50vh", "63vh"]}
      bg="blackAlpha.900"
      py="50px"
      align="center"
    >
      <Text textAlign={"center"} fontSize={"50px"} color="white">
        Testimonials
      </Text>
      <Box w="85%" h="50%" position="relative" my="30px">
        <Slider {...settings}>
          {testimonials.map((comments, index) => (
            <Stack key={index}>
              <Flex w="100%" justify={"center"}>
                <Text
                  color="white"
                  fontSize={"28px"}
                  w="80%"
                  my="40px"
                  textAlign={"center"}
                >
                  {comments.comment}
                </Text>
              </Flex>
              <Text color="white" fontSize={"25px"} textAlign={"center"}>
                - {comments.name}
              </Text>
            </Stack>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
}
