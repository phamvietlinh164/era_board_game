// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = matchFunc(req.body)
  res.status(200).json(result)
}


const matchFunc = (match123: any) => {
  const match2point: any[] = []
  const match3point: any[] = []
  const shouldNotContain: string[] = []

  const matchList: any = {}
  for(const matchElement in match123){
    matchList[`${matchElement}-${match123[matchElement]}`] = true
  }
  for(const matchListElement in matchList){
    const part1 = matchListElement.split('-')[0]
    const part3 = matchListElement.split('-')[2]
    for(let i = 1; i <= 3; i = i + 1 ){
      if(matchList[`${part3}-${i}-${part1}`]){
        match2point.push({
          key: `${matchListElement}-${part3}-${i}-${part1}`,
          point: Number(matchListElement.split('-')[1]) + i
        })
      }
        
    }
  }
  match2point.sort((a, b) => {
    if (a.point > b.point) {
      return 1;
    }
    if (a.point < b.point) {
      return -1;
    }
    return 0;
  })
  
  match2point.forEach((matchE, indexE) => {

    if(indexE === 0){
      match3point.push(matchE)
      shouldNotContain.push(matchE.key.split('-')[0])
      shouldNotContain.push(matchE.key.split('-')[2])
    }
    let shouldPushNewMatch = checkIfContain(matchE.key, shouldNotContain)
    if(!shouldPushNewMatch){
      match3point.push(matchE)
      shouldNotContain.push(matchE.key.split('-')[0])
      shouldNotContain.push(matchE.key.split('-')[2])
    }
  })
  return match3point
}

const checkIfContain = (string: string, listString: string[]) => {
  let result = false
  const stringList2 = string.split('-')
  const listStringObj: any = {}
  listString.forEach(shouldNotContainE => {
    listStringObj[shouldNotContainE] = true
  })
  stringList2.forEach(a => {
    if(listStringObj[a]) result = true
  })

  return result
}
