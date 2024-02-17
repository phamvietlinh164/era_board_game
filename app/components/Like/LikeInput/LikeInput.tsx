

export default function Like({onChange, name, option, placeHolder}: any) {
  return (
    <input className="bg-gray-100 rounded-md border-2 w-16" onChange={event => 
      {
        onChange((prev: any) => {
          return {
            ...prev,
            [`${name}-${option}`]: `${event.target.value}`.toLowerCase()
          }
        })
      }
    } placeholder={placeHolder}/>
  )
}
