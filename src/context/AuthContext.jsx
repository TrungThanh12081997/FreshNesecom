import { createContext, useContext, useState } from "react";
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState(false);
    const [DHL, setDHL] = useState(false)
    const [FEX, setFEX] = useState(false)
    const [payment, setPayment] = useState(false);
    const [isConfirm, setIsconfirm] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [clear, setClear] = useState(false)
    const [error, setError] = useState({});
    function setConfirm() {
        if (isConfirm) {

            setIsconfirm(false)
        } else {
            setIsconfirm(true)
        }
    }
    function setOk() {
        if (isOk) {

            setIsOk(false)
        } else {
            setIsOk(true)
        }
    }
    function contractSubmit() {
        if (isOk && isConfirm) {
            alert("bạn đã đồng ý điều khoản")
        } else {
            alert("bạn chưa chấp nhận điều khoản")
        }
    }
    return (
        <AuthContext.Provider value={{
            selectedOption, setSelectedOption, DHL,
            setDHL, setConfirm,
            setOk,
            contractSubmit,
            FEX,
            setFEX, payment, setPayment,
            isConfirm,
            setIsconfirm,
            isOk,
            setIsOk, clear, setClear, error, setError
        }}>{children}
        </AuthContext.Provider>)
}

export const UseAuth = () => {
    return useContext(AuthContext)
}