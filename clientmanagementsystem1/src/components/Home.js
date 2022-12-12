import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: "" 
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        const { value, name } = e.target;
       


    setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = inpval;

        if (name === "") {
            toast.error(' name required!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email required',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('invalid mail',{
                position: "top-center",
            });
        } 
         else if (password === "") {
             toast.error('password required',{
                position: "top-center",
            });
        }  
        else {
            history("/login")
            localStorage.setItem("userdetails",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section >
                    <div  style={{ width: "100%" }}>
                        <h3 >Please Sign up</h3>
                        <Form >
                            <Form.Group  controlId="formBasicName">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Client Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Please enter your email for signin" />
                            </Form.Group>

                            <Form.Group  controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button onClick={addData} type="submit">
                                Register
                            </Button>
                        </Form>
                        <p >If current user Please <span> <NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home