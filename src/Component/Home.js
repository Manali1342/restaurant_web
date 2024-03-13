import React, { Component } from 'react'
import './Home.css';


import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default class Home extends Component {
  render() {
    return (
      <div>
       <div className='DivSec'>
        <div className='h1Tag'>
           <span className='meals'>Welcome to SaffronTwist..!</span>
        </div>

</div>
{/* <MDBFooter bgColor='dark' > */}

<MDBFooter className='footer'>
      <MDBContainer className='p-4'>
        <MDBRow>
<MDBCol >
<h1 class="text-2xl md:text-[2rem] ">SaffronTwist</h1><br></br><br></br>

            <h2 className='font2'>
            We are sharing the most<br></br> creative, effective, kick-ass<br></br> insights from industry heroes<br></br>
             taking on their restaurant's<br></br> greatest challenges.We pride<br></br>ourselves in following the<br></br> traditional foods.

             </h2>

          </MDBCol>


          <MDBCol  >
            <h1 className='headings'>Our Facilites</h1><br></br><br></br>
            <h5 className='font'>

              Indian Menu <br></br><br></br>
              Menu Item <br></br><br></br>

             Private Event <br></br><br></br>
             Best Offers <br></br><br></br>
             Special Offers
             </h5>

          </MDBCol>

          <MDBCol  >
            <h1 className='headings1' >Address Info</h1><br></br><br></br>

            <p>
              <h5 className='font1'>
              Phone: +91 9067874812
              <br></br><br></br>
              Email: SaffronTwist.com
              <br></br><br></br>

              Pincode: 416115
              <br></br><br></br>
              Location: Rajarampuri 11th Lane,
              <br></br>
              <span className='span1'>Kolhapur</span>



              </h5>
            </p>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div>

      </div>

    </MDBFooter>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: <span></span> SaffronTwist.com

      </div>
    </MDBFooter>

      </div>

    )
  }
}
