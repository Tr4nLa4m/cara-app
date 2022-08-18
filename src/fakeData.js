import { v4 as uuidv4 } from 'uuid';
const productsData = [
  {
    id: uuidv4(),
    image: "/images/products/f1.jpg",
    title: "Men's Fashion T Shirt F1",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f2.jpg",
    title: "Men's Fashion T Shirt F2",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f3.jpg",
    title: "Men's Fashion T Shirt F3",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f4.jpg",
    title: "Men's Fashion T Shirt F4",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f5.jpg",
    title: "Men's Fashion T Shirt F5",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f6.jpg",
    title: "Men's Fashion T Shirt F6",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f7.jpg",
    title: "Men's Fashion T Shirt F7",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/f8.jpg",
    title: "Men's Fashion T Shirt F8",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n1.jpg",
    title: "Men's Fashion T Shirt N1",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n2.jpg",
    title: "Men's Fashion T Shirt N2",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n3.jpg",
    title: "Men's Fashion T Shirt N3",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n4.jpg",
    title: "Men's Fashion T Shirt N4",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n5.jpg",
    title: "Men's Fashion T Shirt N5",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n6.jpg",
    title: "Men's Fashion T Shirt N6",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n7.jpg",
    title: "Men's Fashion T Shirt N7",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },
  {
    id: uuidv4(),
    image: "/images/products/n8.jpg",
    title: "Men's Fashion T Shirt N8",
    price: 139,
    branch: "adidas",
    description:
      "The ultra-flattering and equally effortless Jazzy Dress features a smocked bodice with intricate stitch detail ad statement sleeves ending in bow accented cuffs. Square neckline. Three-quarter puff sleeves. Self-tie cuffs. Side pockets. Fit-and-flare silhouette. Slipover style.",
    
  },

];

const cartsData = [
  {
    quantity: 1,
    product: productsData[1],
    size: "L",
  },
  {
    quantity: 2,
    product: productsData[2],
    size: "XL",
  },
  {
    quantity: 2,
    product: productsData[3],
    size: "XXL",
  },
]
export {productsData, cartsData };
