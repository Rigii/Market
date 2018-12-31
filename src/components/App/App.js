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
        this.state = {
            page: 1,
            renderNum: 4
        };

        this.loadMoreProducts = this.loadMoreProducts.bind(this);
        this.setProdRenderNum = this.setProdRenderNum.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }

    setProdRenderNum() {
        this.loadMoreProducts(4, 1);
        this.setState(prevState => ({
            renderNum: prevState.renderNum + 4
        }))
    }

    loadMoreProducts(num, newPage) {
        this.props.getProductsData('http://localhost:8000/list.php?page=' + this.state.page + '&per_page=' + num);
        if (this.props.currentRequestStatus) {
            this.setState(prevState => ({
                page: prevState.page + newPage
            }))
        }
    }

    componentWillMount() {
        this.loadMoreProducts(8, 2)
    }

    render() {
        let moreButton = this.state.renderNum < this.props.totalProductsNum ? //!==
            <p className="button" onClick={this.setProdRenderNum}>LOAD MORE</p> : null;
        let preloader =
            this.state.renderNum > this.props.products.length && this.props.products.length !== this.props.totalProductsNum ?
                <img src={Preloader} alt="preloader" style={{borderRadius: '50%', height: '200px'}}/> : null;

        if (this.props.products.length !== 0) {
            return (
                <div id={'mainDiv'}>
                    <ProductsComponents productsData={this.props.products} renderNum={this.state.renderNum}/><br/>
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
    currentRequestStatus: PropTypes.bool,
    totalProductsNum: PropTypes.number,
    getProductsData: PropTypes.func
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
        totalProductsNum: state.productsInfo.totalProductsNum
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
