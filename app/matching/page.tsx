'use client'

import Like from '../components/Like/Like';
import React, { useState } from 'react';

const allGirlArr = [
  'g1',
  'g2',
  'g3',
  'g4',
  'g5',
  'g6',
  'g7',
  'g8',
  'g9',
  'g10',
]

const allBoyArr = [
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'b6',
  'b7',
  'b8',
  'b9',
  'b10',
]




export default function Matching() {
  const [match, setMatch] = useState<any>({})
  const [result, setResult] = useState<any>([])

  const renderInput = (list: string[]) => {
    return list.map((girlBoy: string, index: number) => {
      return <Like key={index} name={girlBoy} onChange={setMatch}/>
    })
  }

  const renderResult = (list: any[]) => {
    if(list.length === 0) return null
    return list.map((element: any, index: number) => {
      return <p key={index}>{`${element.key.split('-')[0]}-${element.key.split('-')[2]}`}</p>
    })
  }


  const handleMatch = async () => {
    const response = await fetch('/api/match_result', {
      method: 'post',
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(match)
    })
    const result = await response.json()
    setResult(result)
  }
  
  return (
    <div className="">
      <div className="container mx-auto flex">
        <div className='columns-1 w-1/2'>
          {renderInput(allGirlArr)}
        </div>
        <br/>
        <div className='columns-1 w-1/2'>
          {renderInput(allBoyArr)}
        </div>
      </div>



      <div className="container mx-auto">
        <button 
        className="p-1 border-2 border-solid border-gray-400 rounded-sm shadow-xl" 
        onClick={() => handleMatch()}>
          Match
        </button>
        <div className='boy-section columns-12'>
          {renderResult(result)}
        </div>
      </div>
    </div>
  )
}
