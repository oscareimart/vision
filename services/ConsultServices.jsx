import axios from "axios"
import { env_values } from './../settings/env'

export const getAllData = (
    routeConsult = "",
    optionsConsult = {},
    query = []
) => {
    const options = {
        populate: "%2A",
        paginate: {
            page: 1,
            pageSize: 10,
            ...optionsConsult.paginate
        },
        ...optionsConsult
    }
    let urlConsult = `/${routeConsult}`
    if (options?.populate)
        urlConsult = `${urlConsult}${urlConsult.includes("?") ? '&' : '?'}populate=${options?.populate}`
    if (options.paginate?.page && options.paginate?.pageSize) {
        urlConsult = `${urlConsult}${urlConsult.includes("?") ? '&' : '?'}pagination[page]=${options.paginate?.page}
        &pagination[pageSize]=${options.paginate?.pageSize}`
    }
    if (query.length > 0) {
        let i = 0
        for (let row of query) {
            if (row.name && row.value) {
                urlConsult = `${urlConsult}${urlConsult.includes("?") ? '&' : '?'}
                filters[$and][${i}]${row.type === 0 ? `[${row.name}]` : ""}
                ${row.type === 1 ? `[${row.name}][${row.field}]` : ""}[$eq]=${row.value}`
            } else {
                console.log("Valores incompletos para la consulta ... se excluyo del query")
            }
            i++
        }
    }
    urlConsult = urlConsult.split("\n").join("")
    urlConsult = urlConsult.split(" ").join("")
    // console.log(urlConsult)
    return axios({
        method: "get",
        baseURL: env_values.API_URL,
        url: `/api${urlConsult}`,
        headers: {
            ["Authorization"]: `bearer ${env_values.TOKEN_APP}`
        }
    }).then(res => res)
}

export const getSingleData = (routeConsult, id, optOutside) => {
    const options = {
        populate: "%2A",
        ...optOutside
    }
    let urlConsult = `/${routeConsult}/${id}`
    if (options?.populate)
        urlConsult = `${urlConsult}${urlConsult.includes("?") ? '&' : '?'}populate=${options?.populate}`
    return axios({
        method: "get",
        baseURL: env_values.API_URL,
        url: `/api${urlConsult}`,
        headers: {
            ["Authorization"]: `bearer ${env_values.TOKEN_APP}`
        }
    }).then(res => res)
}