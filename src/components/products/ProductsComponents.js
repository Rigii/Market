import React, {Component} from 'react';
import ProductContainer from './ProductContainer.js';
import PropTypes from 'prop-types';

class ProductsComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnNum: this.getComponentWidth(null)
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState.columnNum !== this.state.columnNum
    }

    componentWillUpdate(nextProps) {
        if (nextProps.renderNum !== this.props.renderNum) {
            this.setState({
                columnNum: this.getComponentWidth(nextProps.renderNum)
            })
        }
    }

    windowResize() {
        window.onresize = (() => {
            return this.setState({
                columnNum: this.getComponentWidth(null)
            })
        });
    }

    getComponentWidth(nextProps) {
        let innerWidth = (window.innerWidth / 100) * 63;
        let renderNum = nextProps !== null ? nextProps : this.props.renderNum;
        let canRender = (innerWidth / 205).toFixed();
        return renderNum >= canRender ? canRender : renderNum;
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
        console.log(this.state.columnNum);
        this.windowResize();
        return (
            <div className={'productsContainer'} style={{gridTemplateColumns: 'repeat('+this.state.columnNum+', 1fr)'}}>
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