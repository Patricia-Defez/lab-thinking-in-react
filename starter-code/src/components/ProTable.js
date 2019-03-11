import React from 'react';
import ProductRow from './ProductRow';

 const ProTable = (props) => {
    const products = props.products.data;
    console.log(products);

        return(

            <table>
            <tr>
                <th>Name</th> 
                <th>Price</th>
            </tr>
            <tbody> 
                {products.map((product, index) =>{
                    return <ProductRow key={index} {...product}/>
            })}
            </tbody>

            </table>
        )

}
export default ProTable