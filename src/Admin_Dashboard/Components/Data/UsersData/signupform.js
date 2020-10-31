import { useState } from 'react'

export const useSignupForm = () => {
    const [values, setValues] = useState({})
    return{
        values, 
        onChange: e => {
            setValues({
                ...values, 
                [e.target.name]:e.target.value
            })
        }
    }
}

