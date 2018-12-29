import React, {Component} from 'react';
import ProductContainer from './ProductContainer.js'

class ProductsComponents extends Component {

    getComponentWidth() {
        let canRender = (((window.innerWidth/100)*83) / 205).toFixed();
        console.log(canRender);
       return this.props.renderNum >= canRender ? 100 / canRender : 100 / this.props.renderNum;
    }

    productMap() {
        if (this.props.productsData.lenght !== 0) {

            return this.props.productsData.map((item, i) => {
                while (i < this.props.renderNum) {
                    let key = null;
                    for (let n = 0; n < item.title.length; n++) {
                        key = key + item.title.charCodeAt(n)
                    }
                    return <ProductContainer key={key} item={item} componentWidth={this.getComponentWidth()}/>
                }
            })
        }
        return null
    }

    render() {
        console.log(window.innerWidth);
        return (
            <div className={'productsContainer'}>
                {this.productMap()}
            </div>
        )
    }
}

export default ProductsComponents