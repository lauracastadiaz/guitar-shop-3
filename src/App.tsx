import Header from "./components/Header";
import Guitar from "./components/Guitar";
import useCart from "./hooks/useCart"; // mi hook useCart


function App() {
  
  const {data, 
    cart, 
    addToCart,
    removeFromCart,
    decreaseQuantity, 
    increaseQuantity,
    clearCart,
    isEmpty, 
    cartTotal}  = useCart()
   

  
  // State
  // const [auth, setAuth] = useState(false);
  // const [total, setTotal] = useState(0)
  // const [cart, setCart] = useState([]);

  // Effect
  // useEffect(() => {
  //   console.log('componente listo')
  // },[auth])

 






  return (
    <>
    
  <Header 
  cart = {cart}
  removeFromCart = {removeFromCart}
  clearCart = {clearCart}
  increaseQuantity= {increaseQuantity}
  decreaseQuantity= {decreaseQuantity}
  isEmpty = {isEmpty}
  cartTotal = {cartTotal}
  />
 
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                 <Guitar 
                 key={guitar.id}
                 guitar={guitar}
                 addToCart = {addToCart}
                 />
              )
            )}
           
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarShop - Todos los derechos Reservados</p>
        </div>
    </footer>
      
    </>
  )
}

export default App;
