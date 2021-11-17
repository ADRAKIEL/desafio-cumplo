import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import { fetchGetWinner } from "../../utilities/fetchUtil";
import hands from '../../assets/img/hand_a.jpg'
import { toast } from 'react-toastify';
import { SetToast } from '../../utilities/settings';
import HeaderApp from '../reusable/HeaderApp';
import { useLocation, useNavigate } from 'react-router';

const Results = () => {
    const [winner, setWinner] = useState({})
    const { state } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        debug('nerv')
        getWinner()
    }, [])

    const getWinner = () => {
        fetchGetWinner().then(res => {
            setWinner(res)
        }).catch(err => {
            goBack()
            //toast.error(`${err}`, SetToast)
        })
    }

    const nextScreen = () => {
        navigate('/results')
    }

    const goBack = () => {
        navigate('/voted')
    }

    return (
        <>
            <HeaderApp />
            <div className=
                "middle_banner">
                <div className=
                    "container">
                    <div className=
                        "row">
                        <div className=
                            "col-md-12">
                            <div className=
                                "result_winner mt-5">

                                <h4 className=
                                    "fw-normal"> El empleado del mes es</h4>
                                <p>{winner?.name}</p>
                                <span>{winner?.store}</span>
                            </div>

                            <div className=
                                "votes_w mt-5">
                                <h5>con</h5>
                                <h4><span>{winner?.votes}</span> votos</h4>
                                <p>¡Felicidades!</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Results

