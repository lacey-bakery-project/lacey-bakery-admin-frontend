import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginAdmin, getUsername } from '../actions'
import { useForm } from '../hooks/useForm'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import loginSchema from '../services/loginSchema'

const init = {
    initValues: {
        username: '',
        password: ''
    },
    initError: {
        username: '',
        password: ''
    }
}

function Login(props) {
    const [
        loginValues,
        errors,
        change,
        disabled
    ] = useForm(init.initValues, init.initError, loginSchema)
    const [err, setErr] = useState('')
    const { push } = useHistory()

    const submit = e => {
        e.preventDefault()

        axiosWithAuth()
            .post('/api/users/login', loginValues)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', res.data.role_name)
                localStorage.setItem('username', res.data.username)

                if (localStorage.getItem('role') === 'admin') {
                    props.loginAdmin(true)
                }
                props.getUsername(localStorage.getItem('username'))
                push('/')
            })
            .catch(err => {
                setErr(err.response.data.message)
            })
    }

    const { username, password } = loginValues

    return (
        <div>
            <h2>Log in</h2>
            <div>
                <form onSubmit={submit}>
                    <div>
                        <label>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={change}
                        />
                    </div>
                    <div>
                        <div>{errors.username}{err}</div>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={change}
                        />
                    </div>
                    <div>
                        <div>{errors.password}{err}</div>
                    </div>
                    <button className='login-btn'
                        disabled={disabled}
                    >Log in
                    </button>
                </form>
            </div>
            <div>
                <div>Don't have an account?<span> <Link to='/signup'>Sign up</Link></span></div>
            </div>
        </div>
    )
}

export default connect(null, { loginAdmin, getUsername })(Login)
