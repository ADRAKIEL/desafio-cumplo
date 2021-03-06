import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import { fetchGetCandidates } from "../../utilities/fetchUtil";
import logo from '../../assets/img/logo.jpg'
import { toast } from 'react-toastify';
import { SetToast } from '../../utilities/settings';
import HeaderApp from '../reusable/HeaderApp';
import { useLocation, useNavigate } from 'react-router';

const Vote = () => {
    const { state } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        debug('nerv')
        setTimeout(() => {
            nextScreen()
        }, 2000);
    }, [])

    const nextScreen = () => {
        navigate('/voted')
    }

    return (
        <>
            <HeaderApp />

            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className="vote_thanks">
                    <h4> +1</h4>
                    <p>¡Gracias por tu voto!</p>
                </div>

                <div className="good_text">
                    <p>esperamos que a<br />
                        <span>{state?.name}</span><br />
                        le vaya muy bien</p>
                </div>
            </div>
        </>
    )
}

export default Vote