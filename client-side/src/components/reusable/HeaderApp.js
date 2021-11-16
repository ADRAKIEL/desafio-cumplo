import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import { fetchGetCandidates } from "../../utilities/fetchUtil";
import logo from '../../assets/img/logo.jpg'
import { toast } from 'react-toastify';
import { SetToast } from '../../utilities/settings';

const HeaderApp = () => {
    const [cutdown, setCutdown] = useState("10:00")
    const timmer = 1000000

    useEffect(() => {
        debug('nerv')
    }, [])

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark nav_home_bar list-inline d-lg-flex justify-content-center">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
                        <div className="d-flex navbar_text">
                            <p>{cutdown}</p>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderApp