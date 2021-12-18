import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "New Phone",
      description:
        "A brand new mobile phone has been arise in our shop for your",
      price: 250.0,
      image:"https://i.insider.com/5fe24476edf8920018093529?width=1136&format=jpeg",
    },
    {
      id: 2,
      title: "Mapping Accessory",
      description:
      "Sony DSCW800/B 20.1 MP Digital Camera (Black)",
      price: 220.0,
      image:
      "https://5.imimg.com/data5/JQ/VL/MY-9700383/sony-dsc-w800-20-1-mp-point-and-shoot-digital-camera-set-500x500.png",
    },
    {
      id: 3,
      title: "Sony Phone",
      description:
        "These Phone will keep you busy all throughout the entire lowdown and give you some great advise from famous people",
      price: 150.0,
      image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/sony1.jpg",
    },
    {
      id: 4,
      title: "Spay Camera",
      description:
        "Minox Digital Spy Camera",
      price: 135.0,
      image:
      "https://www.jamesbondlifestyle.com/sites/default/files/styles/full_width_image/public/images/product/sg006-minox-dsc-spy-camera-large.jpg?itok=UUnjICWk",
    },
    {
      id: 5,
      title: "phone Camera",
      description:
      "Cell Phone Camera Lens - TURATA 2 in 1 Professional HD Camera Lens Kit 0.45X Super Wide Angle & 12.5X Macro Lens for iPhone7 6s 6s plus 6 plus 5s & Most Smartphone, Tablet",
      price: 200.0,
      image:
      "https://ae01.alicdn.com/kf/Hd55f97795ac44ca883b54de9a44053c4B.jpg",
    },
    {
      id: 6,
      title: "DSLR Camera",
      description:
      "Kodak PIXPRO Friendly Zoom FZ43 16 MP Digital Camera with 4X Optical Zoom and 2.7\" LCD Screen (Black)",
      price: 150.0,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQWEErWLrjaY2x7db-jjxMGOEtahUtaLB9g&usqp=CAU",
    },
    {
      id: 7,
      title: "This is the COOLEST Cube Ever",
      description:
        "This cube will keep you busy the entire day and it is very fun to play with",
      price: 15.0,
      image:
        "https://cdn.dribbble.com/users/720738/screenshots/15175937/media/1476f102abe154f634744e0ab2992a2f.jpg?compress=1&resize=400x300",
    },
    {
      id: 8,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "http://cdn.home-designing.com/wp-content/uploads/2015/10/love-mugs-600x345.jpg",
    },
    {
      id: 9,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 130.0,
      image:
        "https://everydaypower.com/wp-content/uploads/2018/08/25-Best-self-help-books-for-personal-development-1000x600.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
