import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, Flex, Image, IconButton, Button, Avatar } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';

export default function Profile() {
    let { user_name } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser(){
        var res = await axios.get("http://localhost:4040/me");
        console.log(res);
    }

    return (
        <Layout>
            <Tabs width={"100%"} marginTop={"15px"}>
                <Flex paddingLeft={"10px"}>
                    <IconButton alignItems={"center"} aria-label="back-button" variant={"ghost"} borderRadius="100%">
                        <FaArrowLeft />
                    </IconButton>
                    <p style={{ fontSize: "25px", fontWeight: "700", marginLeft: "20px" }}>{user_name}</p>
                </Flex>

                <Flex width={"100%"} flexDirection="column">
                    <Box width={"100%"} height={"200px"} bg="#CFD9DD">

                    </Box>
                    <Flex width="100%" paddingLeft="10px" paddingRight={"10px"} position={"relative"} paddingBottom="40px" paddingTop={"10px"}>
                        <Flex flex="1">
                            <Box border="3px solid #fff" borderRadius={"100%"}
                                position="absolute"
                                top="-67"
                            >
                                <Avatar
                                    name={user_name}
                                    width="134px"
                                    height={"134px"}
                                />
                            </Box>

                        </Flex>
                        <Flex flex="1" justifyContent={"flex-end"}>
                            <Button
                                variant={"outline"}
                                borderRadius="25px"
                            >Profile Düzenle</Button>
                        </Flex>
                    </Flex>

                    <Flex width={"100%"} flexDirection={"column"} padding="10px">
                        <h1>{user_name}</h1>
                    </Flex>

                </Flex>

                <TabList justifyContent={"center"} >
                    <Tab fontWeight={"700"}>Tümü</Tab>
                    <Tab fontWeight={"700"} >Onaylanmış</Tab>
                    <Tab fontWeight={"700"} >Bahsedenler</Tab>
                </TabList>



                <TabPanels >
                    <TabPanel padding={"0"}>

                    </TabPanel>
                    <TabPanel padding={"0"}>

                    </TabPanel>
                    <TabPanel >

                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Layout>
    )
}
