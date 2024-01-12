import { useEffect, useState } from "react";

export function Timer1 (){
  const [count, setCount] = useState(0);
  const increment=()=>setCount(count=>count+1);

  useEffect (()=>{
    setTimeout(function run () {
      increment();
      setTimeout(run, 1000);
    }, 1000)
  })

  return(
    <>
    <p>Timer 1</p>
    <div>{count}</div>
    </>
  )
}