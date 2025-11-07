type CardHeaderProps = {
    className?: string
}

export const CardHeader = ({ className = ""}: CardHeaderProps) => {
    return (
        <img src="./public/assets/images/product1.webp" alt="product1" className={`rounded-md w-full ${className}`}/>
    )
}

type CardDescription = {
    title: string,
    subtitle: string
}

export const CardDescription = ({ title, subtitle }: CardDescription) => {
    return (
        <div className="flex flex-col gap-y-2 p-4 text-left">
            <p 
                className="line-clamp-3" 
                title={title}>
                    {title}
            </p>
            <h2>P{subtitle}</h2>
        </div>
    )
}

type CardProps = {
    header?: React.ReactNode,
    description?: React.ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Card = ({ className = "", header, description, onClick }: CardProps) => {
    return (
        <button className={`min-w-auto max-w-none cursor-pointer rounded-md 
        hover:shadow-2xl border-2 border-gray-100 flex flex-col bg-white gap-y-2 items-center
        ${className}`} onClick={onClick}>
            {header}
            {description}
        </button>
    )
}

export default Card