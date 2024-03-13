import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import './Update.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Update() {
  const[users, setUser]=useState([])
  const[name, setName]=useState("");
  const[address, setAddress]=useState("");
  const[email,setEmail]=useState("");
  const[rating, setRating]=useState("");
  const[userID, setUserID]=useState(null)

useEffect(()=>{
 getUsers();
}, [])
function getUsers()
{
  fetch("http://localhost:3000/Restaurant").then((result) =>{
    result.json().then((resp)=>{
      setUser(resp)
      setName(resp[0].name)
      setAddress(resp[0].address)
      setEmail(resp[0].email)
      setRating(resp[0].rating)
      setUserID(resp[0].id)
    })
  })
}

function selectUser(id)
{
  let item=users[id-1];
  setName(item.name);
  setAddress(item.address);
  setEmail(item.email);
  setRating(item.rating);
  setUserID(item.id)
}

function updateUser()
{
  let item={name, address, email, rating, userID}
  console.warn("item", item)
  fetch(`http://localhost:3000/Restaurant/${userID}`,
  {
    method:"PUT",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
  body:JSON.stringify(item)
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
      getUsers()
    })
  })
  alert("Data Successfully Updated ")
}

  return (
    
    <MDBContainer fluid>

      <div className="p-5 bg-image"></div>
   
      <MDBCard className='mx-5  p-5 shadow-5' style={{marginTop: '-170px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(100px)'}}>
       
      
        <MDBCardBody className=' text-center'>

          <h1 className="fw-bold mb-5">Update Info</h1>
          <div className='bgcolor'>
          <center>
        <div className='textbox'>
          <MDBInput wrapperClass='mb-4' placeholder='Name' id='formControlLg' type='name' size="lg" value={name}onChange={(e)=>{setName(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Address' id='formControlLg' type='address' size="lg" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Ratings' id='formControlLg' type='ratings' size="lg" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
                </div>
                </center>
                </div>
                <div >
                <Button variant="outline-light" onClick={updateUser}>Update</Button>
          </div>

        </MDBCardBody>

      </MDBCard>

    </MDBContainer>
  );
}

export default Update;
