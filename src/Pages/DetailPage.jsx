import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  // const { id } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
    };
    fetchPosts();
  }, [[params.id]]);

  // yoga
  // useEffect(() => {
  //   const getDesc = async () => {
  //     const api = await fetch("https://dummyjson.com/posts");
  //     const datas = await api.json();

  //     //   getting correct data
  //     setDesc(
  //       datas.posts.find((val) => {
  //         return id == val.id;
  //       })
  //     );
  //   };
  //   getDesc();
  // });

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const fetchedPosts = await fetch("https://dummyjson.com/posts");
  //     const postJson = await fetchedPosts.json();

  //     setPosts(
  //       postJson.posts.find((val) => {
  //         return id == val.id;
  //       })
  //     );
  //   };
  //   fetchPosts;
  // });

  return (
    <div className="bg-[#647D87] p-5 h-screen">
      <div className="bg-white p-10 rounded max-w-xl mx-auto">
        <div className="mb-5 text-center">
          <Link to={"/"}>
            <p>$</p>
          </Link>
        </div>
        <div className="space-y-5">
          <p className="text-2xl font-semibold">{posts.title}</p>
          <p className="">{posts.body}</p>
          {/* <p>{data}</p> */}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
