import React from 'react'
import { like } from '../../services/api'

function Post(props){


    const postStyle ={
        width:'100%'
    }    

    const cardDivStyle ={
        paddingTop: '2em'
    }

    function onClickLike(){

        like(props.id).then(response =>{
            console.log('response>>', response.data);
            props.history.replaceState("/login");

        }).catch(err => {
            console.log('Error at giving like>>', err);
        });
        console.log('onClickLike>>')
    }

   
   

    return (
        <div className="col- col-sm-3 col-md-3 col-lg-3" style={cardDivStyle}>
            <div className="card" style={postStyle}>
                <img src={props.image} className="card-img-top" alt='Post' />
                <br/>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <p className="p-time">{props.createdAt}</p>
                        </div>
                        <div className="col-6 post-like">
                            <a href='/#' id="btn_like_1" className="btn btn-outline-danger" onClick={onClickLike}>
                                <i id="i_like_1" className="fa fa-heart" ></i> {props.likes} </a>
                        </div>
                    </div>

                    <h5 className="card-title">{`@${props.author}`}</h5>
                    <p className="card-text">{`${props.text.substring(0,50)}...`} </p>
                    <a href='/#'>
                        <i className="far fa-comment-alt"></i> Comments
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Post;