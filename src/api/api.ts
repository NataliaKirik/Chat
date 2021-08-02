import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/',
})

export const commonAPI = {
    getForumAllData() {
        return instance.get(`forum/all`)
    }
}

type ForumAllDataResponseType = {}
