import { useEffect, useReducer, useState } from "react";
import { findPostsBySearch } from "../../actions/posts.action";
import postReducer from "../../reducers/posts.reducer";
import { listPosts } from "../../services/api";
import DelayedSpinner from "../DelaySpinner/DelaySpinner";
import Post from "../Post/Post";
import PostList from "../Post/PostList";
import SearchBar from "../SearchBar/SearchBar";


function Home({history}){

    const [posts, setPosts] = useState([]);
    const [postDataAux, setPostDataAux] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{      
        setLoading(true);  
        listPosts().then(response => {
            setPostDataAux(response.data);
            setPosts(loadPosts(response.data));
            console.log(response.data);
            setLoading(false);  

        }).catch(err=>{
            console.log("error>>", err)
            setLoading(false);  

        });
       
       return ()=>{setPosts([])}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [state, dispatch] = useReducer(postReducer, postDataAux);

    function findPostBySearch(search){
        dispatch(findPostsBySearch({searchFilter: search, data: postDataAux}));
        setPosts(loadPosts(state))
    }

    function loadPosts(postsData) {
        let posts = postsData.map
                    ((item,pos) => {
                        return ( 
                            <Post key={pos} 
                                  id={item.id} 
                                  author={item.author.username} 
                                  text={item.text} 
                                  image={item.image}
                                  createdAt={item.createdAt} 
                                  likes={item.likes} 
                                  position={pos}
                                  history={history}/>)
                    });
        return posts
    }

    return (
        <div>
            {loading ? <DelayedSpinner loading={loading} delay={1500}/>:''}
            <SearchBar findPostBySearch={findPostBySearch}/>
            <PostList posts={posts}></PostList>
        </div>
    )
}

export default Home;