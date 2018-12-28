import React, {Component} from 'react';
import ProductContainer from './ProductContainer.js'

class ProductsComponents extends Component {

    productMap(){
        if(this.props.productsData.lenght !== 0){
            return this.props.productsData.map((item, i) => {
                while (i < this.props.renderNum){
                let key = null;
                for (let n = 0; n < item.title.length; n++) {
                    key = key + item.title.charCodeAt(n)
                }
                return <ProductContainer key={key} item={item}/>
            } })}
        return null
    }

    render() {
        return(
            <div className={'productsContainer'}>
                {this.productMap()}
                </div>
        )
    }
}

export default ProductsComponents