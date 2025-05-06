// menu.ts
export const menuList = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "our shop",
    link: "/bikes",
    children: [
      { name: "Mountain Bikes", category: "Mountain" },
      { name: "Road Bikes", category: "Road" },
      { name: "Electric Bikes", category: "Electric" },
      { name: "Kids Bikes", category: "Kids" },
      { name: "Accessories", category: "Accessories" },
    ],
  },
  {
    id: 3,
    name: "flash sale",
    link: "/flash-sale",
  },
  {
    id: 6,
    name: "about us",
    link: "/about",
  },
  { id: 4, name: "Services", link: "/service" },
  {
    id: 5,
    name: "Contact us",
    link: "/contact",
  },
];
