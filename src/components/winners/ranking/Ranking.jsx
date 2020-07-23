import React, { useState, useEffect } from 'react'
import TopThree from './TopThreeRanking'
import { AxiosWithAuth } from '../../../utils'

export function Ranking(props) {

    const [winners, setWinners] = useState([])
    const [error, setError] = useState()
    const [selection, setSelection] = useState([])

    useEffect(()=> {
        AxiosWithAuth().get("/ranking/")
            .then(res => { 
                let response = res.data
                setWinners(response)
                setSelection({
                    rank1: response[0].id,
                    rank2: response[1].id,
                    rank3: response[2].id
                })
            })
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let requestBody = [
            { "rank": 1, "topThreeId": parseInt(selection.rank1) },
            { "rank": 2, "topThreeId": parseInt(selection.rank1) },
            { "rank": 3, "topThreeId": parseInt(selection.rank1) },
        ]

        AxiosWithAuth().post("ranking", requestBody)
            .then(res => {
                props.history.push("/announcement")
            })
            .catch(err => setError(err))
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                {console.log(winners)}
                {!winners && <></>}
                { winners && winners.map((el, index) => <TopThree index={index} winners={winners} winner={el} selection={ selection } setSelection={ setSelection }/>)}
                <button type="submit" className="btn btn-primary btn-lg m-3 p-2 px-5">Rank my winners!</button>
                { error && <div className="alert alert-danger" role="alert"> { error.message } </div> }
            </form>
        </div>
    )
}
