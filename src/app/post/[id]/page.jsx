// "use client"
import React from 'react'

export const getSingleItem = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

// dynamic wise title
export async function generateMetadata({ params}) {
  // read route params
  const id = (await params).id
 
  // fetch data
  const singlePost = await getSingleItem(id)
 
  
  return {
    title: singlePost.title,
    description: singlePost.body
  }
}



export default async function page({params}) {
  const data =await params
    const item = await getSingleItem(data.id)
    // console.log(item)
  return (
    <div className='w-11/12 mx-auto flex items-center justify-center mt-44 '>
        <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src='/rescue.jpg'
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title ">{item.title}</h2>
                <p>{item.body}</p>
                
              </div>
            </div>
    </div>
  )
}
