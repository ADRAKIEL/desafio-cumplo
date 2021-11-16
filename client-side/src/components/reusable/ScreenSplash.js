import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import pc from '../../../package.json'
import logo from '../../assets/img/logo.jpg'
import { useNavigate } from "react-router-dom"

const ScreenSplash = () => {
    const [packVersion, setPackVersion] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        debug('nerv')
        setPackVersion(`${pc.description} - ${pc.version}`)
        setTimeout(() => {
            goCandidates()
        }, 3000);
    }, [])

    const goCandidates = () => {
        navigate('/candidates')
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
            onClick={goCandidates} >
            <img src={logo} alt="splash" className="img-fluid logo_middle" />
            <p>{packVersion}</p>
        </div>
    )
}

export default ScreenSplash