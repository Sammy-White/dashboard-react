import React from 'react'

class SecondSales extends React.Component{
    constructor(){
        super()
        this.state ={
            data: []
        }
        this.deleteSale = this.deleteSale.bind(this)
    }

   async componentWillMount(){
       let url = await fetch('http://206.189.124.254:9000/sales')
       let data = await url.json()
       this.setState({data})
    }

    deleteSale(e){
        const id = e.target.value
            fetch('http://206.189.124.254:9000/sales/' + id, {
            method: 'DELETE',
            })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(res => {
                console.log(res) 
                if (res['success'] === 'operation successful'){
                    this.setState({data: this.state.data.filter(data => data._id !== id)})
                }
            })
            .catch(err => {
                console.log(err)
            })
        
    }


    render(){
        let getData = this.state.data
        // console.log(getData)
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getData.map(data => {
                                // console.log(data)
                                const dateStamp = data.date
                                const date = new Date(dateStamp * 1000)
                                const day = date.getDay()
                                const month = date.getMonth()
                                const year = date.getFullYear()
                                const fullDate = day + '/' + month + '/' + year

                                return (
                                    <tr key={data._id} >
                                        <td>{fullDate}</td>
                                        <td>{data.unit_price}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.total_price}</td>
                                        <td><button value={data._id} onClick={e => this.deleteSale(e)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SecondSales