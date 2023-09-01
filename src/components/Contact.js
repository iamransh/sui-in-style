import React from 'react'
import { Flex, Stack, Image, Text, Box, Button } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Flex w='100%' h='70vh' bg='rgb(245, 245, 245)' justify={'center'} align={'center'}>
        <Stack w='70%' h='90%'>
            <Text fontSize={'50px'} textAlign={'center'} py='50px'>Contact Us</Text>
            <Flex w='100%' justify={'space-evenly'} align={'center'}>
                <Stack w='30%'>
                    <Text fontSize={'25px'}>Address</Text>
                </Stack>
                <Stack w='30%'>
                <Text fontSize={'25px'}>Contact</Text>
                </Stack>
                <Stack w='30%'>
                <Text fontSize={'25px'}>Opening Hours</Text>
                </Stack>
            </Flex>
        </Stack>
    </Flex>
  )
}
