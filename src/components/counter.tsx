import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [draftCount, setDraftCount] = useState(count);

  //this useEffect will update the draft count when the regular count changes
  useEffect(()=>{
    setDraftCount(count);
  }, [count]);

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since Ya Last Messed Up</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick = {()=> setCount(count => count - 1)}>➖ Decrement</button>
        <button onClick = {()=> setCount(count => count = 0)}>🔁 Reset</button>
        <button onClick = {()=> setCount(count => count + 1)}>➕ Increment</button>
      </div>
      <div>
        <form 
        onSubmit={(e) => {
          e.preventDefault();
          setCount(draftCount)
        }}
        >
          <input 
          type="number" 
          value={draftCount} 
          onChange={(e)=> setDraftCount(e.target.valueAsNumber)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
