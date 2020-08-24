import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRotatingCard,
MDBIcon, MDBBtn } from "mdbreact";

class FlippingCardPage extends Component {
state = {
  flipped2: false
}

handleFlipping = id => () => {
  const cardId = `flipped${id}`;
  this.setState({ [cardId]: !this.state[cardId] });
}

render() {
  return (
    <MDBContainer>
      <MDBRow between>
        <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
          <MDBRotatingCard flipped={this.state.flipped2} className="text-center h-100 w-100">
            <MDBCard className="face back text-center">
              <MDBCardBody>
                <MDBCardTitle className="text-ceter font-weight-bold my-4">Social shares
                  <MDBIcon icon="close rotate-btn text-muted" onClick={this.handleFlipping(2)} />
                </MDBCardTitle>
                <hr />
                <div>
                  <MDBRow center className="flex-wrap">
                    <MDBBtn tag="a" floating social="dribble">
                      <MDBIcon fab icon="dribbble" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating social="slack">
                      <MDBIcon fab icon="slack" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating social="ins">
                      <MDBIcon fab icon="instagram" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating social="pin">
                      <MDBIcon fab icon="pinterest" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating social="tw">
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating social="gplus">
                      <MDBIcon fab icon="google-plus-g" />
                    </MDBBtn>
                    <MDBBtn tag="a" floating social="git">
                      <MDBIcon fab icon="github" />
                    </MDBBtn>
                  </MDBRow>
                  <h5 className="font-weight-bold my-4">Join our community</h5>
                </div>
                <hr />
                <MDBRow center className="flex-wrap">
                  <MDBBtn tag="a" social="fb" className="px-4">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                  <MDBBtn tag="a" social="tw" className="px-4">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>
                  <MDBBtn tag="a" social="li" className="px-4">
                    <MDBIcon fab icon="linkedin-in" />
                  </MDBBtn>
                  <MDBBtn tag="a" social="ins" className="px-4">
                    <MDBIcon fab icon="instagram" />
                  </MDBBtn>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="face front">
              <MDBCardImage top src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" overlay="white-slight" hover
                waves alt="MDBCard image cap" />
              <MDBCardBody className="text-center">
                <MDBCardTitle tag="h4">MDBCard Title
                  <MDBIcon icon="share-alt text-dark float-right" onClick={this.handleFlipping(2)} />
                </MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <a href="#!" className="black-text">
                  <h6 onClick={this.handleFlipping}>
                    Read more
                    <MDBIcon icon="angle-double-right" />
                  </h6>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBRotatingCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default FlippingCardPage;

// import React, { Component } from 'react';

// class Game extends Component {
//     state = {front: true}
    
//     flipCard = () => {
//         this.setState({
//             front: !this.state.front
//         })
//     }
//     render() { 
//         return ( 
//         <div onClick={this.flipCard} id='card'>
//             {this.state.front ? 
//             <div className='card-side front-side'>
//                 <img src={this.props.gameObj.image} alt={this.props.gameObj.name}/>
//                 <br/>
//                 Game: {this.props.gameObj.name}
//                 <br/>
//             </div>
//             :
//             <div className='card-side back-side'>
//                 <br/>
//                 Game: {this.props.gameObj.name}
//                 <br/>
//                 Description: {this.props.gameObj.description}
//                 <br/>
//                 Price: {this.props.gameObj.price}
//             </div>
//             }

//         </div> 
//         );
//     }
// }
 
// export default Game;