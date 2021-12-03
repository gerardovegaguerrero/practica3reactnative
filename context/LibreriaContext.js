import React, { createContext, useState } from 'react';
import {  Text,View,StyleSheet,ToastAndroid,Button,StatusBar,Alert,} from 'react-native';
export const Context = createContext();

const Libreriaprovider = (props) => {
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [catalogo, setCatalogo] = useState([
   {codigo:1,titulo:"Programación", precio:100.50,idioma:'ESP', desactivado:false},
   {codigo:2,titulo:"Aprende Python", precio:80.00, idioma:'ESP',desactivado:false},     
   {codigo:3,titulo:"Precálculo", precio:90.50, idioma:'ESP',desactivado:false},
   {codigo:4,titulo:"Ingenieria De Software", precio:60.50, idioma:'ESP',desactivado:false},
   {codigo:5,titulo:"Ingenieria De Software 2", precio:200.00, idioma:'ESP',desactivado:false}
  ]);

  const agregarWish = (a) => {
    let temporal = catalogo;

    temporal = catalogo.filter((i) => i.codigo !== a.codigo);

    let propiedades = {
      codigo: a.codigo,
      titulo: a.titulo,
      precio: a.precio,
      idioma: a.idioma,
      desactivado: true,
    };

    let orden = temporal.concat(propiedades);

    setCatalogo(orden);

    setWishList((wishlist) => [...wishlist, propiedades]);
  };

  const eliminarWish = (a) => {
    let eliminado = wishList.filter((x) => x.codigo !== a.codigo);

    let temporal = catalogo.filter((x) => x.codigo !== a.codigo);

    let propiedad = {
      codigo: a.codigo,
      titulo: a.titulo,
      precio: a.precio,
      idioma: a.idioma,
      desactivado: false,
    };

    let orden = temporal.concat(propiedad);

    setCatalogo(orden);
    setWishList(eliminado);
  };

  const agregarCarro = (a) => {
    const buscado = carrito.find((x) => x.codigo === a.codigo);
    let temcarro = carrito;
    var objtemporal;

    if (buscado !== undefined) {
      objtemporal = {
        cantidad: buscado.cantidad + 1,
        codigo: a.codigo,
        titulo: a.titulo,
        precio: a.precio,
      };
      temcarro = carrito.filter((x) => x.codigo !== a.codigo);
    } else {
      objtemporal = {
        cantidad: 1,
        codigo: a.codigo,
        titulo: a.titulo,
        precio: a.precio,
      };
    }

    setCarrito([...temcarro, objtemporal]);
    setTotal(total + a.precio);
  };

  const eliminarcarro = (a, index) => {
    let temcarro;

    if (a.cantidad === 1) {
      temcarro = carrito.filter((a, i) => i !== index);
    } else {
      const objtemporal = {
        cantidad: a.cantidad - 1,
        codigo: a.codigo,
        titulo: a.titulo,
        precio: a.precio,
      };
      temcarro = carrito.filter((a, i) => i !== index);
      temcarro = [...temcarro, objtemporal];
    }

    setCarrito(temcarro);
    setTotal(total - a.precio);
  };

  const eliminaciontotal=() =>{
    setCarrito([]);
    setTotal(0);
  }
const contando=()=>{  
      const tempo = carrito.reduce((a,p)=>{return a+p.cantidad},0)
      if(tempo>99){
        return "+99"
      }else{
        return tempo
      }
  }
  return (
    <Context.Provider
      value={{
        catalogo,
        carrito,
        wishList,
        total,
        agregarWish,
        eliminarWish,
        agregarCarro,
        eliminarcarro,
        eliminaciontotal,
        contando
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default Libreriaprovider;
