import React from "react";
import { products } from "../Constants/index";


const Cartitem = () =>{
    

    return(
       <aside className="w-11 h-full bg-inherit hover:in-range:left-7">
         <SelectItem/>
       </ aside>
    )
}

const SelectItem = () =>{
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
};

export default (Cartitem,SelectItem);