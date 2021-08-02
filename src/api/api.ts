import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/',
})


export const commonAPI = {
    getForumAllData() {
        return instance.get<ForumAllDataResponseType>(`forum/all`)
    }
}


//types
export type ForumAllDataResponseType = {
    data: Array<ForumUserDataType>
    status: number
    statusText: undefined
    headers: {}
    config: {}
    request: {}
}
export type ForumUserDataType = {
    title: string
    photo: string
    name: string
    replies: number
    date: string
    like: boolean
}
