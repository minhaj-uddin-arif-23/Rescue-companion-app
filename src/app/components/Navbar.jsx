import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Rescue Companion</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
              <li><Link href={'/home'}>Home</Link></li>
              <li><Link href={'/post'}>Post</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}
