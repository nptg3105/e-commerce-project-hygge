import React from 'react'
import { useSelector } from 'react-redux'
import { cartTotalSelector } from './selector'

const CartFeature = () =>{
    const cartTolal = useSelector(cartTotalSelector)

    return(
        <div>Cart features</div>
        {cartTotalSelector}
    )
}

CartFeature.propTypes = {}

export default CartFeature
