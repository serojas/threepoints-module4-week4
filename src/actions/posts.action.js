export const findPostsBySearch = ({searchFilter, data}) =>{
    return {type: 'FIND_POST_BY_SEARCH', payload: {searchFilter, data}}
};
