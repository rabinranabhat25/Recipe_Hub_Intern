import React, { useState } from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      image: null
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Fields */}
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <input
          type="number"
          placeholder="Price ($)"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
          required
        />

        <textarea
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          rows="4"
          className="w-full p-2 border rounded-md"
          required
        />

        
       

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-md"
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-xs h-auto rounded-md shadow-sm"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto py-8">
        <AddProductForm onAddProduct={handleAddProduct} />

        {/* Display Products with Improved UI */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex m-4">
              <div className="w-56 rounded-md shadow-lg overflow-hidden">
                {product.image && (
                  <img
                    src={URL.createObjectURL(product.image)}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}

                <div className="p-4 bg-white flex flex-wrap">
                  <h1 className="mt-2 font-bold text-2xl">{product.name}</h1>
                  <span className="text-sm font-semibold bg-red-400 text-white py-1 px-3 rounded-full">
                    ${product.price}
                  </span>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
