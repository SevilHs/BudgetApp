import { useState, useEffect } from "react"

export default function useLocalStorage(key,defaultValue){
    const [value, setValue] = useState(()=>{
        const checkValue=localStorage.getItem(key)
        if (checkValue) return JSON.parse(checkValue)
        if (typeof defaultValue==="function") {
            return defaultValue()
        }else {
            return defaultValue
        }
    })
    useEffect(() => {   
        localStorage.setItem(key,JSON.stringify(value))
    }, [key,value])
    return [value,setValue]
}