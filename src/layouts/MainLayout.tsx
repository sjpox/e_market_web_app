import MegaMenu from "./components/MegaMenu/MegaMenu";

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout = ({children} : MainLayoutProps) => {
    return (
        <div>
            <header id="app-header">
                <MegaMenu/>
            </header>
            {children}
        </div>
    )
}

export default MainLayout