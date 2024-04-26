import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Checkout from "./components/Checkout";
import { Flip, ToastContainer, toast } from "react-toastify";

function App() {
  const modalRef = useRef();
  const checkoutRef = useRef();
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = cart.reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.amount);
    }, 0);
    if (newTotal < 0) {
      newTotal = 0;
    }
    setTotal(newTotal.toFixed(2));
  }, [cart]);

  useEffect(() => {
    const getMeals = async () => {
      const meals = await fetch("http://localhost:3000/meals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await meals.json();
      setMeals(data);
    };
    getMeals();
  }, []);

  const handlePost = (event) => {
    // form values can be handled here
    console.log(event);
  };

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleCheckout = () => {
    modalRef.current.close();
    checkoutRef.current.showModal();
  };

  const handleCart = (id) => {
    const selectedMeal = meals.find((meal) => meal.id === id);
    setCart((prevCart) => {
      const newCart = [...prevCart];

      const existingItem = newCart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.amount++;
      } else {
        newCart.push({
          id,
          name: selectedMeal.name,
          amount: 1,
          price: selectedMeal.price,
        });
      }
      toast.success("Added to cart succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });

      return newCart;
    });
  };

  return (
    <>
      <main>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Flip}
        />
        <header id="main-header">
          <h1 id="title">
            <img src="logo.jpg" alt="logo" />
            REACTFOOD
          </h1>
          <p className="text-button" onClick={handleModal}>
            {`Cart (${cart.length})`}
          </p>
        </header>
      </main>
      <section id="meals">
        {meals ? (
          meals.map((meal) => (
            <Card
              key={meal.id}
              name={meal.name}
              id={meal.id}
              price={meal.price}
              description={meal.description}
              image={meal.image}
              onClick={handleCart}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
      <Modal
        ref={modalRef}
        onCheckout={handleCheckout}
        cartItems={cart}
        setCart={setCart}
        total={total}
      />
      <Checkout ref={checkoutRef} handlePost={handlePost} />
    </>
  );
}

export default App;
