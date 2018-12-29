import React, {Component} from 'react';
import './ItemStyle.css'

class ProductContainer extends Component {

    render() {
      //  console.log(this.props.item.img);
        let isSale = this.props.item.discountCost !== null ? <p className="isSale">SALE</p> : null;
        let isNew = this.props.item.new ? <p className="isNew">NEW</p> : null;

        return (
        <div className="mainItem" style={{minWidth: this.props.componentWidth + '%'}}>
            <div className='itemCont'>
                <div className="imgCont">
                    <img className="itemImg" src={'http://localhost:8000/' + this.props.item.img}
                         alt={this.props.item.title}/>
                    {isSale}
                    {isNew}
                </div>
                <div className="itemDescription">
                    <p className="head"><b>{this.props.item.title}</b></p>
                    <p>{this.props.item.description}</p>
                </div>
                <div className="itemPrice">
                    <h3>{this.props.item.discountCost !== null ? '$' + this.props.item.discountCost : '$' + this.props.item.cost}</h3>
                    <h4>{this.props.item.discountCost !== null ? '$' + this.props.item.cost : null} </h4>
                </div>
                <div className="buttonCont">
                    <p className="itemBut addBut"><b>ADD TO CART</b></p>
                    <p className="itemBut" style={{color: 'grey', backgroundColor: 'lightgrey'}}>VIEW</p>
                </div>
            </div>
        </div>
        )
    }
}

export default ProductContainer