import React from 'react'


export default function Header ({
    title
})
{
    return <h1 data-testid= "header-1" className='header' title='Header'>{title}</h1>
}