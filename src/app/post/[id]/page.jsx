import React from 'react'

export const getSingleItem = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function page({params}) {
  const data =await params
    const item = await getSingleItem(data.id)
    // console.log(item)
  return (
    <div className='w-11/12 mx-auto flex items-center justify-center'>
        <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src='/one.jpg'
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
