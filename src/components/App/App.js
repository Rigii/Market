import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/PageActions.js';
import PropTypes from 'prop-types';
import './app.css';
import Footer from '../footer/Footer.js';
import ProductsComponents from '../products/ProductsComponents';
import Preloader from '../../media/gifs/EmbellishedPlayfulGarpike-small.gif'

class App extends Component {
    constructor() {
        super();
        this.loadMoreProducts = this.loadMoreProducts.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps !== this.props
    }

    loadMoreProducts(num) {
        let number = isNaN(num) ? 4 : num;
            this.props.getProductsData('http://localhost:8000/list.php?page=' + this.props.page + '&per_page=' + number);
    }

    componentWillMount() {
        this.loadMoreProducts(8)
    }

    render() {
        let moreButton = this.props.renderNum < this.props.totalProductsNum ?
            <p className="button" onClick={this.loadMoreProducts}>LOAD MORE</p> : null;
        let preloader =
            this.props.renderNum > this.props.products.length && this.props.products.length !== this.props.totalProductsNum ?
                <img src={Preloader} alt="preloader" className="preloader"/> : null;

        if (this.props.products.length !== 0) {
            return (
                <div id={'mainDiv'}>
                    <ProductsComponents productsData={this.props.products} renderNum={this.props.renderNum}/><br/>
                    {preloader}<br/>
                    {moreButton}<br/>
                    <Footer/>
                </div>
            )
        }
        return null
    }
}

App.propTypes = {
    products: PropTypes.array,
    totalProductsNum: PropTypes.number,
    getProductsData: PropTypes.func,
    page: PropTypes.number,
    renderNum: PropTypes.number

};

function mapDispatchToProps(dispatch) {
    return {
        getProductsData: bindActionCreators(actionCreators.getProductsData, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        products: state.productsInfo.products,
        currentRequestStatus: state.productsInfo.currentRequestStatus,
        totalProductsNum: state.productsInfo.totalProductsNum,
        page: state.productsInfo.page,
        renderNum: state.productsInfo.renderNum
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
