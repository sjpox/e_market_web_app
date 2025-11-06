
const CardHeader = () => {
    return (
        <img src="./public/assets/images/product1.webp" alt="product1" className="rounded-md w-full"/>
    )
}

const CardDescription = () => {
    return (
        <div className="flex flex-col gap-y-2 p-4 text-left">
            <p 
                className="line-clamp-3" 
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit2.">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit2.
            </p>
            <h2>P200.00</h2>
        </div>
    )
}

const Card = () => {
    return (
        <button className="min-w-auto max-w-none cursor-pointer rounded-md hover:shadow-2xl border-2 border-gray-100" onClick={()=> alert("Hi")}>
            <CardHeader/>
            <CardDescription/>
        </button>
    )
}

export default Card