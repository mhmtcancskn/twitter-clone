import React, { useEffect, useState } from 'react'
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
    TagRightIcon,
    useToast
} from '@chakra-ui/react'
import Layout from '../components/Layout';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { hydrate } from 'react-dom';
import axios from 'axios';
import AppConst from '../const';


export const Home = () => {
    const toast = useToast()
    const [tweetInputVal, setTweetInputVal] = useState("");
    const [twittes, setTwittes] = useState([]);

    useEffect(() => {
        loadTwits();
    }, []);

    async function loadTwits(){
        var twittes = await axios.get(`${AppConst.API_URL}/twittes`, {headers:{token: AppConst.USER_TOKEN}});
        setTwittes(twittes.data);
    }

    async function postTwits(){
        const body_data = {
            content: tweetInputVal
        }
        const headers = {
            token: AppConst.USER_TOKEN
        }
        var res = await axios.post(`${AppConst.API_URL}/twittes`,body_data, {headers} )
        
        let copy_twittes = Array.from(twittes);
        copy_twittes.unshift(res.data);
        setTwittes(copy_twittes);

        toast({
            title: '',
            description: "Yeni twit eklendi",
            status: 'success',
            duration: 3000,
            isClosable: true
          })

        setTweetInputVal("");
    }

    async function likeTwit(twit_id){
        const headers = {
            token: AppConst.USER_TOKEN
        }
        var res = await axios.post(`${AppConst.API_URL}/${twit_id}/like`, null, {headers});
        
        let copy_twittes = Array.from(twittes);
        let findIndex = copy_twittes.findIndex(x => x._id === res.data._id);
        if(findIndex !== -1){
            copy_twittes[findIndex].liked_by_user = res.data.liked_by_user; 
            copy_twittes[findIndex].likes = res.data.likes;
        }
        setTwittes(copy_twittes);
    }

    return (
        <Layout>
            <Tabs width={"100%"} marginTop={"15px"}  >
                <p style={{ fontSize: "25px", fontWeight: "700", marginLeft: "20px" }}>Anasayfa</p>
                <TabList justifyContent={"center"} isFitted >
                    <Tab fontWeight={"700"}  >Sana ??zel</Tab>
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
                                    <PopoverHeader border="none">Hedef Kitle Se??</PopoverHeader>
                                    <PopoverBody>Takip??ilerine ??zel</PopoverBody>
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
                                    borderRadius={"50px"}
                                    colorScheme="blue"
                                    onClick={() => {
                                        if(tweetInputVal === ""){
                                            return;
                                        }

                                        postTwits();
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
                                    key={item._id}
                                    twit={item}
                                    onLike={(id) => {
                                        likeTwit(id);
                                    }}
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