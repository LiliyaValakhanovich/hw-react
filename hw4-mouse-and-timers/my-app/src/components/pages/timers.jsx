import { Timer1 } from '../timer1';
import { Timer2 } from '../timer2';
import { Timer3 } from '../timer3'

export function Timers ({count}){
  return (
    <>
    <button className='btn-timer'>SLOWER</button>
    <button className='btn-timer'>FASTER</button>
    <button className='btn-timer'>RESET</button>
    <Timer1 />
    <Timer2 />
    <Timer3 count={count} />
    </> 
  )
}