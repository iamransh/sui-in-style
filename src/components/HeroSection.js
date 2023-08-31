import React from 'react'
import { Flex, Stack, Image, Text, Box } from '@chakra-ui/react'
import bkg from './Assests/herosection-bkg.png'

export default function HeroSection() {
  return (
    <Flex position='relative' justify={'center'} align={'center'} w='100%' h='80vh' bg=' rgb(175, 164, 147)'>
    <Image src={bkg.src} alt='' />
    <Text color='white' fontSize={'70px'} position='absolute' ml='50px'>Sui-In-Style</Text>
    <Text color='white' fontSize={'20px'} position='absolute' mt='120px' ml='40px'>Explore</Text>
    </Flex>
  )
}
