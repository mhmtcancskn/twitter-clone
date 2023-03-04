
import React from 'react'
import Twittes from '../components/Twittes';
import { Box, Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center,Flex,InputGroup,Text} from '@chakra-ui/react'
import Layout from '../components/Layout';


export const Discover = () => {

    return (
        <Layout>
               <Flex flexDirection={"column"} flex={"1"} padding={"20px"}>
                        <InputGroup >

                            <Input type='Search' placeholder="Twitter'da Ara" borderRadius={"100"} bg={"#e6ecf0"} height={"40px"} width={"100%"} />
                        </InputGroup>
                        <Box width={"100%"} padding={"10px"}>
                            <Text color={"363B3F"} fontSize={"20px"} fontFamily={"inherit"} fontWeight={"800"}>İlgini çekebilecek gündemler</Text>
                        </Box>
                        <Box width={"100%"} padding={"10px"}>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>Türkiye tarihinde gündemde</Text>
                            <Text fontWeight={"700"} color={"#rgb(85,89,92)"} fontSize={"15px"}>Wanda</Text>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>25.5 B Tweet</Text>
                        </Box>
                        <Box width={"100%"} padding={"10px"}>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>Siyaset gündemleri</Text>
                            <Text fontWeight={"700"} color={"#rgb(85,89,92)"} fontSize={"15px"}>Muharrem ince</Text>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>25.5 B Tweet</Text>
                        </Box>
                        <Box width={"100%"} padding={"10px"}>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>Netflixte popüler</Text>
                            <Text fontWeight={"700"} color={"#rgb(85,89,92)"} fontSize={"15px"}>You</Text>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>25.5 B Tweet</Text>
                        </Box>
                        <Box width={"100%"} padding={"10px"}>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>Neos yazılım staj ödevi</Text>
                            <Text fontWeight={"700"} color={"#rgb(85,89,92)"} fontSize={"15px"}>Wanda</Text>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>25.5 B Tweet</Text>
                        </Box>
                        <Box width={"100%"} padding={"10px"}>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>Kripto paralar</Text>
                            <Text fontWeight={"700"} color={"#rgb(85,89,92)"} fontSize={"15px"}>Bitcoin</Text>
                            <Text color={"#536371"} fontSize={"13px"} fontFamily={"inherit"}>25.5 B Tweet</Text>
                        </Box>
                        <Box width={"100%"} padding={"10px"}>
                            <a href=''>
                            <Text color={"#1C9BEF"} fontSize={"15px"} fontFamily={"inherit"} fontWeight={"400"}>Daha fazla göster</Text> </a>
                        </Box>
                </Flex>
        </Layout>
    )
}

export default Discover;