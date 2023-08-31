import React from 'react'
import { Flex, Stack, Image, Text } from '@chakra-ui/react'
import logo from './Assests/boutique_logo.png'

export default function Navbar() {
  return (
    <Stack align={'center'} py='20px'>
        <Image w='200px' h='200px' alt="" src={logo.src} mt='-50px' mb='-40px'/>
        <Flex justify={'space-evenly'} w='25%'>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Story</Text>
            <Text>Contact</Text>
        </Flex>
    </Stack>
  )
}
