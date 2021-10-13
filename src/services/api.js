import axios from "axios";

const http= axios.create({
    baseUrl:'https://3p.apps-dev.tid.es/api',
    withCredentials: true

});

http.interceptors.response.use(
    (response) => response.data,
    (error) =>{
        if(error.response.status === 401){
            window.location.replace('/login')
        }
    }
)

export const login = async (username, password)=>  {
    return await axios.post('https://3p.apps-dev.tid.es/api/login', {username, password});
}

export const logout = async (username, password)=>  {
    return await axios.post('https://3p.apps-dev.tid.es/api/logout', {username, password});
}

export const listPosts = async()=>  {
    return await axios.get('https://3p.apps-dev.tid.es/api/posts');
}

export const like = async(postId)=>  {
    return await axios.get(`https://3p.apps-dev.tid.es/api/posts/${postId}/like`);
}

export const getUser = async (userId)=>{
    return await axios.get(`https://3p.apps-dev.tid.es/api/users/${userId}`);
}