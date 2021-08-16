import axios from 'axios';

export const IP = 'http://192.168.48.53:8080';
// export const IP = 'http://192.168.48.53:8080';
// const IPHome = 'http://192.168.100.7:8080';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/'
});
// baseURL: 'http://localhost:8080/'
// baseURLHome: 'http://10.0.2.2:8080/'


export const forumAPI = {
    getForumAllData(username: string) {
        return instance.get<ForumDataType[]>(`forum/all`, {
            headers: {
                'X-User-Name': username
            }
        })
            .then(res => res.data)
            .catch(e => console.log(e));
    },
    like(username: string, id: number) {
        return instance.get<ForumDataType>(`forum/like/${id}`, {
            headers: {
                'X-User-Name': username
            }
        })
            .then(res => res.data)
            .catch(e => console.log(e));
    },
    unLike(username: string, id: number) {
        return instance.get<ForumDataType>(`forum/unlike/${id}`, {
            headers: {
                'X-User-Name': username
            }
        })
            .then(res => res.data)
            .catch(e => console.log(e));
    }
};

export const chatAPI = {
    addChatUserData(forumId: number, receiverName: string, message: string, username: string) {
        return instance.post(`chat/add`, {
            forumId, receiverName, message
        }, {
            headers: {
                'X-User-Name': username
            }
        })
            .catch(e => console.log(e));
    },
    getChatUserData(username: string, forumID: number) {
        return instance.get<ChatDataType[]>(`chat/all/${forumID}`, {
            headers: {
                'X-User-Name': username
            }
        })
            .then(res => res.data)
            .catch(e => console.log(e));
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

