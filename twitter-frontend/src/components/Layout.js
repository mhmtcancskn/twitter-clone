import React from 'react';
import { Grid, GridItem, Box, Flex, Stack, InputGroup } from '@chakra-ui/react'
import Sidebar from './Sidebar';
import { Input } from '@chakra-ui/react'

function Layout(props) {

    return (
        <Flex >
            <Box
                colSpan={5}
                h='10'
                height={"100vh"}
                position="relative"
                width={"400px"}
            >
                <Box position="fixed" bg="white" right={"0"} left="0" top="0" bottom="0" width={"400px"}>
                    <Sidebar
                    ></Sidebar>
                </Box>
            </Box>
            
            <Flex flex="1" bg='white'>
                {props.children}
            </Flex>

            {
                props.isHideTrendBar ? null 
                : (
                    <Box colSpan={5} h='10' bg='white' width={"400px"} height="100vh" border={"1px solid #e6ecf0"} padding="15px 25px">
                    <Flex justifyContent={"center"} marginTop={"3px"}  >
                            <InputGroup>
    
                                <Input type='Search' placeholder="Twitter'da Ara" borderRadius={"100"} bg={"#e6ecf0"} height={"40px"} width={"100%"} />
                            </InputGroup>
                    </Flex>
    
                    <Flex flexDirection={"column"}
                        padding="15px"
                        bg="#F6F9F9"
                        borderRadius={"10px"}
                        marginTop="10px"
                    >
    
                    <Flex flexDirection="column" borderRadius={"50"} border={"5 px solid red"}>
                        <Box  />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>İlgini Çekebilecek Gündemler</h1>
                        <p>Türkiye deki Gündemler</p><p>Seçim</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column" >
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Fenerbahçe</h1>
                        <p>Spor</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column" >
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Bitcoin</h1>
                       <p>Kripto</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Netflix</h1>
                        <p>You</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column" >
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Siyaset</h1>
                       <p>Muharrem İnce</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Neos</h1>
                        <p>Staj ödevi</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Deprem</h1>
                       <p>Hatay</p><p>33.5 B tweet</p></a>
                    </Flex>
                    <Flex flexDirection="column">
                        <Box />
                        <a href=''>
                        <h1 style={{ fontSize: "20px", fontWeight: "700",  height: "auto", width: "100%", justifyContent: "center" }}>Ahbab</h1>
                        <p>Haluk levent</p><p>33.5 B tweet</p></a>
                    </Flex>
                    
                    
    
    
                    </Flex>
                    
                </Box>
                ) 
            }

           


        </Flex>
    )
}

export default Layout;