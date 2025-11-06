import { useState, type SyntheticEvent } from "react";
import Container from "../../../components/Container/Container"
import TextInput from "../../../components/TextInput/TextInput"
import { MdOutlineEmail } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";

const MegaMenu = () => {
    const [email, setEmail] = useState<string>("")

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
        console.log(`email value: ${e.target.value}`)
        setEmail(e.target.value)
    }

    return (
    <header id="app-header" className="shadow-2xs">
        <div className="bg-white p-4 border-b border-gray-100">
            <Container className="flex items-center w-full justify-between ">
                <a href="#" className="inline-block">ShopMe</a>
                <TextInput 
                    name="email"
                    value={email}
                    // label="Email"
                    onChange={handleTextInput}
                    // leftIcon={<MdOutlineEmail size={18}/>}
                    placeholder="Search in ShopMe"
                    rightIcon={<IoSearchSharp/>}
                    className="relative"
                />
                <button className="flex items-center gap-2 cursor-pointer hover:*:text-green-500 p-1">
                    <IoPeopleCircleOutline className=""/>
                    <span className="">Sign In</span>
                </button>
            </Container>
        </div>
    </header>
    )
}

export default MegaMenu