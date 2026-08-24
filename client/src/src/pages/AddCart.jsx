import React from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
} from "../store/cartSlice";

import "../components/addCart.css";

function AddCart({ closeCart }) {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        state => state.cart.items
    );

    // Total items
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Total price
    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <>

            {/* BACKDROP */}

            <div
                className="cart-backdrop"
                onClick={closeCart}
            ></div>


            {/* CART DRAWER */}

            <div
                className="cart-drawer"
                onClick={(e) => e.stopPropagation()}
            >

                {/* HEADER */}

                <div className="cart-header">

                    <h1>My Cart</h1>

                    <div className="cart-header-right">

                        {cartItems.length > 0 && (
                            <button
                                className="clear-cart"
                                onClick={() =>
                                    dispatch(clearCart())
                                }
                            >
                                Clear
                            </button>
                        )}

                        <button
                            className="close-cart"
                            onClick={closeCart}
                        >
                        </button>

                    </div>

                </div>


                {/* EMPTY CART */}

                {cartItems.length === 0 ? (

                    <div className="empty-cart">

                        <div className="empty-cart-icon">
                            🛒
                        </div>

                        <h2>
                            Your cart is empty
                        </h2>

                        <p>
                            Add some products to your cart
                            and they will appear here.
                        </p>

                    </div>

                ) : (

                    <>

                        {/* PRODUCTS */}

                        <div className="cart-products">

                            {cartItems.map((item) => (

                                <div
                                    className="cart-item"
                                    key={item._id}
                                >

                                    {/* IMAGE */}

                                    <div className="cart-image">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />

                                    </div>


                                    {/* DETAILS */}

                                    <div className="cart-details">

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <p className="cart-price">
                                            ₹{item.price}
                                        </p>


                                        {/* QUANTITY */}

                                        <div className="quantity-box">

                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        decreaseQuantity(
                                                            item._id
                                                        )
                                                    )
                                                }
                                            >
                                                −
                                            </button>

                                            <span>
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        increaseQuantity(
                                                            item._id
                                                        )
                                                    )
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>


                                    {/* ITEM TOTAL */}

                                    <div className="item-total">

                                        <strong>
                                            ₹
                                            {item.price *
                                                item.quantity}
                                        </strong>

                                        <button
                                            className="remove-btn"
                                            onClick={() =>
                                                dispatch(
                                                    removeFromCart(
                                                        item._id
                                                    )
                                                )
                                            }
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* SUMMARY */}

                        <div className="cart-summary">

                            <div className="summary-row">

                                <span>
                                    Items
                                </span>

                                <span>
                                    {totalItems}
                                </span>

                            </div>


                            <div className="summary-row">

                                <span>
                                    Subtotal
                                </span>

                                <span>
                                    ₹{totalPrice}
                                </span>

                            </div>


                            <div className="summary-row">

                                <span>
                                    Delivery
                                </span>

                                <span>
                                    Free
                                </span>

                            </div>


                            <hr />


                            <div className="summary-total">

                                <span>
                                    Total
                                </span>

                                <strong>
                                    ₹{totalPrice}
                                </strong>

                            </div>


                            <button className="checkout-btn">
                                Proceed to Checkout
                            </button>

                        </div>

                    </>

                )}

            </div>

        </>
    );
}

export default AddCart;