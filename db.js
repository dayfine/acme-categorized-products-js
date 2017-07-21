var PBC = {
  Groceries: [
    {name: "Apple", id:1, price: .75, rating: 3.5},
    {name: "Banana", id:2, price: .59, rating: 4.0},
    {name: "Juice", id:3, price: 3.50, rating: 3.1},
    {name: "Milk", id:4, price: 5.90, rating: 4.2},
    {name: "Pork Belly", id:5, price: 7.45, rating: 4.5}
    ],
  Movies: [
    {name: "War for the Planet of the Apes", id:1, price: , rating: },
    {name: "Doctor Strange", id:2, price: , rating: },
    {name: "Spider Man", id:3, price: , rating: },
    {name: "2001: A Space Odyssey", id:4, price: , rating: },
    {name: "Alien", id:5, price: , rating: }
    ],
  Gunplas: [
    {name: "MSZ-010 ZZ Gundam Ver.Ka (MG)", id:1, price: 39.99, rating: 5.0},
    {name: "RX-0 Unicorn Gundam (RG)'", id:2, price: 29.99, rating: 4.7},
    {name: "CO3 Malicious R.I.P.3M (Blue Magnolia)", id:3, price: 35.00, rating: 4.8},
    {name: "Shulawga Sin", id:4, price: 15.00, rating: 5.0 },
    {name: "L.E.D Mirage -10th Anniversary Limited Edition -", id:5, price: 24.50, rating: 4.7 }
    ],
  'Soft drink': [
    {name: "Diet Coke", id:1, price: .99, rating: 5.0},
    {name: "Pepsi", id:2, price: .99, rating: 4.0},
    {name: "Mountain Dew", id:3, price: .99, rating: 4.5},
    {name: "Iced Tea", id:4, price: .99, rating: 4.7},
    {name: "Sprite", id:5, price: .99, rating: 4.5}
    ]
}

function getCategoryNames () { return Object.keys(PBC) }

function getProductsByCategory (category) { return PBC[category] }

function createProduct (name, price, category) {
  //category must exist
  let
    id = PBC[category].reduce(function(max, prod){
    return (max > prod.id) ? max : prod.id
  },0),
    ret = {name: name, id:id, price:price, rating: 0}
  PBC[category].push(ret)
}

function deleteProduct (id, category) {
  PBC[category] = PBC[category].filter (p => p.id<>id)
  if (PBC[category].length === 0) delete PBC[category]
}

function updateProduct (id, price, rating, category) {
  let prod = PBC[category].find(x=>x.id = id)
  if (price) prod.price = price
  if (rating) prod.rating = rating
}

function deleteCategory (category) { delete PBC[category] }

function createCategory (category) {
  if (!PBC[category]) PBC[category] = []
}

module.exports = {
  getCategoryNames: getCategoryNames,
  getProductsByCategory: getProductsByCategory,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct,
  deleteCategory: deleteCategory,
  createCategory: createCategory
}
