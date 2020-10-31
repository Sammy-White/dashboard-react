import { useEffect } from 'react'

export const useSignupData = (datas) => {
    return (
                fetch('http://206.189.124.254:9000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                }).then((res) => {
                    return res.json()
                }).then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
               
    )
}

