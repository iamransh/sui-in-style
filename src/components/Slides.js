import React from 'react'
import Slider from 'react-slick';
import { Flex, Stack, Image, Text, Box } from '@chakra-ui/react'
import slide1 from './Assests/Slides/slide1.jpg'
import slide2 from './Assests/Slides/slide2.jpg'
import slide3 from './Assests/Slides/slide3.jpg'
import slide4 from './Assests/Slides/slide4.jpg'
import slide5 from './Assests/Slides/slide5.jpg'

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div onClick={onClick} className='nextArrow'>&gt;</div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div onClick={onClick} className='prevArrow'>&lt;</div>
  );
}

export default function Slides() {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 4000,
        autoplaySpeed: 6000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <Stack align={'center'} py='30px'>
        <Box w='85vw' position='relative'>
            <Slider {...settings}>
            <div>
            <Image alt="" src={slide1.src} w='40vw' h='50vw' />
            </div>
            <div>
            <Image alt="" src={slide2.src} w='40vw' h='50vw' />
            </div>
            <div>
            <Image alt="" src={slide3.src} w='40vw' h='50vw' />
            </div>
            <div>
            <Image alt="" src={slide4.src} w='40vw' h='50vw' />
            </div>
            <div>
            <Image alt="" src={slide5.src} w='40vw' h='50vw' />
            </div>
            </Slider>
        </Box>
    </Stack>
  )
}
