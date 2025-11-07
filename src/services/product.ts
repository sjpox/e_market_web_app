import instance from "./Client"

export const getProducts = () => {
    return instance.request({
        url: "/products/list",
        method: "GET"
    })
}