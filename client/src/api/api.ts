import axios from 'axios'


const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req: any) => {
    const info = localStorage.getItem('profile')
    if(info) {
        req.headers.authorization = `Bearer ${info !== null ? JSON.parse(info).token : ''}`
    }
    return req
})

export const getPoststAPI = () => API.get('/api/posts/')
export const createPostAPI = (data: any) => API.post('/api/posts', data) 
export const getOnePostAPI = (id: string | undefined) => API.get(`/api/posts/one/${id}`) 

export const getCommentsAPI = (id: any) => API.get(`/api/comment/${id}`)
export const createCommentAPI = (commentData: any, id: string | undefined) => API.post(`/api/comment/${id}`, commentData)

export const registerAPI = (useData: any) => API.post('/api/user/register', useData)
export const loginAPI = (useData: any) => API.post('/api/user/login', useData)

export const likePostAPI = (id: number) => API.post(`/api/posts/like/${id}`)
export const getLikesAPI = (id: number) => API.get(`/api/posts/like/${id}`)