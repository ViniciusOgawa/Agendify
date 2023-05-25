import { FormRegister } from "../../components/FormRegister"
import { Box, Flex } from "@chakra-ui/react"
import { Header } from "../../components/Header"

const RegisterPage = () => {

    return (
        <Box>
            <Header />
            <Flex backgroundColor={"white.100"} height={"86.8vh"} h={{ base: "230vh", md: "86.8vh" }} width={"100vw"} w={{ base: "230vw", md: "100vw" }} alignItems={"center"} justifyContent={"center"}>
                <FormRegister />
            </Flex >
        </Box>
    )

}

export { RegisterPage }