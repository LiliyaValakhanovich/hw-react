import {useState, useEffect} from 'react';

export function Mouse (){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleEvent=(e)=> setX(e.screenX);
  const changeY=(e)=>setY(e.screenY);

  useEffect(()=>{
    document.addEventListener('mousemove', handleEvent);
  })
  useEffect(()=>{
    document.addEventListener('mousemove', changeY);
  })

  return (
    <>
    <div className='horizontal'>X</div>
    <div className='coordinate-x' >{x}</div>
    <div className='vertical'>Y</div>
    <div className='coordinate-y'>{y}</div>
    </>
  )
}