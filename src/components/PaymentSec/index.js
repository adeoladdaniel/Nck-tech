import React from "react";
import {Row, Col,Container} from "react-bootstrap";

function PaymentSec() {
  return (
    <React.Fragment>
        
               
           <div className="hrr">  <hr/> </div>
             <Container> 
        <Row style={{marginBottom:"-1rem"}}>
            <Col md={6}>
            <div className="text-move">
                <h4>Payment Information</h4>  
                <span>Choose your method of payment.</span>
                
            </div>

            <div className="mastercard">
                <div>
                    <span>CARD NUMBER</span><br/><br/>

                    <p> 4 3 2 4 &nbsp;&nbsp; 5 4 3 3 &nbsp;&nbsp; 9 3 8 2 &nbsp;&nbsp; 1 0 3 0</p>

                    <img className="palet" src="./asset/img/palet.png" alt="pelt"/>

                    <span className="exp">EXPIRATION DATE<br/><br/>

                        03/24<br/><br/>

                        John Doe
                    </span>
                    <img src="./asset/img/Mastercard.png" className="master" alt="master"/>
                </div>

            </div>
            </Col>
            <Col md={6}>
                <div className="card-info">
                <div className="img-sec">
                        <img src="./asset/img/paypal.png" alt="paypal" className="pay"/>
                        <img src="./asset/img/discover.png" alt="discover"/>
                        <img src="./asset/img/visa.png"  alt="visa"/>
                </div>

            <div className="card-details">
             
               <Row>
                   <Col md={6} sm={6} xs={6}>

                 <div>  <span>Credit card number</span></div>
                    <input placeholder="4324   5433   9382   1030"/>
                   </Col>

                   <Col md={6} sm={6} xs={6}>
                       
                   <div> <span className="s-span">Expiration date</span></div>
                    <input placeholder="03/24" className="s-input"/><br/><br/><br/>
                   </Col>
</Row>
<Row>
                     <Col md={6} sm={6} xs={6}>

                 <div>  <span>Security Code</span></div>
                    <input placeholder="420"/>
                   </Col>

                   <Col md={6} sm={6} xs={6}>
                       
                   <div> <span className="s-span">Postal Code</span></div>
                    <input placeholder="10119" className="s-input"/>
                   </Col>
                   </Row>
                   <Row>
                       <Col md={12}>
                    <div>
                   <label class="rcontainer">
                    <input type="radio" checked="checked" name="radio"/>
                    <span class="checkmark"></span>
                    </label> <br/>
                    <span className="use">Use the card for the time purchase</span><br/>
                    </div>
                    <button className="ripple">Add Card</button>
                    </Col>
                   

               </Row>

               

              




            </div>

            </div>

     

            </Col>
        </Row>
      

            


           
        </Container> 

        <div className="hrrr">  <hr/> </div>

        <Container>

        <div className="subtotal">
            <span>Subtotal <b>₦2,497.00</b></span>
            <br/><br/>
            <span>Estimated TAX <b>₦119.64</b></span>
            <br/><br/>
            <span>Promotional Code <b>₦-60.00</b></span>

        </div>
        </Container>
        <div className="hrrr">  <hr/> </div>
        <Container>

            <div className="complete">
                <button className="rippler">
                    Complete Payment
                </button>
                <span> TOTAL: ₦2,497.00 </span>
            </div>
        </Container>

        


    </React.Fragment>
  );
}
export default PaymentSec;