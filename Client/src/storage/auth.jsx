import { createContext , useContext,useEffect,useState } from "react";

const Authcontext = createContext()

export const AuthProvider = ({children})=>{
    const [admin, setadmin] = useState(false)
    const [token, settoken] = useState(localStorage.getItem("Token"))
    const storeTokenInLS = (serverToken) => {
        settoken(serverToken)
        return localStorage.setItem("Token",serverToken)
    }
    const [detail, setdetail] = useState("")
    const userAuthentication=async()=>{
        try {
            const response = await fetch("http://localhost:3000/getusers",{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            if(response.ok){
                const data = await response.json()
                setdetail(data.userdata)
            }
        } catch (error) {
            console.error(error)
        }
    }
    const LogoutUser=()=>{
        settoken("");
        return localStorage.removeItem("Token")
    }
    const isLoggedin = !!token;
    useEffect(()=>{
        userAuthentication()
    },[token])
    return(
        <Authcontext.Provider value={{storeTokenInLS,token,detail,isLoggedin,LogoutUser}}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(Authcontext)
}