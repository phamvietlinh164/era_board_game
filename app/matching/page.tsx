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
  'g11',
  'g12',
  'g13',
  'g14',
  'g15'
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
  'b11',
  'b12',
  'b13',
  'b14',
  'b15'
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
      return <p className='flex justify-center' key={index}>{`${element.key.split('-')[0]}-${element.key.split('-')[2]}`}</p>
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
    <div className="container mx-auto">
      <h1 className='flex justify-center'>Matching application</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=''>
          {renderInput(allGirlArr)}
        </div>
        <div className=''>
          {renderInput(allBoyArr)}
        </div>
      </div>


      <br />
      <div className="container mx-auto">
        <div className='flex justify-center'>
          <button 
          className="p-1 border-2 border-solid border-gray-400 rounded-sm shadow-xl" 
          onClick={() => handleMatch()}>
            Match
          </button>
        </div>
        <div className=''>
          {renderResult(result)}
        </div>
      </div>
    </div>
  )
}
