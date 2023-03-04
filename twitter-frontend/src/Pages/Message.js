
import React from 'react'
import Twittes from '../components/Twittes';
import { Flex, Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Text } from '@chakra-ui/react'
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
export const Message = () => {

    return (
           <Layout
                isHideTrendBar={true}
           ></Layout>
    )
}

export default Message;