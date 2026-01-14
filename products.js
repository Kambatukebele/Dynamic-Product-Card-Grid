const products = [
  // SHOES (10 products)
  {
    id: 1,
    title: "Air Max Running Shoes",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "men",
    inStock: true,
  },
  {
    id: 2,
    title: "Classic White Sneakers",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "women",
    inStock: true,
  },
  {
    id: 3,
    title: "Kids Sport Trainers",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "kids",
    inStock: true,
  },
  {
    id: 4,
    title: "Leather Boots Brown",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "men",
    inStock: false,
  },
  {
    id: 5,
    title: "High-Top Canvas Shoes",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "women",
    inStock: true,
  },
  {
    id: 6,
    title: "Running Shoes Pro",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "men",
    inStock: true,
  },
  {
    id: 7,
    title: "Ballet Flats Black",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "women",
    inStock: true,
  },
  {
    id: 8,
    title: "Kids Light-Up Sneakers",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "kids",
    inStock: true,
  },
  {
    id: 9,
    title: "Chelsea Boots Suede",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "men",
    inStock: true,
  },
  {
    id: 10,
    title: "Platform Sneakers White",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
    category: "shoes",
    gender: "women",
    inStock: false,
  },

  // APPAREL (10 products)
  {
    id: 11,
    title: "Classic Denim Jacket",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "men",
    inStock: true,
  },
  {
    id: 12,
    title: "Floral Summer Dress",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "women",
    inStock: true,
  },
  {
    id: 13,
    title: "Kids Graphic T-Shirt",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "kids",
    inStock: true,
  },
  {
    id: 14,
    title: "Leather Bomber Jacket",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "men",
    inStock: true,
  },
  {
    id: 15,
    title: "Knit Sweater Beige",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "women",
    inStock: false,
  },
  {
    id: 16,
    title: "Slim Fit Chinos",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "men",
    inStock: true,
  },
  {
    id: 17,
    title: "Silk Blouse White",
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "women",
    inStock: true,
  },
  {
    id: 18,
    title: "Kids Hoodie Blue",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "kids",
    inStock: true,
  },
  {
    id: 19,
    title: "Wool Coat Grey",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "men",
    inStock: true,
  },
  {
    id: 20,
    title: "Midi Skirt Pleated",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
    category: "apparel",
    gender: "women",
    inStock: true,
  },

  // ACCESSORIES (10 products)
  {
    id: 21,
    title: "Leather Belt Brown",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583f0?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "men",
    inStock: true,
  },
  {
    id: 22,
    title: "Gold Chain Necklace",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "women",
    inStock: true,
  },
  {
    id: 23,
    title: "Kids Backpack Unicorn",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "kids",
    inStock: true,
  },
  {
    id: 24,
    title: "Classic Watch Silver",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "men",
    inStock: false,
  },
  {
    id: 25,
    title: "Leather Handbag Black",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "women",
    inStock: true,
  },
  {
    id: 26,
    title: "Sunglasses Aviator",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "men",
    inStock: true,
  },
  {
    id: 27,
    title: "Silk Scarf Floral",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "women",
    inStock: true,
  },
  {
    id: 28,
    title: "Kids Baseball Cap",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "kids",
    inStock: true,
  },
  {
    id: 29,
    title: "Wallet Leather Bifold",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "men",
    inStock: true,
  },
  {
    id: 30,
    title: "Statement Earrings Gold",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    category: "accessories",
    gender: "women",
    inStock: false,
  },
];
