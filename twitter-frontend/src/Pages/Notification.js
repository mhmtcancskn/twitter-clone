
import React from 'react'
import Twittes from '../components/Twittes';
import { Flex, Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,Text } from '@chakra-ui/react'
import Layout from '../components/Layout';
import NotificationItem from '../components/NotificationItem';


export const Notification = () => {

    return (
        <Layout>
            <Tabs width={"100%"} marginTop={"15px"}  >
                <p style={{ fontSize: "25px", fontWeight: "700", marginLeft: "20px" }}>Bildirimler</p>
                <TabList justifyContent={"center"} >
                    <Tab fontWeight={"700"}>Tümü</Tab>
                    <Tab fontWeight={"700"} >Onaylanmış</Tab>
                    <Tab fontWeight={"700"} >Bahsedenler</Tab>
                </TabList>
                <TabPanels >
                    <TabPanel padding={"0"}>
                        <NotificationItem isLike={false} text="Yeni takip etti" user={{ name: "Haydar" }} />
                        <NotificationItem isLike={true} text="Yeni takip etti" user={{ name: "Haydar" }} />
                        <NotificationItem isLike={false} text="Yeni takip etti" user={{ name: "Haydar" }} />
                    </TabPanel>
                    <TabPanel padding={"0"}>
                        <NotificationItem isLike={false} text="Yeni takip etti" user={{ name: "Haydar" }} />
                        <NotificationItem isLike={true} text="Yeni takip etti" user={{ name: "Haydar" }} />
                        <NotificationItem isLike={false} text="Yeni takip etti" user={{ name: "Haydar" }} />
                    </TabPanel>
                    <TabPanel >
                        <Flex width={"100%"}  height={"100%"}>
                            <Image src='/images/Twitter.png' alt='Twitter' />
                        </Flex>
                        <Flex flexDirection={"column"} width={"100%"} height="100px" justifyContent="center" padding={"10"}>
                            <p style={{fontSize:"25px",fontWeight:"bold",color:"inherit",fontWeight:"600"}}>Hangi sohbetlerde senden bahsedildiğini kontrol et</p>
                            <p style={{fontWeight:"400",color:"rgb(83, 100, 113)"}}>İşlem menüsünü (Tweetteki üç küçük nokta) kullanarak etiketini kaldırabilir ve sohbetten ayrılabilirsin Daha fazla bilgi al</p>
                        </Flex>

                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Layout>
    )
}

export default Notification;