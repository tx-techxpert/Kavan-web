import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'
const Dashboard = () => {
    return (
        <div className='kavan_admin_main_container'>
            <Link to='/dashboard/AppointmentStack'>
                <h2>kavan admin home</h2>
            </Link>
        </div>
    )
}

export default Dashboard
