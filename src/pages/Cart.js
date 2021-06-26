import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  // if (isEmpty) return <h1>Your Cart is Empty</h1>;
  return (
    <section>
      <div>
        <div>
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
            <table>
              <tbody>
                {items.map((item, index) => {
                  <tr key={index}>
                    <td>
                      <img src={item.img} alt="" style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button onClick={() => removeItem(item.id)}>
                        remove
                      </button>
                    </td>
                  </tr>;
                })}
              </tbody>
            </table>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Cart;
