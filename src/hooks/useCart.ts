import type { Guitar, CartItem } from '../types'

import { useEffect, useState, useMemo } from "react";
import { db } from "../data/db";

function useCart() {
  // VARIABLES
  const MAX_ITEMS = 10; //NUMERO MAXIMO DE CANTIDADES DE LOS ELEMENTOS QUE PUEDES INCREMENTAR EN EL CARRITO
  const MIN_ITEMS = 1; //NUMERO MINIMO DE CANTIDADES DE LOS ELEMENTOS QUE PUEDES DECREMENTAR EN EL CARRITO

  const initialCart = () : CartItem [] => {
    const localStorageCart = localStorage.getItem("cart"); //obtiene el carrito
    //comprobar si hay algo en la variable localStorageCart
    return localStorageCart ? JSON.parse(localStorageCart) : []; //json.parse se vuelve a poner de vuelta a un array porque estaba en string
  };

  // STATES
  const [data] = useState(db); //state para db
  const [cart, setCart] = useState(initialCart); //state para carrito de compras

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); //dos parámetros: nombre de lo que quieres almacenar y lo que deseas almacenar
  }, [cart]); //cada vez que cart cambie quiero ejecutar lo de arriba (guardar el localStorage)

  // FUNCIONES
  // Agregar elementos al carrito
  function addToCart(item : Guitar) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id); //compara el id del artículo que se busca con los ids de los productos ya en el carrito.
    if (itemExists >= 0) {
      //Si el artículo ya existe en el carrito: Si itemExists es mayor o igual a 0, significa que el artículo ya está en el carrito.
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const updatedCart = [...cart]; //tomo una copia para no modificar directamente el estado del carrito original (ya que es importante mantener la inmutabilidad).
      updatedCart[itemExists].quantity++; //Luego se incrementa la cantidad (quantity) del artículo que ya estaba en el carrito
      setCart(updatedCart); //lo modifico
    } else {//si no existe en el carrito
      const newItem : CartItem = {...item, quantity:1} //se establece la cantidad del artículo a 1 (item.quantity = 1), ya que es la primera vez que se agrega.
    
      setCart([...cart, newItem]); //Luego, el artículo se añade al carrito, lo que crea una nueva copia del carrito con el nuevo artículo añadido al final.
    }
  }

  // Eliminar elementos del carrito
  function removeFromCart(id: Guitar['id']) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  // Vaciar Carrito
  function clearCart() {
    setCart([]);
  }

  // incrementar elemento del carrito
  function increaseQuantity(id: Guitar['id']) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item, //devuelve el item entero como estaba para que no se modifique el estado entero sino solo esa cantidad
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  // decrementar elemento del carrito
  function decreaseQuantity(id: Guitar['id']) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  //States Derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
}

export default useCart;
