import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("userdetails");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('invalid email', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password required', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("login succesful");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/dashboard")
                }
            }
        }

    }

    return (
        <>
            <div >
                <section >
                    <div >
                        <h3>SIGN IN</h3>
                        <Form >

                            <Form.Group  controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group  controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button  onClick={addData}  type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                   
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login