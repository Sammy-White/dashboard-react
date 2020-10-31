import { useEffect, useState } from 'react'


export const useSales = () => {
    const [state, setState] = useState({data:[]})
    useEffect(() => {
        fetch('http://206.189.124.254:9000/sales')
        .then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            setState({data:res})
        })
    }, [])
    return state
}
