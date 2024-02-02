import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPageBak = () => {
  const params = useParams();

  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch(
        `https://dummyjson.com/posts/${params.id}`
      );
      const JsonObj = await fetchedPosts.json();
      setPost(JsonObj);
    };

    fetchPosts();
  }, [params.id]);

  console.log(posts);

  return (
    <div className=" font-poppins">
      <div
        className="card w-[1040px]  mx-auto bg-hoverWhite rounded-md overflow-hidden"
        key={posts.id}
      >
        <div className="card-img w-full">
          <Link to={"/"}>
            <button className="bg-red-500 px-5 py-2 mb-3 ml-[420px] rounded text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-3 mr-2"
              >
                <path
                  fill="#ffffff"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
              Back to Home
            </button>
          </Link>
          <img
            src="https://www.befunky.com/images/wp/wp-2022-07-resize-photo-featured.jpg?auto=avif,webp&format=jpg&width=1136&crop=16:9"
            alt="Cartoon clipart - Mushkir"
            className="h-[400px] w-full object-cover "
          />
        </div>

        <div className="card-body bg-rose-200 p-6">
          <h5 className="text-xl font-semibold">
            #{posts.id} <span className="ml-2">{posts.title}</span>
          </h5>
          <p className="mt-2 mb- h-[90px] overflow-y-clip">{posts.body}</p>{" "}
          <br />
          <button className="bg-blue-600 px-1 py-1 rounded w-14 text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 mr-3"
            >
              <path
                fill="#fcfcfc"
                d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
              />
            </svg>
            {posts.reactions}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPageBak;
