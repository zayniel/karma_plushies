import Head from 'next/head';
import * as React from 'react'
import Layout from '../components/Layout'
import EmailForm from '../components/EmailForm'
import { BsCart2 } from 'react-icons/bs'
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
  Heading,
  Tooltip,
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
        <SimpleGrid columns={2}>
          <HStack>
          <Avatar mx='20px' mt={{ base: '16px', md: '6px', lg: '6px' }} size='xl' name='Karma' src='./pfp.jpg'></Avatar>
          <Box w={{ base:'200px', md: '300px', lg: '400px'}}>
            <Text fontSize={{ base:'30px', md: '38px', lg: '38px' }} mt={{ base: '20px', md: '6px', lg: '6px' }} variant='title' color='#202224'>Karma Plushies</Text>
          </Box>
          </HStack>
        </SimpleGrid>
      </Box>

      <Tooltip
        label='View Cart'
        closeOnClick={false}
        hasArrow
      >
      <Box position='absolute' right={{ base: 6, md: 10, lg: 10}} top={10} zIndex={99}>
        <IconButton 
            aria-label='View Cart' 
            as='a' href='#'
            borderRadius='180px'
            color='black'
            bgColor='pink.100'
            size='lg'
            variant='ghost'
            _hover={{
              bg: 'pink.200'
            }}
            icon={<BsCart2 />}  
            />
        </Box>
        </Tooltip>
    </div>

    <EmailForm></EmailForm>

    <div className='title'>
      <Text color='#202224' fontFamily='Palm' fontSize='26px' mt='40px'>Featured Plushies</Text>
    </div>

    <div className='grid-container'>
      <SimpleGrid py='50px' px='40px' spacing='40px' minChildWidth='300px'>
          
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
              <Heading fontSize='2xl'>Frederick the Frog</Heading>
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
                <Heading fontSize='2xl'>Karma the Kitty</Heading>
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
                <Heading fontSize='2xl'>Cosmo the Cat</Heading>
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
                <Heading fontSize='2xl'>Leo the Laying Cat</Heading>
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
