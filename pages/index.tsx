import Head from 'next/head';
import * as React from 'react'
import Layout from '../components/Layout'
import {
  ChakraProvider,
  extendTheme,
  Card,
  LightMode,
  Grid,
  Box,
  Text,
  Avatar,
  HStack,
  Center,

} from '@chakra-ui/react'

const theme = extendTheme ({
  styles: {
    global: {
      body: {
        bg: 'transparent'
      }
    }
  },
  components: {
    Text: {
      variants: {
        'title': {
          fontSize: 50
        }
      }
    }
  }
})

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
    <Layout>
    <LightMode>

    <div className='title'>
    <Box bgColor='whiteAlpha.800' h='130px' w='full'>
      <Center>
      <HStack mt='16px' spacing='40px'>
      <Avatar size='xl' name='Karma' src='./pfp.jpg'></Avatar>
      <Text variant='title' color='#38A169'>Karma Plushies</Text>
      </HStack>
      </Center>
    </Box>
    </div>

    <div className='grid-container'>
    <Grid>
      
    </Grid>
    </div>

    </LightMode>
    </Layout>
    </ChakraProvider>
  )
}
