import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <nav>
        <Link href={'/'} >Home Page</Link>
        <Link href={'/add'} >add article</Link>
        <Link href={'/login'} >login</Link>
    </nav>
  )
}

export default Header