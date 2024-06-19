import React, { useEffect, useState } from 'react'

const ProductList = ({category}:{category: string}) => {
    const [product, setProduct] = useState<string[]>([]);

    useEffect(()=>{
        setProduct(["Clothings", "Groceries"]);
        console.log("Product Fetched in ", category)
    }, [category])
  return (
    <div>ProductList</div>
  )
}

export default ProductList