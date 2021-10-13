import React from 'react'

function PostList ({posts}){
        
    return (
        <div>
            <div className="row no-padding">
                <div className="col- col-sm-12 col-md-12 col-lg-12">
                    <div id="div_posts" className="row">{posts}</div>
                </div>
            </div>   
        </div>
    )

  
}
export default PostList