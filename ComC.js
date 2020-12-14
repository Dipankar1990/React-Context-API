import React  from 'react';
import {productContext, userContext} from '../App';

const ComC = () => {
    return ( 
        <>
         <userContext.Consumer>{(userContextValue)=>{
             return (
                 <>
                   <productContext.Consumer>
                       {(productContextValue)=>{
                         return(
                             <>
                                <h1>userName:{userContextValue.userName}</h1>
                                <h1>email:{userContextValue.email}</h1>
                                <h1>Product Name:{productContextValue.productName}</h1>
                                <h1>Product Price:{productContextValue.productPrice}</h1>
                             </>
                         )
                       }}
                   </productContext.Consumer>
                 </>
             )
         }}</userContext.Consumer>


        </>
     );
}
 
export default ComC;