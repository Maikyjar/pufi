import React from "react";
import image4 from '../w2.webp';
import image5 from '../sombrilla2.jpg';
import image6 from '../cart2.jpg';
import image7 from '../pufinap2.jpg';
import image8 from '../paraguas.png';
import image9 from '../pufinap.jpg';
import image10 from '../pufi3.jpg';
import image11 from '../cart.webp'
import { connect } from "react-redux";
import * as actionsCreators from "../actions"
import { bindActionCreators } from 'redux';
import './Cards.css';

function Cards() {
    return(
        <div>
            <div className="cards">
                <img className="image-card" src={image5} alt="umbrella-card" />
                <div className="container-shop-card-right">
                    <button className="button-shop">SHOP</button>
                </div>
                <div className="information-card">
                    <img className="image-mini-card" src={image8} alt="umbrella-mini" />
                    <h1 className="title-card">Pufi RAIN</h1>
                    <hr className="hr-card"/>
                    <h3 className="slogan-card">Descripción del producto. Este es un texto similado</h3>
                    <button className="button-card">{'>'} VER MAS </button>
                </div>
            </div>
            <div className="cards">
                <div className="information-card">
                    <img className="image-mini-card" src={image10} alt="pufi-mini" />
                    <h1 className="title-card">Pufi PUFF</h1>
                    <hr className="hr-card"/>
                    <h3 className="slogan-card">Descripción del producto. Este es un texto similado</h3>
                    <button className="button-card">{'>'} VER MAS </button>
                </div>
                <img className="image-card" src={image4} alt="pufi-card" />
                <div className="container-shop-card-left">
                    <button className="button-shop">SHOP</button>
                </div>
            </div>
            <div className="cards">
                <img className="image-card" src={image6} alt="cart-card" />
                <div className="container-shop-card-right">
                    <button className="button-shop">SHOP</button>
                </div>
                <div className="information-card">
                    <img className="image-mini-card" src={image11} alt="cart-mini" />
                    <h1 className="title-card">Pufi CART</h1>
                    <hr className="hr-card"/>
                    <h3 className="slogan-card">Descripción del producto. Este es un texto similado</h3>
                    <button className="button-card">{'>'} VER MAS </button>
                </div>
            </div>
            <div className="cards">
                <div className="information-card">
                    <img className="image-mini-card" src={image9} alt="umbrella-mini" />
                    <h1 className="title-card">Pufi NAP</h1>
                    <hr className="hr-card"/>
                    <h3 className="slogan-card">Descripción del producto. Este es un texto similado</h3>
                    <button className="button-card">{'>'} VER MAS </button>
                </div>
                <img className="image-card" src={image7} alt="umbrella-card" />
                <div className="container-shop-card-left">
                    <button className="button-shop">SHOP</button>
                </div>
            </div>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
      number: state.initial,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);