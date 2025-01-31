"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function MealSeacrh() {
  const [search,setSearch] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  useEffect(()=> {
    const searchQuery = {search}
    const urlQueryParam = new URLSearchParams(searchQuery)
    const url = `${pathname}?${urlQueryParam}`
    router.push(url)
  },[search])
  return (
 <div>
         <div className='flex items-center my-10 justify-center'>
         
      <input type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)} className='input input-info w-full max-w-sm' />
    </div>
 </div>
  )
}
