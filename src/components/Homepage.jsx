
import BlogList from "./blogList";
import UseFetch from "./useFetch";

const Home = () => {
    const {data : blogs , isPending, error} = UseFetch(' http://localhost:8000/blogs')
     
    return ( 
        <div className="home">
             <div>{error}</div>
           { isPending && <div>Loading....</div>}
        <BlogList
        bg ={blogs}
        ti ="All blogs!"
        
        />
        </div>
     );
}
 
export default Home;