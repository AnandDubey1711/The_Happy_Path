import React from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import {getCategories} from '../services';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    getCategories()
      .then((newCategories)=>{setCategories(newCategories)}
      );
  },[]);
  return (
    <div className='bg-sky-200 shadow-lg rounded-lg p-8 pb-12 mb-8' >
    <h3 className='text-xl mb-8 font-semibold border-b-2 border-indigo-700 pb-4'>
      Categories
    </h3>
    {categories.map((category,index)=>(
      <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(
            index === categories.length - 1)? 'border-b-3 border-indigo-700' : 'border-b-3 border-indigo-500'} pb-3 mb-3 font-bold hover:text-orange-700`}>
            {category.name}
          </span>
      </Link>
    ))}
    </div>
  )
}

export default Categories