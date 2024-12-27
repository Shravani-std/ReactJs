import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Store/auth_slice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    //useDispatch method send actions to store
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}> Logout</button>
    )
}

export default LogoutBtn
