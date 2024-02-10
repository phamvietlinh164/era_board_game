import LikeInput from '../Like/LikeInput/LikeInput'
interface ILike {
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Like({name, onChange}: ILike) {
  return (
    <div className="flex">
      <span className="w-10">{name}:</span>
      <LikeInput onChange={onChange} name={name} option={1} placeHolder={'option 1'}/>
      <LikeInput onChange={onChange} name={name} option={2} placeHolder={'option 2'}/>
      <LikeInput onChange={onChange} name={name} option={3} placeHolder={'option 3'}/>
    </div>
  )
}
