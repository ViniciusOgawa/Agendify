import { Box, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import { CardContact } from "../../components/CardContact"
import { Header } from "../../components/Header"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { ContactContext } from "../../providers/ContactContext"
import { ModalUpdateContact } from "../../components/ModalUpdateContact";
import { ModalUpdateUser } from "../../components/ModalUpdateUser";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { UserContext } from "../../providers/UserContext";

const HomePage = () => {
    const token = localStorage.getItem("@TOKEN");
    const navigate = useNavigate()

    const { contacts, setContacts, isOpenModalUpdateContact } = useContext(ContactContext);
    const { user } = useContext(UserContext)

    useEffect(() => {
        (async () => {
            try {
                const response = await api.get("/contacts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setContacts(response.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [isOpenModalUpdateContact]);

    useEffect(() => {
        if (user.length == 0) {
            navigate("/login");
        }
    }, [])

    return (
        <>
            <ModalCreateContact />
            <ModalUpdateContact />
            <ModalUpdateUser />
            <Box h={"100vh"}>
                <Header />
                <Flex overflow={"hidden"} h={{ base: "230vh", md: "100%" }} w={"100%"} alignItems={"center"} justifyContent={"center"}>
                    <UnorderedList styleType="none" margin={"20px"} h={"100%"} w={"90%"} maxWidth={"1200px"}>
                        {contacts.map((element, index) => {
                            return <ListItem marginTop={"40px"} w={"100%"}>
                                <CardContact contact={element} key={index} />
                            </ListItem>
                        })}
                    </UnorderedList>
                </Flex >
            </Box>
        </>
    )

}

export { HomePage }