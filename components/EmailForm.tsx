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
    const { hasCopied, onCopy } = useClipboard('karmaplushies@example.com')

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
            <Text fontFamily='Palm' fontSize='26px' color='#202224'>Get In Touch</Text>
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
            
                <SimpleGrid gap={5} p='5' boxShadow='xl' borderRadius='lg' bg='white' columns={2}>
                    <VStack spacing={5}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>

                            <InputGroup>
                                <InputLeftElement>
                                    <BsPerson />
                                </InputLeftElement>
                                <Input type='text' name='name' placeholder='Your Name' />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>

                            <InputGroup>
                                <InputLeftElement>
                                    <MdOutlineEmail />
                                </InputLeftElement>
                                <Input type='text' name='email' placeholder='Your Email' />
                            </InputGroup>
                        </FormControl>
                    </VStack>
                    <VStack>
                    <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                            <Textarea resize='none' rows={3} name='message' placeholder='Your Message' />
                        </FormControl>
                        
                        <Button 
                            w='full'
                            bg='pink.100'
                            _hover={{
                                bg:'pink.200'
                            }}
                        >
                            Send Message
                        </Button>
                    </VStack>
                </SimpleGrid>
            
            </Stack>

        </Flex>
        </Center>

    )
}