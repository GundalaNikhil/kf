import { selector } from "recoil";
import { cartState } from "./Atoms";

export const cartUpdatedList = selector({
  key: "cartItemListSelector",
  get: ({ get }) => get(cartState),

  set: ({ set }, newItem) => {
    // console.log(newItem);
    set(cartState, (prevItemList) => {
      const existingItem = prevItemList.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        return prevItemList.map((item) =>
          item.name === newItem.name ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItemList, { ...newItem, count: 1 }];
      }
    });
  },
});

export const removeCartList = selector({
  key: "removeCartItemListSelector",
  get: ({ get }) => get(cartState),

  set: ({ set }, newItem) => {
    // console.log(newItem);
    set(cartState, (prevItemList) => {
      const existingItem = prevItemList.find(
        (item) => item.name === newItem.name
      );

      //console.log(existingItem.count);

      if (existingItem && existingItem.count >= 1) {
        //console.log("hi");
        return prevItemList.map((item) =>
          item.name === newItem.name ? { ...item, count: item.count - 1 } : item
        );
      }
    });
  },
});

// export const getCartCount = (prodItem) =>
//   selector({
//     key: "getCartItemCount",
//     get: ({ get }) => {
//       const cartItems = get(cartState);

//       const count = cartItems.find((item) => item.name === prodItem.name);
//       //   console.log(prodItem);
//       return count || 0;
//     },
//   });
