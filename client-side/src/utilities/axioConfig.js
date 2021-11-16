import axios from 'axios'
import { toast } from 'react-toastify'
import { SetToast } from './settings'

const options = {
    withCredentials: false,
    mode: 'cors',
    headers: {
        "Cache-Control": "no-cache",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'X-Requested-With': 'XMLHttpRequest'
    },
    timeout: 60 * 10 * 1000,
}

// Methods creation
const getAxios = axios.create({ options, method: 'GET' })
const postAxios = axios.create({ options, method: 'POST' })
const putAxios = axios.create({ options, method: 'PUT' })
const patchAxios = axios.create({ options, method: 'PATCH' })
const deleteAxios = axios.create({ options, method: 'DELETE' })

// Interceptors
/*
getAxios.interceptors.response.use(response => response, error => {
    if (error.response.status === 500) {
        toast.error(`Acceso denegado.`, SetToast)
        window.location.href = "/"
    }

    return Promise.reject(error)
})
*/

// GET INSTANCE
export const getInstance = (url) => getAxios.get(url).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res.data }
})
// GET SECURE INSTANCE
export const getSecInstance = (url, config) => getAxios.get(url, config).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res.data }
})

// POST INSTANCE
export const postInstance = (url, params) => postAxios.post(url, params).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res }
})
// POST SECURE INSTANCE
export const postSecInstance = (url, params, config) => postAxios.post(url, params, config).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res }
})

// PUT INSTANCE
export const putInstance = (url, params) => putAxios.put(url, params).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res }
})
// PUT SECURE INSTANCE
export const putSecInstance = (url, params, config) => putAxios.put(url, params, config).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res }
})

// PATH INSTANCE
export const patchInstance = (url, params) => patchAxios.patch(url, params).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res }
})
// PATH SECURE INSTANCE
export const patchSecInstance = (url, params, config) => patchAxios.patch(url, params, config).then(res => {
    if (res === null) { return Promise.reject('rejected from post axios') }
    else { return res }
})

// DELETE INSTANCE
export const deleteInstance = (url) => deleteAxios.delete(url).then(res => {
    if (res === null) { return Promise.reject('rejected from delete axios') }
    else { return res }
})
// DELETE SECURE INSTANCE
export const deleteSecInstance = (url, config) => deleteAxios.delete(url, config).then(res => {
    if (res === null) { return Promise.reject('rejected from delete axios') }
    else { return res }
})
