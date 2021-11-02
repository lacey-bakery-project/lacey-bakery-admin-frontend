import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import signupSchema from '../services/signupSchema'
import { useForm } from '../hooks/useForm'
import { base_URL } from '../api'

const initValues = {
    username: '',
    password: '',
    role: ''
}
const initError = {
    username: '',
    password: '',
    role: ''
}

export default function Signup() {
    const [signupValues, errors, change, disabled] = useForm(initValues, initError, signupSchema)
    const [err, setErr] = useState('')
    const { push } = useHistory()

    console.log('signup renders')

    const submit = e => {
        e.preventDefault()
        const newUser = {
            username: signupValues.username,
            password: signupValues.password,
            role: signupValues.role
        }

        axios.post(`${base_URL}/api/users/register`, newUser)
            .then(() => {
                push('/login')
            })
            .catch(err => {
                setErr(err.response.data.message)
            })
    }

    const { username, password, role } = signupValues

    return (
        <div>
            <div>
                <h1>sign up</h1>
            </div>
            <div>
                <form onSubmit={submit}>
                    <div>
                        <label>username</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={change}
                        />
                    </div>
                    <div>
                        <div>{errors.username}</div>
                    </div>
                    <div>
                        <label>password</label>
                        <input
                            type='text'
                            name='password'
                            value={password}
                            onChange={change}
                        />
                    </div>
                    <div>
                        <div>{errors.password}</div>
                    </div>
                    <div>
                        <label>authentication code (for admin)</label>
                        <input
                            type='text'
                            name='role'
                            value={role}
                            onChange={change}
                        />
                    </div>
                    <div>
                        <div>{err}</div>
                    </div>
                    <button disabled={disabled}>sign up</button>
                </form>
            </div>
            <div>Already have an account? <span><Link to='/login'>log in</Link></span></div>
        </div>
    )
}
