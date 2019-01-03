import React, {Component} from 'react';
import ProductContainer from './ProductContainer.js';
import PropTypes from 'prop-types';

class ProductsComponents extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props
    }

    productMap() {
        if (this.props.productsData.length !== 0) {
            return this.props.productsData.map((item, i) => {
                let itemDisplay = i >= this.props.renderNum ? 'none' : 'inline-block';
                let key = null;
                for (let n = 0; n < item.title.length; n++) {
                    key = key + item.title.charCodeAt(n)
                }
                return <ProductContainer
                    key={key}
                    item={item}
                    itemDisplay={itemDisplay}
                />
            })
        }
        return null
    }

    render() {
        return (
            <div className={'productsContainer'}>
                {this.productMap()}
            </div>
        )
    }
}

ProductsComponents.propTypes = {
    productsData: PropTypes.array,
    renderNum: PropTypes.number
};

export default ProductsComponents