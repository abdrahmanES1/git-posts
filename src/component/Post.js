import axios from "axios";
import React from "react";

class Post extends React.Component {
   state = {
      id: null,
      post: {},
   };
   componentDidMount() {
      let id = this.props.match.params.post_id;

      axios
         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) =>
            this.setState({
               id: id,
               post: res.data,
            })
         );
   }
   render() {
      const { post } = this.state;
      return (
         <div className="post card" key={post.id}>
            <div className="card-content ">
               <span className="card-title">{post.title}</span>

               <p>{post.body}</p>
            </div>
         </div>
      );
   }
}

export default Post;
