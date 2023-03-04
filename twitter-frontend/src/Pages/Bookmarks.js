
import React from 'react'
import Twittes from '../components/Twittes';
import { Flex, Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Text } from '@chakra-ui/react'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
export const Bookmarks = () => {

    return (
           <Layout>
            <Flex flex={1} flexDirection={"column"}>
                <Box width={"100%"} height={"auto"}>
                    <Text padding={"10px"} color={"#0F141A"} fontSize={"20px"} fontWeight={"700"}>Yer İşaretleri
                    <Text fontSize={"13px"} fontWeight={"400"} color={"#536371"}>@cancoskunum </Text></Text>
                </Box>
            </Flex>
           </Layout>
    )
}

export default Bookmarks;