import React from 'react'

export default function Image({ src }) {
    return (
        <div className='mt-5'>
            <img src={src} className='img-thumbnail' alt="" />
        </div>
    )
}
