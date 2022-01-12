import { createContext, useContext, useState } from "react";
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    // cho billing method
    const [selectedOption, setSelectedOption] = useState(false);
    // billing info
    const [billingInfo, setBillingInfo] = useState(false);
    //payment method
    const [payment, setPayment] = useState(false);
    const [setPM, setSetPM] = useState(false);
    const [area, setArea] = useState(false);
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
            selectedOption, setSelectedOption,
            setConfirm,
            setOk,
            contractSubmit,

            payment, setPayment,
            isConfirm,
            setIsconfirm,
            isOk,area, setArea,
            setIsOk, clear, setClear, setSetPM, setPM, error, setError, billingInfo, setBillingInfo
        }}>{children}
        </AuthContext.Provider>)
}

export const UseAuth = () => {
    return useContext(AuthContext)
}