import { useEffect, useReducer, useState } from "react";
import { findPostsBySearch } from "../actions/posts.action";
import postReducer from "../reducers/posts.reducer";


function usePost(){

    const [search, setSearch] = useState('');
    const [state, dispatch] = useReducer(postReducer);



    function findPostBySearch(){
        dispatch(findPostsBySearch(search));
        setSearch('');
    }

    return { setSearch, findPostBySearch};

}

export default usePost;