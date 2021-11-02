import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='login'>Log in</Link>
                <Link to='signup'>Sign up</Link>
                <Link to='logout'>Log out</Link>
            </div>
        </div>
    )
}
