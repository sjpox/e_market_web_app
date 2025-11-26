import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Card, { CardHeader, CardDescription } from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router";
import { getProducts } from "../../services/api/requests/Product/Product";
import { setProducts } from "../../redux/slices/Product";
import { setCategories } from "../../redux/slices/Category";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectProducts } from "../../redux/slices/Products.selector";
import { selectCategories } from "../../redux/slices/Categor.selector";
import { getCategories } from "../../services/api/requests/Category/Category";
import useCustom from "../../hooks/useCustom";

const CategoryList = () => {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(selectCategories)

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getCategories()
            dispatch(setCategories(response.data?.result))
        }
        fetchCategories()
    }, [])
    
    // const categories = ["Mobiles MobilesMobilesMobiles", "Outdoor Lightning", "T-Shirts & Tanks", 
    //     "Baby Disposable Diapers", "Wireless Earbuds", "Power Banks", "Christmas Decoration", "Phone Cables & Converters",
    // "Electrical Circuitry", "Speakers", "Women's Dresses", "Space Savers", "IP Security Cameras", "Curtains", "Kitchen Organizers", "Tablets"]
    return (
    <div className="grid grid-cols-6 gap-2">
        {
            categories.map((value)=> {
                return (
                    <Card 
                    header={<CardHeader className="rounded-none w-1/2!"/>} 
                    className="rounded-none hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] p-2"
                    description={<p className="line-clamp-2 px-2 text-center text-sm w-full">{value.description}</p>}
                    />
                )
            })
        }
    </div>
    )
}

const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const products = useAppSelector(selectProducts)

    const handleClick = (e:  React.MouseEvent<HTMLButtonElement>) => {
        // alert("Hello")
        setIsOpen(true)
        
        console.log("product list open")
        navigate("/product")
    }

    const fetchProducts = async() => {
        const products = await getProducts();
        dispatch(setProducts(products.data.result))
        console.log(`products ${JSON.stringify(products)}`)
        return products
    }

    useEffect(() => {
        fetchProducts()
    },[])

    useEffect(()=> {
    }, [isOpen])

    return (
        <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 w-full">
                {
                    products?.map((value)=> {
                        return (
                            <Card 
                            header={<CardHeader/>}
                            description={<CardDescription title={value.productName} subtitle={value.price.toString()}/>}
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
    const [value, error] = useCustom();
    
    useEffect(() => {
        console.log(`value1 ${value} ${error}`)
    }, [value])

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