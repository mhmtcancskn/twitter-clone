import React from "react";
import { Box, Text, Heading, Flex, Avatar, Grid, GridItem, IconButton } from "@chakra-ui/react"
import { FaRadiation, FaRegComment, FaRetweet, FaHeart, FaAlignJustify, FaShare } from "react-icons/fa";
import { AiOutlineHeart } from 'react-icons/ai';

const DUMMY_PROPS = {
    user: {
        name: "Burak Barborosoğlu",
        user_name: "@BrkBarbo",
        avatar: "http://avatar.url"
    },
    content: "Ben paylaştım",
    image: "https://image.url"
}

function Twittes(props) {
    const { _id, user, content, likes, liked_by_user } = props.twit;

    return (
        <Flex
            maxWidth={"100%"}
            height="auto"
            width="100%"
            padding="15px"
            borderBottom="1px solid #eaeaea"
            cursor={"pointer"}
            _hover={{
                bg: "#fafafa"
            }}
        >
            <Box width={"48px"} >
                <Avatar name={user.name} src="https://bit.ly/dan-abramov" />
            </Box>
            <Flex id="testmemo" flex="1" flexDirection={"column"}>
                <Box width={"100%"} height={"auto"} paddingLeft={"10px"}>
                    <Text as="span" color="black" fontWeight={"700"} letterSpacing="0.1" fontSize={"15px"}>
                        {user.name}
                        <Text as="span" color="rgb(83, 100, 113)" fontWeight={"400"}>
                            @{user.user_name}
                        </Text>
                    </Text>



                    <Box paddingTop={"7px"} paddingBottom="7px">
                        {content}

                    </Box>
                </Box>

                <Box width={"100%"} height={"auto"}>



                </Box>

                {/* <FaRegComment/>
                    <FaRetweet/> */}
                <Grid templateColumns='repeat(5, 1fr)' gap={6} height={"30px"}>
                    <GridItem colSpan={"1"} display={"flex"} alignItems="center"
                        color="rgb(83, 100, 113)"
                        _hover={{ color: "#1C9BEF" }}
                    >
                        <IconButton colorScheme={"blue"} _hover={{ color: "#1C9BEF", bg: "rgba(28, 155, 239, 0.1)" }} aria-label='Search database' variant={"ghost"} borderRadius="100%" size="sm" icon={<FaRegComment />} />
                        <Text fontWeight={"500"} fontSize={"13px"}>140</Text>
                    </GridItem>
                    <GridItem colSpan={"1"} display={"flex"} alignItems="center"
                        color="rgb(83, 100, 113)"
                        _hover={{ color: "#1C9BEF" }}
                    >
                        <IconButton colorScheme={"blue"} _hover={{ color: "#1C9BEF", bg: "rgba(28, 155, 239, 0.1)" }} aria-label='Search database' variant={"ghost"} borderRadius="100%" size="sm" icon={<FaRetweet />} />
                        <Text fontWeight={"500"} fontSize={"13px"}>140</Text>
                    </GridItem>
                    <GridItem colSpan={"1"} display={"flex"} alignItems="center"
                        color="rgb(83, 100, 113)"
                        _hover={{ color: "#1C9BEF" }}
                    >
                        <IconButton
                            colorScheme={"blue"} color={liked_by_user ? "red" : "blue"} _hover={{ bg: "rgba(28, 155, 239, 0.1)" }} aria-label='Search database'
                            onClick={() => props.onLike(_id)}
                            variant={"ghost"} borderRadius="100%" size="sm" icon={liked_by_user ? <FaHeart /> : <AiOutlineHeart />} />
                        <Text fontWeight={"500"} fontSize={"13px"}>{likes.length}</Text>
                    </GridItem>
                    <GridItem colSpan={"1"} display={"flex"} alignItems="center"
                        color="rgb(83, 100, 113)"
                        _hover={{ color: "#1C9BEF" }}
                    >
                        <IconButton colorScheme={"blue"} _hover={{ color: "#1C9BEF", bg: "rgba(28, 155, 239, 0.1)" }} aria-label='Search database' variant={"ghost"} borderRadius="100%" size="sm" icon={<FaAlignJustify />} />
                        <Text fontWeight={"500"} fontSize={"13px"}>140</Text>
                    </GridItem>
                    <GridItem colSpan={"1"} display={"flex"} alignItems="center"
                        color="rgb(83, 100, 113)"
                        _hover={{ color: "#1C9BEF" }}
                    >
                        <IconButton colorScheme={"blue"} _hover={{ color: "#1C9BEF", bg: "rgba(28, 155, 239, 0.1)" }} aria-label='Search database' variant={"ghost"} borderRadius="100%" size="sm" icon={<FaShare />} />
                        <Text fontWeight={"500"} fontSize={"13px"}>140</Text>
                    </GridItem>
                </Grid>




            </Flex>
        </Flex>
    )

}

export default Twittes;