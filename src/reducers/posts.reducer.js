const postReducer = (state, action) => {
    console.log(action);
    let returnedPosts;
    switch (action.type){
      case 'FIND_POST_BY_SEARCH':
        if(action.payload.searchFilter=== undefined || action.payload.searchFilter === null || action.payload.searchFilter.trim()=== ''){
          return action.payload.data
        } 
        
        returnedPosts = action.payload.data.filter((post)=> post.text.toUpperCase().includes(action.payload.searchFilter.toUpperCase()));
        return returnedPosts;
      default:
      return state;
    }
};

export default postReducer;