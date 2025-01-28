import Link from "next/link";
import React from "react";
// import img from '../'
export const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
};

export default async function page() {
  const item = await getPosts();
  // console.log(item.url)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5">
      {item?.map((data) => {
        return (
          <div key={data.id}>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src='one.jpg'
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.body}</p>
                <div className="card-actions justify-end">
                  <Link href={`/post/${data.id}`} className="btn btn-primary">Details</Link>
                </div>
              </div>
            </div>
            {/* <h1>{data.title}</h1> */}
            {/* <img src={data.url} alt="" /> */}
            {/* <img src={data.thumbnailUrl} alt="" /> */}
            {/* <p>{}</p> */}
          </div>
        );
      })}
    </div>
  );
}
