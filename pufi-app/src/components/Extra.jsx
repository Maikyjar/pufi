import React from "react";
import { connect } from "react-redux";
import * as actionsCreators from "../actions"
import { bindActionCreators } from 'redux';
import './Extra.css';
import { Icon } from '@iconify/react';

function Extra() {
    return(
        <div>
            <hr id="hr-extra"/>
            <div id="div-extra">
                <h1>Pufi<Icon icon="bi:r-circle" width="16" height="16" /></h1>
                <div>
                    <ul className="list-extra">
                        <li className="list-item">PUFI RAIN</li>
                        <li className="list-item">PUFI PUFF</li>
                        <li className="list-item">PUFI CART</li>
                        <li className="list-item">PUFI NAP</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-extra">
                        <li className="list-item">CONTACTO</li>
                        <li className="list-item">AYUDA</li>
                        <li className="list-item">CÓMO COMPRAR</li>
                        <li className="list-item">TERMINOS & CONDICIONES</li>
                    </ul>
                </div>
                <div className="list-extra">
                    <div>COMPRA 100% SEGURA</div>
                    <Icon icon="bi:qr-code" width="30" height="30" />
                    <Icon icon="ic:baseline-security" width="30" height="30" />COMPRÁ CON LA GARANTIA PUFI
                </div>
                <div className="list-extra">
                    SEGUINOS EN{' '}
                    <Icon icon="fa6-brands:facebook-f" width="20" height="20"/>{' '}
                    <Icon icon="akar-icons:twitter-fill" width="20" height="20"/>{' '}
                    <Icon icon="akar-icons:instagram-fill" width="20" height="20"/>{' '}
                </div>
            </div>
            <hr id="final-hr"/>
            <div id="final-div">
                <p>PUFI Copyringht 2017 - Todos los derechos reservados</p>
                <div id="final-logo">
                    <Icon icon="el:star-alt" color="red" />
                    BRANDLIVE
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
)(Extra);
