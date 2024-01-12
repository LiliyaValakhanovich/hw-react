import { useEffect, useState } from "react";

export function Timer2 (){
  const [count, setCount] = useState(0);
  const increment=()=>setCount(count+1);

  useEffect (()=>{
    setTimeout(function run () {
      increment();
      setTimeout(run, 2000);
    }, 2000)
  })

  return(
    <>
    <p>Timer 2</p>
    <div>{count}</div>
    </>
  )
}