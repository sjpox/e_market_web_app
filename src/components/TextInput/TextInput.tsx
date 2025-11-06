import { useState } from "react"
import { FiEyeOff, FiEye } from "react-icons/fi";

type TextInputProps = {
    label?: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    type?: string
    isPasswordToggle?: boolean,
    error?: string,
    disabled?: boolean
}

const TextInput = ({
    label = "",
    name,
    leftIcon,
    rightIcon,
    className = "",
    type = "text",
    isPasswordToggle = false,
    onChange,
    value,
    error,
    placeholder = "",
    disabled = false
}: TextInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = 
        isPasswordToggle && type === "password"
            ? showPassword 
                ? "text" 
                : "password" 
            : type;

    return (
    <div className={`flex flex-col gap-1 ${className}`}>
        <label htmlFor={name} className="text-gray-700">{label}</label>
        <div className={`border flex items-center rounded-md p-2 gap-2 focus-within:ring-2 focus-within:ring-blue-500
            ${error ? "border-red-500" : "border-gray-300"}`}>
            {leftIcon && <span>{leftIcon}</span>}
            <input 
                type={inputType}
                className="flex-1 outline-none bg-transparent"
                onChange={onChange}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
            />
            { isPasswordToggle ?
                <button onClick={()=> setShowPassword(!showPassword)} className="cursor-pointer">
                    {showPassword ? <FiEyeOff size={18}/> : <FiEye size={18}/>}
                </button>
                : rightIcon && <span>{rightIcon}</span>
            }
        </div>
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
    )

}

export default TextInput;