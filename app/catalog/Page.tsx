"use client"

import React, { useEffect, useRef, useState } from "react";
import { Product } from "@/types/products";
import Filters from "./Filter";
import Products from "../components/Products";
import { getProducts } from "@/sanity/lib/quires";

export default function Page() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const originalProducts = useRef<Product[]>([])
  useEffect(() => {
    getProducts().then(products => {
        setFilteredProducts(products)
        originalProducts.current = products
    })
  }, [])
  return (
    <div className="flex md:flex-row flex-col py-12 w-full">
      <div className="border-r md:w-[400px] w-full">
        <Filters products={originalProducts.current} setProducts={setFilteredProducts} />
      </div>
      <div className="space-y-2 md:p-20 p-12 w-full">
        <span className="font-bold text-red-500 text-sm">
          Showing {filteredProducts.length} results
        </span>
        <Products  />
      </div>
    </div>
  );
}