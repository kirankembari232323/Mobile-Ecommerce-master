import React,{ Fragment, useEffect, useState }  from 'react';
import ProductList from "../../containers/ProductList/ProductList";
import { notUndefinedAndNull, empty } from '../../utils/Validation';
import {NavLink} from 'react-router-dom';

function Home (props) {
    let [message, setMessage] = useState(props.location.state ? props.location.state.successMessage : null);
    setTimeout(()=>{
        setMessage(null)
      },4000)
    function renderSuccessMsg(){
        if(!empty(message) && notUndefinedAndNull(message)){
          return(
            <div className="success-div">{message}</div>
          )
          }
      }

    return (
        <React.Fragment>
            <div className="logout-button">
                 <NavLink className="nav-link" to={"/login"}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</NavLink>
            </div>
            <div className="container" style={{paddingTop: '6rem'}} >
            
                {renderSuccessMsg()}
                <div className="row">
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
