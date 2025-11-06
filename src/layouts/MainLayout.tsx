import Card from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";
import Container from "../components/Container/Container";
import MegaMenu from "./components/MegaMenu/MegaMenu";

const ProductList = () => {
    const products = [1,2,3,4,5,6,7]
    return (
    <Container>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 w-full">
            {
                products.map((index, value)=> {
                    return (
                        <Card/>
                    )
                })
            }
        </div>
    </Container>
    )
}

const MainLayout = () => {
    return (
        <div>
            <header id="app-header">
                <MegaMenu/>
            </header>
            <main>
                <section>
                    <Carousel/>
                </section>
                <section>
                    
                </section>
                <section>
                    <ProductList/>
                </section>
            </main>
        </div>
    )
}

export default MainLayout