 export const PostCard = (props) => {
    //const post = props.post;
    const { post } = props; // destruction

    //console.log(post.id)

     return (
        <div className="posts-complete">
            <div className="photos">
                <img src={post.cover} alt={post.title} />
            </div>
            <div className="posts-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
     );
 }