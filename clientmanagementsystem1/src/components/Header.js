import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const [logindata, setLoginData] = useState([]);


  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);


      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000)
      }
    }
  }

  const userlogout = () => {
    localStorage.removeItem("user_login")
    history("/");
  }

  useEffect(() => {
    Birthday();
  }, [])


  return (
    <>
      
        <Container>
          <Navbar.Brand>Yash Client Management System</Navbar.Brand>
          </Container>
        <Button onClick={userlogout}>Logout</Button>
    
    </>
  )
}

export default Header;