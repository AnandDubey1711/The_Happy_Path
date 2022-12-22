import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    
    <div className='text-center mt-8 mb-4 p-8 relative rounded-lg bg-black bg-opacity-50'>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.description}</p>

    <div className='relative left-20% -top-14'>
            <Image
            alt={author.name}
            unoptimized
            height={100}
            width={100}
            className='align-middle rounded-full '
            src={author.photo.url}
            />
        </div>
    </div>
  )
}

export default Author