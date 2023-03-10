import React, { useEffect, useState } from 'react'

export default function BitcoinPage() {
    const [data, setData] = useState('Loading')


    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then(res => res.json())
            .then(data => {
                setData(data)

            })

    }, [])

    const bitcoinDataHandler = () => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }

  return (
    <div className='page-wrapper'>
        {data &&
            <div className='output-wrapper'>
                <h2>{data.chartName}</h2>
                <div className='rate-wrapper'>
                    <ul>
                        <li>{data.bpi.USD.code}</li>
                        <li>{data.bpi.USD.rate}</li>
                    </ul>
                    <ul>
                        <li>{data.bpi.GBP.code}</li>
                        <li>{data.bpi.GBP.rate}</li>
                    </ul>
                    <ul>
                        <li>{data.bpi.EUR.code}</li>
                        <li>{data.bpi.EUR.rate}</li>
                    </ul>
                    <h3>Last update: {data.time.updated}</h3>
                    <h6>{data.disclaimer}</h6>
                </div>
            </div>
        }
        <button onClick={bitcoinDataHandler}>Update bitcoin rate</button>
    </div>
  )
}
