import { useForm, type SubmitHandler } from "react-hook-form";
import Container from "../../../../components/Container/Container";

interface IFormInput {
    firstName: string
    gender: string
}

const Home = () => {
    // the admin app should be in different project
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    return (
        <Container>
            <h1>Admin Home Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name</label><br/>
                <input {...register("firstName")} className="border-2"/><br/>
                <label htmlFor="gender">Gender</label><br/>
                <input {...register("gender")} className="border-2"/><br/>
                <input type="submit" />
            </form>
        </Container>
    )
}

export default Home;