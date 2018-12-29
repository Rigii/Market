import React, {Component} from 'react';
import ProductContainer from './ProductContainer.js';

class ProductsComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainItemWidth: this.getComponentWidth(window.innerWidth, null)
        };
    }

    componentWillUpdate(nextProps){
        if (nextProps.renderNum !== this.props.renderNum){
            this.setState({
                mainItemWidth: this.getComponentWidth(window.innerWidth, nextProps.renderNum)
            })
        }
    }

    windowResize() {
        window.onresize = (() => {
            return this.setState({
                mainItemWidth: this.getComponentWidth(window.innerWidth, null)
            })
        });
    }

    getComponentWidth(innerWidth, nextProps) {
        let renderNum = nextProps !== null ? nextProps : this.props.renderNum;
        let canRender = (((innerWidth / 100) * 63) / 205).toFixed();
        return renderNum >= canRender ? 100 / canRender : 100 / renderNum;
    }

    productMap() {
        if (this.props.productsData.length !== 0) {
            return this.props.productsData.map((item, i) => {
                while (i < this.props.renderNum) {
                    let key = null;
                    for (let n = 0; n < item.title.length; n++) {
                        key = key + item.title.charCodeAt(n)
                    }
                    return <ProductContainer key={key} item={item} componentWidth={this.state.mainItemWidth}/>
                }
            })
        }
        return null
    }

    render() {
        console.log(this.props.productsData.length);
        this.windowResize();
        return (
            <div className={'productsContainer'}>
                {this.productMap()}
            </div>
        )
    }
}

export default ProductsComponents