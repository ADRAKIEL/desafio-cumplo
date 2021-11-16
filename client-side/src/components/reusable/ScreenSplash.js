import { useEffect, useState } from 'react'
import { debug } from '../../utilities/helper'
import pc from '../../../package.json'
import logo from '../../assets/img/logo.jpg'

const ScreenSplash = () => {
    const [packVersion, setPackVersion] = useState('')

    useEffect(() => {
        debug('nerv')
        setPackVersion(`${pc.description} - ${pc.version}`)
    }, [])

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <img src={logo} alt="splash" className="img-fluid logo_middle" />
            <p>{packVersion}</p>
        </div>
    )
}

export default ScreenSplash