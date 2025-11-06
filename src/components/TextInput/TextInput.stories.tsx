import { MdOutlineEmail } from "react-icons/md";
import TextInput from "./TextInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
    title: "Components/TextInput",
    component: TextInput,
    tags: ["autodocs"],
    argTypes: {
        label: {control: "text"},
        placeholder: {control: "text"},
        error: {control: "text"},
        isPasswordToggle: {control: "boolean"}
    }
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
    args: {
        label: "Email",
        name: "email",
        value: "",
        placeholder: "Enter your email",
        leftIcon: <MdOutlineEmail size={18}/>,
        onChange: () => {}
    }
}
