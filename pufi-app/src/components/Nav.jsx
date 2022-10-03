import React from "react";
import image1 from '../pufi4.png';
import image2 from '../w1.webp';
import image3 from '../pufi17.jpg';
import { connect } from "react-redux";
import * as actionsCreators from "../actions"
import { bindActionCreators } from 'redux';
import './Nav.css';
import { Icon } from '@iconify/react';

function Nav({number, plus }) {
    return(
        <div id="carousel">
            <div className="content">
                <div className="image" id='item1'>
                    <img src={image1} alt='landing1' className='image-carousel'/>
                </div>
            </div>
            <div className="content">
                <div className="image" id="item2">
                    <img src={image2} alt='landing2' className='image-carousel'/>
                </div>
            </div>
            <div className="content">
                <div className="image" id="item3">
                    <img src={image3} alt='landing3' className='image-carousel'/>
                </div>
            </div>
            <div id='page'>
                <div id="top-nav">
                    <h1 id='title'>Pufi
                    <Icon icon="bi:r-circle" width="16" height="16" /></h1>
                    <div id="button-nav">
                        <button className="button-top-nav"> 
                            <Icon icon="game-icons:sofa" />
                            <div>PUFI PUFF</div>
                        </button>
                        <button className="button-top-nav">
                            <Icon icon="bi:umbrella-fill" />
                            <div>PUFI RAIN</div>
                        </button>
                        <button className="button-top-nav">
                            <Icon icon="bi:cart-check-fill" />
                            <div>PUFI CART</div>
                        </button>
                        <button className="button-top-nav">
                            <Icon icon="bi:bag-check-fill" />
                            <div>PUFI NAP</div>
                        </button>
                    </div>
                    <div id="account-nav">
                        <select id="account-select">
                            <option className="option-nav" value="1">MI CUENTA</option>
                            <option className="option-nav" value="2">INICIAR CESION</option>
                            <option className="option-nav" value='3'>REGISTRARSE</option>
                        </select>
                        <button id="account">MI COMPRA</button>
                    </div>
                </div>
                <div id="slogan-div">
                    <h3 id='slogan'>
                        ESTÁR CÓMODO, NUNCA FUE TAN FACIL.
                    </h3>
                </div>
                <div id="shop-div">
                    <button className="button-shop">SHOP</button>
                </div>
                <div id="arrows">
                    <a href="#item1" className="point-nav">🔘</a>
                    <a href="#item2" className="point-nav">🔘</a>
                    <a href="#item3" className="point-nav">🔘</a>
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
)(Nav);