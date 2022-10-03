import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { connect } from "react-redux";
import * as actionsCreators from "../actions"
import { bindActionCreators } from 'redux';
import './Banner.css';
import image12 from '../paraguas2.jpg'
import image13 from '../cart1.jpg'
import image14 from '../pufi7.jpg'
import image15 from '../pufi9.jpg'
import image16 from '../pufi10.jpg'
import image17 from '../pufi13.jpg'
import { Icon } from '@iconify/react';


function Banner() {
    const [state, handleSubmit] = useForm("mrgdkpjb");
    return(
        <div id="banner">
            <div id="title-principal">
                <div className="title-banner">INSTAGRAM</div>
                <div id="slogan-banner">#ESPUFI</div>
            </div>
            <div className="collage-container">
                <img className="collage-image-mini" src={image12} alt="collage"/>
                <img className="collage-image-mini" src={image13} alt="collage"/>
                <img className="collage-image-mini" src={image14} alt="collage"/>
                <img className="collage-image-mini" src={image15} alt="collage"/>
                <img className="collage-image-mini" src={image16} alt="collage"/>
                <img className="collage-image-mini" src={image17} alt="collage"/>
            </div>
            <div>
                <div className="title-banner">NEWSLETTER</div>
                <div id="suscribe-banner">SUSCRIBETE</div>
                <p id="p-banner">Y enterate de todas las novedades</p>
                {state.succeeded?
                    <p>Thanks for joining!</p>:
                    <form onSubmit={handleSubmit} id='form'>
                        <input 
                            id="input-suscribe"
                            type="email"
                            name='email'
                            placeholder="Ingresa tu email"
                        />
                        <button id="btn-submit" type="submit" disabled={state.submitting}><Icon icon="ant-design:arrow-right-outlined" width='20' height='20'/></button>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </form>
                }
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
)(Banner);