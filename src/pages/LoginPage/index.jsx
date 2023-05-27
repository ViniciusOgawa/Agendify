import { Box, Flex } from "@chakra-ui/react"
import { FormLogin } from "../../components/FormLogin"
import { Header } from "../../components/Header"


const LoginPage = () => {

    return (
        <Box h={"100vh"}>
            <Header />
            <Flex backgroundColor={"white.100"} h={{ base: "230vh", md: "100%" }} w={{ base: "230vw", md: "100%" }} alignItems={"center"} justifyContent={"center"}>
                <FormLogin />
            </Flex >
        </Box>
    )

}

export { LoginPage }