import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
    };
    fetchPosts();
  }, []);

  const ApiPost = posts.map((post) => {
    return (
      <div className="mb-5" key={post.id}>
        <div
          className="bg-orange-200 border border-black shadow-lg mx-auto  sm:p-8 sm:text-xl sm:space-x-2 sm:space-y-0 p-8 max-w-5xl text-xl font-semibold space-x-2 rounded"
          key={post.id}
        >
          <p className="text-gray-800 font-poppines font-semibold text-2xl sm:text-2xl">
            #{post.id}. {post.title}
          </p>

          <div className="flex flex-col sm:flex-row items-center ">
            <p className="font-thin font-poppines mx-6 mt-3">
              {post.body} <br />
              {/* <Link to={post.reactions}> Read More </Link> */}
              {/* <Link to={`desc/" + val.id`}> Read More </Link> */}
              {/* <Link to={"posts/" + posts.id}> */}
              <Link to={"/"}>
                <button className="bg-blue-900 text-white hover:bg-blue-700 sm:mt-5 mt-10 sm:w-28 w-24   sm:ml-0 ml-10   hover:text-white text-sm px-2 py-1 rounded">
                  Read More
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  });

  // console.log(BlogPost);

  return (
    <div className="bg-white">
      {/* <h1 className="text-black font-bold mb-5  ">welcome to Homepage</h1> */}
      {ApiPost}
    </div>
  );
};

export default HomePage;
