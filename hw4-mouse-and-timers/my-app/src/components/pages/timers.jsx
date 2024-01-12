import { Timer1 } from '../timer1';

export function Timers (){
  return (
    <>
    <button className='btn-timer'>SLOWER</button>
    <button className='btn-timer'>FASTER</button>
    <button className='btn-timer'>RESET</button>
    <Timer1 />
    </> 
  )
}