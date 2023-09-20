import { Link } from "react-router-dom";

const BlogList = ({bg,ti}) => {
    return ( 
       <div className="blogList">
        
           <h2>{ti}</h2>
       {  bg.map((blog) => (
       <div className="blog-preview" key={blog.id}>
        <Link to= {`/blogs/${blog.id}`} >
           <h2>{blog.title}</h2>
           <p>Written by {blog.author}</p>
           </Link>
       </div>

       ))}
       </div>

    );
}

export default BlogList;