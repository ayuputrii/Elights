import create from 'zustand';

const useStore = create(set => ({
  cart: [],
  addItem: cart => set(state => ({cart: [...state.cart, cart]})),
  removeItem: cart =>
    set(state => ({cart: state.cart.filter(r => r.id !== cart.id)})),
}));

export default useStore;
