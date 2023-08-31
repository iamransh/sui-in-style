import React from 'react'
import { Flex, Stack, Image, Text, Box, Button } from '@chakra-ui/react'

export default function Story() {
  return (
    <Flex w='100%' h='70vh'>
        <Stack w='50%' h='100%' bg='blackAlpha.900' justify={'center'} align={'center'}>
            <Stack w='60%' color='white'>
                <Text fontSize={'70px'} w='200px' py='50px' borderBottom={'1px solid white'} bor>Our Story</Text>
                <Text pt='50px' pb='5px' w='85px'
                _hover={{
                    translateY: '5px',
                    borderBottom: '1px solid white',
                }}>Read More</Text>
            </Stack>
        </Stack>
        <Stack w='50%' h='100%' justify={'center'} align={'center'}>
            <Stack w='70%' spacing={10}>
                <Text fontSize={'30px'}>Get to know us</Text>
                <Text fontSize={'20px'}>{"Born from lockdown boredom, a housewife's determination led to a thriving boutique in 2020. Crafting elegance, her passion transformed into a successful venture, empowering her to create and inspire."}</Text>
            </Stack>
        </Stack>
    </Flex>
  )
}
