import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Header(props) {
    const login = props.username

    console.log('Header renders')
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                {login
                    ? <Link to='/logout'>Log out</Link>
                    : <>
                        <Link to='/login'>Log in</Link>
                        <Link to='/signup'>Sign up</Link>
                    </>
                }
            </div>
            {login ? <div>Welcome back, <span>{login}</span></div> : <></>}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        username: state.username.username
    })
}

export default connect(mapStateToProps)(Header)
