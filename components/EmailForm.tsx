import {
  IconButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Tooltip,
  VStack,
  useClipboard,
  Card,
  Box,
  Center,
  HStack,
  Stack,
  Flex,
  Text,
  Heading,
  SimpleGrid,

} from '@chakra-ui/react'
import { BsPerson, BsInstagram } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

export default function EmailForm() {
    const { hasCopied, onCopy } = useClipboard('zayne.a.pepin@outlook.com')

    return (
        <Center>
        <Flex
            align='center'
            justify='center'
            mt='40px'
            textAlign='center'
            p='5'
        >
            <Stack spacing={4} align='center'>
            <Text fontFamily='Palm' fontSize={{ base: '22px', md: '26px', lg: '26px' }} color='#202224'>Get In Touch</Text>
            <HStack spacing={4}>
            <Tooltip
                label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                closeOnClick={false}
                hasArrow>
                    <IconButton
                        aria-label='email'
                        variant='ghost'
                        size='lg'
                        fontSize='3xl'
                        icon={<MdEmail />}
                        _hover={{
                            bg: 'red.100',
                            color: 'black'
                        }}
                        onClick={onCopy}
                        isRound
                    />

            </Tooltip>

            <Box 
                as='a' 
                target='_blank'
                href="https://www.instagram.com/karma_plushies/">
                <IconButton
                    aria-label='instagram'
                    variant='ghost'
                    size='lg'
                    fontSize='3xl'
                    icon={<BsInstagram />}
                    _hover={{
                        bg: 'red.100',
                        color: 'black'
                    }}
                    isRound
                >

                </IconButton>
            </Box>
            </HStack>
            
            <form action='mailto:zayne.a.pepin@outlook.com'>
                <SimpleGrid gap={5} p='5' boxShadow='xl' borderRadius='lg' bg='white' columns={2}>
                    <VStack spacing={5}>
                        <FormControl isRequired>
                            <FormLabel color='#202224'>Name</FormLabel>

                            <InputGroup>
                                <InputLeftElement>
                                    <BsPerson 
                                        style={{ color:'grey' }}
                                    />
                                </InputLeftElement>
                                <Input color='#202224' type='text' name='name' placeholder='Your Name' />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel color='#202224'>Email</FormLabel>

                            <InputGroup>
                                <InputLeftElement>
                                    <MdOutlineEmail 
                                        style={{ color:'grey' }}
                                    />
                                </InputLeftElement>
                                <Input color='#202224' type='text' name='email' placeholder='Your Email' />
                            </InputGroup>
                        </FormControl>
                    </VStack>
                    <VStack>
                    <FormControl isRequired>
                        <FormLabel color='#202224'>Message</FormLabel>
                            <Textarea color='#202224' resize='none' rows={3} placeholder='Your Message'>
                            
                            </Textarea>
                        </FormControl>
                        
                        <Button 
                            w='full'
                            bg='pink.100'
                            _hover={{
                                bg:'pink.200'
                            }}
                            type='submit'
                        >
                            Send Message
                        </Button>
                        
                    </VStack>
                </SimpleGrid>
                </form>
            
            </Stack>

        </Flex>
        </Center>

    )
}