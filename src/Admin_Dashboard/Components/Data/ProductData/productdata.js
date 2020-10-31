import { useEffect, useState } from 'react'


export const useProduct = () => {
    const [state, setState] = useState({datap:[]})
    useEffect(() => {
        fetch('http://206.189.124.254:9000/products')
            .then(res => {
                return res.json()
            }).then(res => {
                setState({datap: res})
            })
    }, [])
    return state
}