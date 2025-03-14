import React from "react";

const Card = ({ products, cartItems, setCartItems }) => {
  //Function to add an item to the cart
  const itemsInc = (index) => {
    if (!cartItems.some((ele) => ele === index)) {
      setCartItems([...cartItems, index]);
    }
  };

  //Function to remove an item from the cart
  const itemsDec = (index) => {
    setCartItems(cartItems.filter((ele) => ele !== index));
  };

  return (
    <>
      <div className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((element, index) => {
              return (
                <div className="col mb-5" key={index}>
                  <div className="card h-100">
                    {element.sale && (
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        Sale
                      </div>
                    )}
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{element.title}</h5>
                        {element.rating && (
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                          </div>
                        )}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "0.5rem",
                          }}
                        >
                          {element.oldprice && (
                            <span className="text-muted text-decoration-line-through">
                              {element.oldprice}
                            </span>
                          )}
                          <span>{element.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        {cartItems.includes(index) ? (
                          <button
                            className="btn btn-danger mt-auto"
                            onClick={() => itemsDec(index)}
                          >
                            Remove from cart
                          </button>
                        ) : (
                          <button
                            className="btn btn-success mt-auto"
                            onClick={() => itemsInc(index)}
                          >
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
