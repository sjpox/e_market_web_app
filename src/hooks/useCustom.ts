import { useEffect, useState } from "react"

const useCustom = () => {
    const [value, setValue] = useState("")

    useEffect(() => {
        console.log('triggered!')
        setValue("updated")
    }, [])

    return [value, true]
}

export default useCustom