import React from 'react'
import { Flex, Stack, Image, Text, Box, Button } from '@chakra-ui/react'
import img from './Assests/standard-img-2.jpg'

export default function Standards() {
  return (
    <Flex w='100%' h='100vh' bg='rgb(245, 245, 245)'>
        <Flex>
            <Flex w='50%' h='100%' justify={'flex-end'} align={'center'}>
            <Image mr='50px' src={img.src} alt='' w='550px' h='450px' boxShadow={'-25px 25px 0px 1px black'}/>
            </Flex>
            <Stack w='50%' justify={'center'}>
                <Stack w='70%' align={'center'} ml='50px' spacing={3}>
                <Text fontSize={'50px'}>National Standards</Text>
                <Text fontSize={'25px'}>Truly Top-Notch</Text>
                <Text fontSize={'20px'} textAlign={'center'}>Our boutique offers bespoke designs, impeccable fittings, and personalized consultations. With a range of designs and styles, we create garments that reflect individuality and sophistication, ensuring every client leaves with a perfect fit and a sense of confidence in their attire.</Text>
                </Stack>
            </Stack>
        </Flex>
    </Flex>
  )
}
