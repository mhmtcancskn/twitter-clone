import React, { useState } from 'react'
import Twittes from '../components/Twittes';
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image, Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Textarea,
    Button,
    Tag,
    TagLabel,
    TagRightIcon
} from '@chakra-ui/react'
import Layout from '../components/Layout';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { hydrate } from 'react-dom';


export const Home = () => {
    const [tweetInputVal, setTweetInputVal] = useState("");
    const [twittes, setTwittes] = useState([
   
   
    ])


    return (
        <Layout>
            <Tabs width={"100%"} marginTop={"15px"}  >
                <p style={{ fontSize: "25px", fontWeight: "700", marginLeft: "20px" }}>Anasayfa</p>
                <TabList justifyContent={"center"} isFitted >
                    <Tab fontWeight={"700"}  >Sana Özel</Tab>
                    <Tab fontWeight={"700"} >Takip Edilen</Tab>
                </TabList>


                <Flex width="100%" padding="16px">
                    <Box width="48px" height="100%" bg="none" marginRight={"12px"}>
                        <Image src="/images/ben.jpg" width={"48px"} height="48px" borderRadius={"100px"} />
                    </Box>
                    <Flex flex="1" flexDirection={"column"}>
                        <Box>
                            <Popover>
                                <PopoverTrigger>
                                    <Tag size={"md"} variant='outline' borderRadius={"40px"}>
                                        <TagLabel>Herkes</TagLabel>
                                        <TagRightIcon as={MdOutlineKeyboardArrowDown} />
                                    </Tag>
                                </PopoverTrigger>
                                <PopoverContent outline={"none"}
                                    borderRadius="25px"
                                    shadow={"2xl"}
                                    _focus={{ outline: "none" }}
                                    _hover={{ outline: "none" }}
                                    padding="10px"
                                >
                                    <PopoverHeader border="none">Hedef Kitle Seç</PopoverHeader>
                                    <PopoverBody>Takipçilerine Özel</PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>

                        <Textarea
                            marginTop={"10px"}
                            focusBorderColor="transparent"
                            borderColor={"transparent"}
                            _hover={{ borderColor: "transparent" }}
                            borderRadius="0"
                            padding="0"
                            placeholder='Neler oluyor?'
                            value={tweetInputVal}
                            onChange={(e) => {
                                setTweetInputVal(e.target.value);
                            }}
                        />

                        <Flex>
                            <Box width={"30px"} height="30px" marginRight={"10px"} />
                            <Box width={"30px"} height="30px" marginRight={"10px"} />
                            <Box width={"30px"} height="30px" marginRight={"10px"} />
                            <Box width={"30px"} height="30px" marginRight={"10px"} />
                            <Flex flex="1" justifyContent={"flex-end"}>
                                <Button
                                    onClick={() => {
                                        if(tweetInputVal === ""){
                                            return;
                                        }

                                        let newTweet = {
                                            user: {
                                                name: "memo",
                                                userName: "@memo"
                                            },
                                            content: tweetInputVal
                                        }

                                        let cloneTweet = Array.from(twittes);
                                        cloneTweet.unshift(newTweet);
                                        setTwittes(cloneTweet);
                                        setTweetInputVal("");
                                    }}
                                >Tweetle</Button>
                            </Flex>
                        </Flex>
                    </Flex>



                </Flex>


                <TabPanels paddingBottom={"20px"} borderTop={"1px solid #e6ecf0"} >
                    <TabPanel padding="0">
                        {
                            twittes.map((item, index) => {
                                return <Twittes
                                    key={index}
                                    user={{
                                        name: item.user.name,
                                        userName: item.user.userName
                                    }}
                                    content={item.content}
                                />
                            })
                        }
                    </TabPanel>
                 

                </TabPanels>
            </Tabs>
        </Layout>
    )
}

export default Home;