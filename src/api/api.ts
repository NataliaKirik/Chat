import axios from 'axios';
import { getUsername } from '../app/asyncStore';

export const IP = 'http://192.168.100.7:8080';
// export const IP = 'http://192.168.48.53:8080';
// const IPHome = 'http://192.168.100.7:8080';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://10.0.2.2:8080/'
});
// baseURL: 'http://localhost:8080/'
// baseURLHome: 'http://10.0.2.2:8080/'


instance.interceptors.request.use(
    function(config) {
        const token = getUsername();
        if (token) {
            config.headers['X-User-Name'] = token;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export const forumAPI = {
    getForumAllData() {
        return instance.get<ForumDataType[]>(`forum/all`)
            .then(res => res.data)
            .catch(e => {
                throw new Error(e);
            });
    },
    like(id: number) {
        return instance.get<ForumDataType>(`forum/like/${id}`)
            .then(res => res.data)
            .catch(e => {
                throw new Error(e);
            });
    },
    unLike(id: number) {
        return instance.get<ForumDataType>(`forum/unlike/${id}`)
            .then(res => res.data)
            .catch(e => {
                throw new Error(e);
            });
    }
};

export const chatAPI = {
    addChatUserData(forumId: number, receiverName: string, message: string) {
        return instance.post(`chat/add`, {
            forumId, receiverName, message
        })
            .catch(e => {
                throw new Error(e);
            });
    },
    getChatUserData(forumID: number) {
        return instance.get<ChatDataType[]>(`chat/all/${forumID}`)
            .then(res => res.data)
            .catch(e => {
                throw new Error(e);
            });
    }
};


//types
export type ForumDataType = {
    id: number
    title: string
    photo: string
    owner: string
    replies: number
    date: string
    like: boolean
}
export type ChatDataType = {
    id: string
    forumId: number
    senderName: string
    receiverName: string
    message: string
    date: string
}

