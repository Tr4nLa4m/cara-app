import "./blog.css";
export default function Blog(props) { 
    const blog = props.blog;

    return(
        <div className="blog_box">
            <div className="blog_image">
                <img src={blog.image} alt={blog.title} />
            </div>

            <div className="blog_details">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
    )
 }