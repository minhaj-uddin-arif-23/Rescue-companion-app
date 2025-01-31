import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Slider from "../slider/page";
import Form from "./Form";
import Footer from "./Footer";
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-gray-100 px-20 py-5 z-50  top-0 fixed">
        <div className="flex-1">
          <Link href={'/'} className="btn btn-ghost text-xl">Rescue Companion</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/login'} className="btn btn-sm mr-3 btn-outline"> Login </Link>
            </li>
            <li>
              <details>
                <summary className="btn btn-sm btn-success text-white">Menu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href={"/Home"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/post"}>Post</Link>
                  </li>
                  <li>
                    <Link href={"/meal"}>Meals</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}
