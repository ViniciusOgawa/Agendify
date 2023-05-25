import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useToast } from '@chakra-ui/react'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const toast = useToast()

    const [loadingLogin, setLoadingLogin] = useState(false);

    const userLogin = async (formData) => {
        try {
            setLoadingLogin(true);
            const response = await api.post("/login", formData);
            window.localStorage.clear();
            window.localStorage.setItem("@TOKEN", response.data.token);
            window.localStorage.setItem("@USERID", response.data.user.id);
            toast({
                title: "Login efetuado com sucesso!",
                position: "top-right",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            navigate("/");
            setUser(response.data.user);
        } catch (error) {
            toast({
                title: "Senha ou email incorretos!",
                position: "top-right",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            console.log(error)
        } finally {
            setLoadingLogin(false);
        }
    };

    // const [loadingRegister, setLoadingRegister] = useState(false);

    // const userRegister = async (formData) => {
    //     try {
    //         setLoadingRegister(true);
    //         const response = await api.post("/users", formData);
    //         toast.success("Cadastrado com sucesso!")
    //         navigate("/login");
    //     } catch (error) {
    //         toast.error("Email já cadastrado")
    //     } finally {
    //         setLoadingRegister(false);
    //     }
    // };

    // useEffect(() => {
    //     const token = localStorage.getItem("@TOKEN");
    //     (async () => {
    //         if (token) {
    //             try {
    //                 const response = await api.get("/profile", {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 });
    //                 navigate("/");
    //                 setUser(response.data);
    //             } catch (err) {
    //                 window.localStorage.clear();
    //             }
    //         }
    //     })();
    // }, []);

    return (
        <UserContext.Provider
            value={{
                userLogin,
                loadingLogin,
                // userRegister,
                // loadingRegister,
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
