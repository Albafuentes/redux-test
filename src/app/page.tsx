'use client'
import { RootState,  } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state: RootState)=> state.contentReducer)

  const dispatch = useDispatch();

  return (
      <main>
        <p>{state.content}</p>
        <button onClick={() => dispatch({type:"INIT"})}>INIT</button>
        <button onClick={() => dispatch({type:"RUN"})}>RUN</button>
      </main>
  );
}