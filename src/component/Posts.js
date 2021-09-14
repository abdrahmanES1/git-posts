import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import pokeball from "../pokeball.png";

export class Posts extends Component {
   state = {
      posts: [],
   };
   componentDidMount() {
      axios
         .get("https://jsonplaceholder.typicode.com/posts")
         .then((res) => this.setState({ posts: res.data.slice(0, 10) }));
   }
   render() {
      const { posts } = this.state;
      const postList = posts.length ? (
         posts.map((post) => {
            return (
               <div className="post card" key={post.id}>
                  <img src={pokeball} alt="gi" />
                  <div className="card-content ">
                     <Link to={"/" + post.id}>
                        <span className="card-title">{post.title}</span>
                     </Link>
                     <p>{post.body}</p>
                  </div>
               </div>
            );
         })
      ) : (
         <div className="center">No post yet</div>
      );
      return <div className="posts">{postList}</div>;
   }
}

export default Posts;
