import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Card, { CardHeader, CardDescription } from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router";

const CategoryList = () => {
    const categories = ["Mobiles MobilesMobilesMobiles", "Outdoor Lightning", "T-Shirts & Tanks", 
        "Baby Disposable Diapers", "Wireless Earbuds", "Power Banks", "Christmas Decoration", "Phone Cables & Converters",
    "Electrical Circuitry", "Speakers", "Women's Dresses", "Space Savers", "IP Security Cameras", "Curtains", "Kitchen Organizers", "Tablets"]
    return (
    <div className="grid grid-cols-6 gap-2">
        {
            categories.map((value)=> {
                return (
                    <Card 
                    header={<CardHeader className="rounded-none w-1/2!"/>} 
                    className="rounded-none hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-2"
                    description={<p className="line-clamp-2 px-2 text-center text-sm w-full">{value}</p>}
                    />
                )
            })
        }
    </div>
    )
}

const ProductList = () => {
    const products = [1,2,3,4,5,6,7]
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = (e:  React.MouseEvent<HTMLButtonElement>) => {
        // alert("Hello")
        setIsOpen(true)
        console.log("product list open")
        navigate("/product")
    }
    useEffect(()=> {
        console.log("useEffect")
    }, [isOpen])
    return (
        <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 w-full">
                {
                    products.map(()=> {
                        return (
                            <Card 
                            header={<CardHeader/>}
                            description={<CardDescription/>}
                            onClick={handleClick}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}


const Home = () => {
    return (
        <MainLayout>
            <main id="main" className="flex flex-col gap-4">
                <section>
                    <Container>
                        <Carousel/>
                    </Container>
                </section>
                <section>
                    <Container>
                        <h1 className="text-2xl mb-2">Categories</h1>
                        <CategoryList/>
                    </Container>
                </section>
                <section>
                    <Container >
                        <h1 className="text-2xl mb-2">Just for you</h1>
                        <ProductList/>
                    </Container>
                </section>
            </main>
        </MainLayout>
    )
}

export default Home