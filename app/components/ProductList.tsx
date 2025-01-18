
"use client"
import React, { useEffect, useState } from 'react';
import Product from './Product';
import Sidebar from './Sidebar';
import { client } from '@/sanity/lib/client';
import Categary from './Categary';

interface ProductProps {
  productName: string;
  status: string;
  category: string;
  color: string;
  price: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        productName,
        status,
        category,
        "color": colors[0],
        price,
        "image": image.asset->url
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <><div className="flex flex-col md:flex-row px-4 md:px-8">
      <Sidebar setSelectedCategory={setSelectedCategory} />
      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} {...product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No products available in this category.
          </div>
        )}
      </main>
    </div><div>
        <Categary />
      </div></>
  );
};

export default ProductList;
