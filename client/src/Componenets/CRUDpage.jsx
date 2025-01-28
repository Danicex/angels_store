import React, { useEffect, useState } from 'react'
import { getData, postData, updateData, deleteData, getById } from '../data'

export default function CRUDpage() {
  const [openC, setOpenC] = useState(false)
  const [openE, setOpenE] = useState(false)
  //const [openC, setOpenC] = useState(false)
  const [productData, setProductData] = useState(getData);
  const [productId, setProductId] = useState('');
  const [productEdit, setProductEdit] = useState(getById(productId));
  const [inputs, setInputs] = useState({
    price: '',
    name: '',
    description: '',
    image_url: '',
    category: '',
  })

  const categories = ["Bags", "Shoes", "Clothes", "Cusmetics"];

  const handleStateChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  const handleStateUpdate = (e) => {
    const { name, value } = e.target;
    setProductEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const postProduct = () => {
    const formdata = {
      id: Date.now(),
      name: inputs.name,
      price: inputs.price,
      category: inputs.category,
      description: inputs.description,
      image_url: inputs.image_url,
    }
    postData(formdata)
    setProductData(getData)
    setInputs({
      price: '',
      name: '',
      description: '',
      image_url: '',
      category: '',
    })
  }


  const updateProduct = (id) => {
    setProductId(id)
    const updatedData = {
      id: Date.now(),
      name: productEdit.name,
      price: productEdit.price,
      category: productEdit.category,
      description: productEdit.description,
      image_url: productEdit.image_url,
    }

    updateData(id,  updatedData)
    setProductData(getData)
  }

  const deleteProduct = (id) => {
    deleteData(id)
    setProductData(getData)
  }

  return (
    <div>
      <header className='flex justify-between items-center my-3 w-full'>
        <h1>Admin dashboard</h1>
        <button onClick={() => setOpenC(true)}>create product</button>
      </header>
      {openC && (
        <div className="max-w-md mx-auto mt-10 bg-gray-50 p-6 rounded-md shadow-lg  absolute w-4/5 left-0 right-0">
          <p onClick={() => setOpenC(false)} className='float-end text-xl'>×</p>
          <h2 className="text-xl font-bold mb-4">Create a New Product</h2>
          <form onSubmit={postProduct} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name}
                onChange={handleStateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={inputs.price}
                onChange={handleStateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter price"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={inputs.description}
                onChange={handleStateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter description"
                rows="4"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                value={inputs.image_url}
                onChange={handleStateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={inputs.category}
                onChange={handleStateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Post
            </button>
          </form>
        </div>
      )}

      {openE && (
        <div className="max-w-md mx-auto mt-10 bg-gray-50 p-6 rounded-md shadow-lg  absolute w-4/5 left-0 right-0">
          <p onClick={() => setOpenE(false)} className='float-end text-xl'>×</p>
          <h2 className="text-xl font-bold mb-4">Create a New Product</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productEdit.name}
                onChange={handleStateUpdate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={productEdit.price}
                onChange={handleStateUpdate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter price"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={productEdit.description}
                onChange={handleStateUpdate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter description"
                rows="4"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                value={productEdit.image_url}
                onChange={handleStateUpdate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={productEdit.category}
                onChange={handleStateUpdate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => updateProduct(productId)}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Edit post
            </button>
          </form>
        </div>
      )}

      {productData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium">
              <tr>
                <th scope="col" className="px-6 py-4">product name</th>
                <th scope="col" className="px-6 py-4">product price</th>
                <th scope="col" className="px-6 py-4">Description</th>
                <th scope="col" className="px-6 py-4">category</th>
                <th scope="col" className="px-6 py-4">image</th>
                <th scope="col" className="px-6 py-4">edit</th>
                <th scope="col" className="px-6 py-4">delete</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{item.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{item.price}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.description}</td>
                  <td className="whitespace-nowrap px-6 py-4">{item.category}</td>
                  <td className="whitespace-nowrap px-6 py-4"><img src={item.image_url} alt='item image' className="l-image" /></td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <button className="px-2 py-1 bg-gray-700 text-white rounded-md" onClick={() => handleOpenEdit(item.id)}>Edit</button>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <button className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => deleteProduct(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">No items found</p>
      )}
    </div>
  )
}
