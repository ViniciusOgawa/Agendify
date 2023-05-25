import {
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useMediaQuery
} from "@chakra-ui/react"
import { HamburgerIcon, AddIcon, EditIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import imgHeader from "../../img/header.png"
import { useEffect, useState } from "react"


const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isLargerScreen] = useMediaQuery("(min-width: 768px)")
    const url = window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
    const isLoginPage = url !== "login";
    const isRegisterPage = url !== "register";

    console.log(isLoginPage + isRegisterPage == 1)

    useEffect(() => {
        setIsMobile(!isLargerScreen)
    }, [isLargerScreen])

    return (
        <Flex backgroundImage={imgHeader} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" minWidth={"100vw"} w={{ base: "230vw", md: "100vw" }} h={{ base: "200px", md: "100px" }} alignItems={"center"} justifyContent={"center"}>
            <Flex width={"70%"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={{ base: "3xl", md: "2xl" }}>Agendify</Text>
                {isLoginPage + isRegisterPage != 1 && (
                    <>
                        {isMobile ? (
                            <Menu>
                                <MenuButton as={Button} backgroundColor="green.200">
                                    <HamburgerIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Logout</MenuItem>
                                    <MenuItem>Atualizar informações</MenuItem>
                                    <MenuItem>Adicionar contato</MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Flex gap="10px">
                                <Button backgroundColor="transparent">
                                    <AddIcon />
                                </Button>
                                <Button backgroundColor="transparent">
                                    <EditIcon />
                                </Button>
                                <Button backgroundColor="transparent">
                                    <ArrowForwardIcon />
                                </Button>
                            </Flex>
                        )}
                    </>
                )}
            </Flex>
        </Flex >
    )
}

export { Header }