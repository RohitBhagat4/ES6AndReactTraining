import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errror = () => {


    const history = useNavigate();

  return (
    <>
            <div className='container'>
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                {}
                {}
                
                <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Sign Up Page</button>
            </div>

        </div>
    </>
  )
}

export default Errror