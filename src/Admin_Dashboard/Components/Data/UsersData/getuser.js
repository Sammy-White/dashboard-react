import { useEffect, useState } from 'react'


export const useGetusers = () => {
    const [state, setState] = useState({ datau: [] })
    useEffect(() => {
        fetch('http://206.189.124.254:9000/users')
            .then(res => {
                return res.json()
            }).then(res => {
                console.log(res)
                setState({ datau: res })
            })
    }, [])
    return state
}
