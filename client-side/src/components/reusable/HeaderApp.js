import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import { fetchGetCandidates, fetchGetCountdown } from "../../utilities/fetchUtil";
import logo from '../../assets/img/logo.jpg'
import { toast } from 'react-toastify';
import { SetToast } from '../../utilities/settings';
import { useNavigate } from 'react-router';

const HeaderApp = () => {
    const [cutdown, setCutdown] = useState("10:00")
    const timmer = 1000000
    const navigate = useNavigate()

    useEffect(() => {
        debug('nerv')
        getCountdown()
    }, [cutdown])

    const getCountdown = () => {
        fetchGetCountdown().then((res) => {
            console.log(res)
            setCutdown(res.secondsLeft)
            if (res.secondsLeft < 1) {
                nextScreen()
            }
        }).catch(err => {
            //
        })
    }

    const nextScreen = () => {
        navigate('/results')
    }

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