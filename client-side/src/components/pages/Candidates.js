import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import { fetchGetCandidates } from "../../utilities/fetchUtil";
import logo from '../../assets/img/logo.jpg'
import { toast } from 'react-toastify';
import { SetToast } from '../../utilities/settings';
import HeaderApp from '../reusable/HeaderApp';

const Candidates = () => {
    const [candidatesList, setCandidatesList] = useState([{}])
    useEffect(() => {
        debug('nerv')
        getCandidates()
    }, [])

    const getCandidates = () => {
        fetchGetCandidates().then((res) => {
            debug(res)
            //if (res?.status === 200) {
            if (res) {
                setCandidatesList(Object.entries(res))
            }
        }).catch(err => {
            debug(err)
        })
    }

    return (
        <>
            <HeaderApp />
            <div className="middle_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text_banner">
                                <h4> El empleado del mes</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="container nopad_r">
                    <div className="card card_wrapper mt-3 mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4 className="title_nominate">Los nominados son</h4>
                                    <div className="table-responsive">
                                        <table className="table table-borderless table_cumplo">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">Empleado</th>
                                                    <th scope="col" className="text-end">Votos</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    candidatesList.length > 0 ?
                                                        (
                                                            candidatesList.map((candidate, index) => {
                                                                return (
                                                                    <tr key={index} id={candidate[1]?.id}>
                                                                        <td><button className="btn_vote">VOTAR</button></td>
                                                                        <td>{candidate[1]?.name}<br /><span>{candidate[1]?.store}</span></td>
                                                                        <td className="red_number">{candidate[1]?.votes}</td>
                                                                    </tr>)
                                                            })
                                                        ) : (<tr></tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Candidates