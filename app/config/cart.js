import { useState } from 'react'
import { AsyncStorage } from 'react-native'


export const getCartItems = (setCart) => {
    AsyncStorage.getItem('cartItems')
    .then((storedValue) => {
      if (storedValue) {
        setCart(JSON.parse(storedValue))
      }
    })
    .catch((error) => {
      console.log('Error retrieving cart value:', error);
    });
}

export const setCartItems = (newValue) => {
    AsyncStorage.setItem('cartItems', JSON.stringify(newValue))
    .catch((error) => {
      console.log('Error storing value:', error);
    });
    
}

export const addCartItem = (item) => {

}
export const removeCartItem = (item) => {
    
}