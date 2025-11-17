import instance from "../../../Client"

export const getCategories = () => {
    return instance.request({
        method: "GET",
        url: "/categories"
    })
}