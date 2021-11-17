import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import { fetchGetCandidates } from "../../utilities/fetchUtil";
import hands from '../../assets/img/hand_a.jpg'
import { toast } from 'react-toastify';
import { SetToast } from '../../utilities/settings';
import HeaderApp from '../reusable/HeaderApp';
import { useLocation, useNavigate } from 'react-router';

const VoteComplete = () => {
    const { state } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        debug('nerv')
        setTimeout(() => {
            nextScreen()
        }, 2000);
    }, [])

    const nextScreen = () => {
        navigate('/results')
    }

    return (
        <>
            <HeaderApp />

            <div className=
                "d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div className=
                    "vote_end">
                    <h4>¡Ya votaste! <img src={hands} className=
                        "img-fluid" /></h4>
                    <p>Ahora espera <br />los resultados</p>
                </div>

            </div>
        </>
    )
}

export default VoteComplete

