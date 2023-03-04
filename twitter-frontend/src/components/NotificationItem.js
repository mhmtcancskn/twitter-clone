import React from 'react'
import { Flex, Box, Avatar, Text } from '@chakra-ui/react'
import { FaHeart, FaBell } from "react-icons/fa"

export default function NotificationItem(props) {

    return (
        <Flex padding="15px"
        cursor={"pointer"}
        borderBottom="1px solid #eaeaea"
        _hover={{
            bg:"#fafafa"
        }}
        >
            <Flex width="48px" justifyContent={"center"}>
                <Box
                    fontSize={"30px"}
                    color={props.isLike ? "#F9197F" : "#1C9BEF"}
                >
                    {
                        props.isLike === true ? <FaHeart /> : <FaBell />
                    }
                </Box>

            </Flex>
            <Flex flex={"1"} flexDirection="column">
                <Avatar width={"40px"} height="40px" name={props.user.name} src="https://bit.ly/dan-abramov" />
                <Text as="span" fontSize="15px" marginTop={"5px"} fontWeight="700">
                    {props.user.name}{" "}
                    <Text as="span" fontWeight={"400"}>
                        {props.text}
                    </Text>
                </Text>
            </Flex>
        </Flex>
    )
}
