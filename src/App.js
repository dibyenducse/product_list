import { useState } from "react";



function ProductTable() {
  const rows = [];
  let lastCategory = null;
  
  products.forEach((product) => {
    if (products.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow />

      )
    }
    rows.push(
      <ProductRow 
        product={product}
        key={product.name} />
    )
    lastCategory = product.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}


function Searchbar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {''} Only show products in stock
      </label>
    </form>
  )
}



function FilterableProductTable() {
  return (
    <div>
      <Searchbar />
      <ProductTable />
    </div>
  )
}



const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]



export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}
