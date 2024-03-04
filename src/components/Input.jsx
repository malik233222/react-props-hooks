import {useState} from 'react'


export default function Input({send}) {
    
    const[value,setValue]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        send(value);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='d-flex'>
            <input type="text" className='form-control' onKeyUp={(e)=>{setValue(e.target.value)}} />
            <button type='submit' className="btn btn-success"> Add</button>
        </form>
    </div>
  )
}
