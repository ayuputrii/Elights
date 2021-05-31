import create from 'zustand';

const useStore = create(set => ({
  cart: [],
  userProfile: {
    id: '799016',
    name: 'Ayu Armadani',
    email: 'ayu.putri@gmail.com',
    phone: '085722267471',
    address: [
      {
        label: 'Home',
        detail: 'Jl. Mawar no.112 RT.07/05',
      },
    ],
  },
  editProfile: profile =>
    set(state => ({
      userProfile: {
        ...state.userProfile,
        ...profile,
      },
    })),
  clearCart: () => set(state => ({cart: []})),
  increment: cart =>
    set(state => {
      let clone = [...state.cart];
      const index = clone.map(r => r.id).indexOf(cart.id);
      clone[index].count = clone[index].count + 1;
      return {
        cart: clone,
      };
    }),
  decrement: cart =>
    set(state => {
      let clone = [...state.cart];
      const index = clone.map(r => r.id).indexOf(cart.id);
      if (clone[index].count > 1) {
        clone[index].count = clone[index].count - 1;
      }
      return {
        cart: clone,
      };
    }),
  addItem: cart =>
    set(state => {
      const ids = state.cart.map(r => r.id);
      if (ids.includes(cart.id)) {
        const index = ids.indexOf(cart.id);
        let clone = [...state.cart];
        clone[index].count = clone[index].count + 1;
        return {
          cart: clone,
        };
      } else {
        return {
          cart: [
            ...state.cart,
            {
              ...cart,
              count: 1,
            },
          ],
        };
      }
    }),
  removeItem: cart =>
    set(state => ({cart: state.cart.filter(r => r.id !== cart.id)})),
}));

export default useStore;
