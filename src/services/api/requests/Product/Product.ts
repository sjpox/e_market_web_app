import instance from "../../../Client"

export const getProducts = () => {
    return instance.request({
        url: "/product/v1/products",
        method: "GET"
    })
}