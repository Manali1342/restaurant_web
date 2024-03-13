import React, { Component } from 'react'
import './Create.css';
import {MDBBtn,MDBContainer,MDBCard,MDBCardBody,MDBCardImage,MDBRow,MDBCol,MDBIcon,MDBInput} from 'mdb-react-ui-kit';
import Addresto from './RestoImage.jpg';

export default class Create extends Component {
constructor()
{
  super();
  this.state={
    name: null,
    address: null,
    email: null,
    rating: null
  }
}

Create()
{
  fetch("http://localhost:3000/Restaurant",
  {
    method:"Post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(this.state)
  }
  ).then((resp)=>{
    resp.json().then((result)=>{
      alert("Restaurant Added Successfully")
    })
  }
  )
}

  render() {
    return (
      <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={Addresto} alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                
              <h1 class="react">Melbourne</h1>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Add Your Restaurant Here...</h5>

                <MDBInput wrapperClass='mb-4' placeholder='Name' id='formControlLg' type='name' size="lg" onChange={(e)=>{this.setState({name:e.target.value})}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Address' id='formControlLg' type='address' size="lg" onChange={(e)=>{this.setState({address:e.target.value})}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                <MDBInput wrapperClass='mb-4' placeholder='Ratings' id='formControlLg' type='ratings' size="lg" onChange={(e)=>{this.setState({rating:e.target.value})}}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={()=>{this.Create()}}>Add</MDBBtn>
             

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
     
    )
  }
}



