import ItemSummary from "./ItemSummary"

const Cart = ({ cart, setCart }) => {
    
    function fakeBuyNow() {
        alert('Thanks for visiting!')
    }

    let total = parseFloat(cart.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)).toFixed(2)
    return (
        <section>
            <h2>Your Cart</h2>
            {cart.length > 0 ? cart.map((item, i) => {
                return <ItemSummary 
                            key={i}
                            item={item}
                            cart={cart}
                            setCart={setCart}
                        />
            }) : "You have no items in your cart"}
            <h2>Total: {total}</h2>
            <button onClick={(e) => fakeBuyNow()}>Buy Now</button>
        </section>
        
    )
}

export default Cart