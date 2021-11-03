import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAdmin, getUsername } from '../actions'

function Logout(props) {
    const { push } = useHistory()

    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        props.loginAdmin(false)
        props.getUsername('')
        push('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div></div>
    )
}

export default connect(null, { loginAdmin, getUsername })(Logout)
