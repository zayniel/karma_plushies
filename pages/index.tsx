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
  GridItem,
  SimpleGrid,
  Image,
  CardHeader,
  CardBody,
  IconButton,

} from '@chakra-ui/react'

const theme = extendTheme ({
  styles: {
    global: (props) => ({
      body: {
        bg: '#FFF5F5'
      }
    })
  },
  components: {
    Text: {
      variants: {
        'title': {
          fontFamily: 'Palm'
        },
        'heading': {
          fontFamily: 'Palm'
        }
      }
    }
  },
  breakpoints: {
    sm: '200px',
    md: '500px',
    lg: '1000px'
  }
})

export default function Home() {

  return (
    <ChakraProvider theme={theme}>
    <LightMode>
    <Layout>
    
    <div className='title'>
      <Box boxShadow='lg' bgColor='whiteAlpha.800' h='130px' w='full'>
        <SimpleGrid columns={3}>
          <Avatar ml='5' mt='4' size='xl' name='Karma' src='./pfp.jpg'></Avatar>
          <Box w={{ base:'300px', md: '400px', lg: '630px'}}>
            <Text fontSize={{ base: '30px', md: '40px', lg: '50px' }} mt={{ base: '5', md: '6', lg:'6' }} variant='title' color='black'>Karma Plushies</Text>
          </Box>
          
        </SimpleGrid>
      </Box>
    </div>

    <div className='grid-container'>
      <SimpleGrid pt='50px' px='100px' spacing='40px' minChildWidth='300px'>
          
          <Box>
          <Card
          boxShadow='lg'
          borderRadius='xl'
          >
            <CardHeader>
            <Image
              src='./frog.jpg'
              objectFit='contain'
              borderRadius='xl'
            />
            </CardHeader>
            <CardBody>
              <Text fontSize='xl' variant='heading'>Frederick the Frog</Text>
            </CardBody>
          </Card>
          </Box>
        
          <Box>
            <Card
            boxShadow='lg'
            borderRadius='xl'
            >
              <CardHeader>
              <Image
                src='./karma.jpg'
                objectFit='contain'
                borderRadius='xl'
              />
              </CardHeader>
              <CardBody>
                <Text fontSize='xl' variant='heading'>Karma the Kitty</Text>
              </CardBody>
            </Card>
          </Box>
        
          <Box>
            <Card
            boxShadow='lg'
            borderRadius='xl'
            >
              <CardHeader>
              <Image
                src='./kitten.jpg'
                objectFit='contain'
                borderRadius='xl'
              />
              </CardHeader>
              <CardBody>
                <Text fontSize='xl' variant='heading'>Cosmo the Cat</Text>
              </CardBody>
            </Card>
          </Box>

          <Box>
            <Card
            boxShadow='lg'
            borderRadius='xl'
            >
              <CardHeader>
              <Image
                src='./laying_kitten.jpg'
                objectFit='contain'
                borderRadius='xl'
              />
              </CardHeader>
              <CardBody>
                <Text fontSize='xl' variant='heading'>Leo the Laying Cat</Text>
              </CardBody>
            </Card>
          </Box>
          
      </SimpleGrid>
    </div>

    </Layout>
    </LightMode>
    </ChakraProvider>
  )
}
