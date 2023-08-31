import React from 'react'
import { Flex, Stack, Image, Text, Box, Button } from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa";
import photo from './Assests/about-img.jpg'

export default function About() {
  return (
    <Flex w='100%' h='80vh' bg='gray.100' justify={'center'} align={'center'}>
        <Flex w='90%' h='90%' bg='white'>
            <Stack w='60%' h='100%' justify={'center'} align={'center'}>
                <Stack w='50%' spacing={5}>
                    <Text fontWeight={'medium'} fontSize={'50px'}>About</Text>
                    <Text fontSize={'25px'}>My name is Sangeeta Srivastava</Text>
                    <Text>From a bored housewife, now thriving as a successful business owner, crafting dreams for women with passion and precision.</Text>
                    <Flex align={'center'}><FaPhone className='phone'/><Text ml='10px'>9334411614</Text></Flex>
                    <Button mt='10px' w='35%' borderRadius={0} bg={'black'} color='white' fontWeight={'normal'}
                    _hover={{
                        color: 'black',
                        backgroundColor: 'white',
                        border: '1px solid black',
                    }}>About Me</Button>
                </Stack>
            </Stack>
            <Image w='40%' h='100%' src={photo.src} alt=''/>
        </Flex>
    </Flex>
  )
}
