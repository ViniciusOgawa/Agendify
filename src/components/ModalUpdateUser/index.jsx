import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, Box, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'
import { updateUserSchema } from "./schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"


const ModalUpdateUser = () => {
    const { isOpenModalUser, setIsOpenModalUser, loadingAttUser } = useContext(UserContext)

    const handleClose = () => {
        setIsOpenModalUser(false)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(updateUserSchema),
    })


    const submit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <Modal isOpen={isOpenModalUser} onClose={handleClose} size={{ base: "full", sm: "md", md: "lg" }}>
            <ModalOverlay />
            <ModalContent backgroundColor={"white.50"} h={"550px"} borderRadius={"5px"} marginInline={"30px"} justify={"space-between"} borderLeft={"5px solid"} borderColor={"green.100"}>
                <ModalHeader fontSize={"xl"}>Atualizar dados</ModalHeader>
                <ModalCloseButton />
                <ModalBody display={"flex"} justifyContent={"center"} flexDirection={"column"}>
                    <form onSubmit={handleSubmit(submit)}>
                        <Box h={"100%"} flexDir={"column"} display={"flex"} gap={"20px"} justifyContent={"space-around"}>
                            <FormControl isInvalid={errors.email ? true : false}>
                                <FormLabel fontSize={{ base: "2xl", md: "xl" }} fontWeight={"extrabold"} color={"green.200"}>Email</FormLabel>
                                <Input placeholder="Digite seu email..." h={{ base: "80px", md: "30px" }} backgroundColor={"green.50"} color={"green.100"} fontSize={{ base: "2xl", md: "xl" }} fontWeight={"medium"} {...register("email")} />
                                <FormErrorMessage fontSize={{ base: "2xl", md: "lg" }} >{errors.email?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={errors.password ? true : false}>
                                <FormLabel fontSize={{ base: "2xl", md: "xl" }} fontWeight={"extrabold"} color={"green.200"}>Senha</FormLabel>
                                <Input placeholder="Digite sua senha..." h={{ base: "80px", md: "30px" }} type="password" backgroundColor={"green.50"} color={"green.100"} fontSize={{ base: "2xl", md: "xl" }} fontWeight={"medium"} {...register("password")} />
                                <FormErrorMessage fontSize={{ base: "2xl", md: "lg" }} >{errors.password?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.phoneNumber ? true : false}>
                                <FormLabel fontSize={{ base: "2xl", md: "xl" }} fontWeight={"extrabold"} color={"green.200"}>Telefone</FormLabel>
                                <Input placeholder="Digite sua senha..." h={{ base: "80px", md: "30px" }} backgroundColor={"green.50"} color={"green.100"} fontSize={{ base: "2xl", md: "xl" }} fontWeight={"medium"} {...register("phoneNumber")} />
                                <FormErrorMessage fontSize={{ base: "2xl", md: "lg" }} >{errors.phoneNumber?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={errors.name ? true : false}>
                                <FormLabel fontSize={{ base: "2xl", md: "xl" }} fontWeight={"extrabold"} color={"green.200"}>Nome</FormLabel>
                                <Input placeholder="Digite sua senha..." h={{ base: "80px", md: "30px" }} backgroundColor={"green.50"} color={"green.100"} fontSize={{ base: "2xl", md: "xl" }} fontWeight={"medium"} {...register("name")} />
                                <FormErrorMessage fontSize={{ base: "2xl", md: "lg" }} >{errors.name?.message}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" h={{ base: "80px", md: "30px" }} fontSize={{ base: "2xl", md: "xl" }} backgroundColor={"green.50"} color={"green.200"} border={"1px solid"} borderColor={"green.200"} marginTop={"10px"} disabled={loadingAttUser}>
                                {loadingAttUser ? "Atualizando..." : "Atualizar dados"}
                            </Button>
                        </Box>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

}

export { ModalUpdateUser }