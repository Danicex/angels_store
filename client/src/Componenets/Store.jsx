import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

export default function Store() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('all');
    const [check, setCheck] = useState(false)
    const [checkData, setCheckData] = useState(false)
    const [categoryData, setCategoryData] = useState([]);
    const navigate = useNavigate()
    const apikey = '$2a$10$2il3DGXIXvS1n1wZzFKLNeEToE0I7pR1y3GtQtpouYGcy98zN2qDO';
    const binId = '679a0001e41b4d34e4809478';
    const BASE_URL = `https://api.jsonbin.io/v3/b/${binId}`;
    const headers = {
        'Content-Type': 'application/json',
        'X-Master-Key': apikey,
    };
const getData = ()=>{
    axios.get(BASE_URL, { headers })
            .then(res => {
                const x = res.data.record;
                setData(Array.isArray(x.product) ? x.product : []); // Update state with fetched data
                console.log('Data has been fetched:', x); // Log the fetched data
            })
            .catch(err => {
                console.error('Error fetching data:', err); // Log the error
            });
}
    useEffect(() => {
       getData() 
    }, []);

    const selectCategory = (category) => {
        setCategory(category)
        const x = data.filter(item => item.category === category)
        setCategoryData(x)
    }

    const handleCheckout = (id)=>{
        setCheck(true)
        const x = data.filter(item=>item.id === id)
        setCheckData(x)
    }
    const closeCheckout =()=>{
        setCheck(false)
        setCheckData([])
    }
    return (
        <div className='store-container relative '>

            <div className='w-4/5 max-sm:w-full m-auto relative px-4'>
                <header className='flex justify-between  w-full items-center mt-5'>
                    <div className="logo-txt text-xl font-bold">Angels place</div>

                </header>

                <Banner />
                <div className="category">

                    <ul className='flex gap-4'>
                        <li
                            onClick={() => selectCategory('all')}
                            style={{ background: category === 'all' ? '#d8d8d8' : 'none' }}
                            className='px-2   rounded-md'
                        >
                            All
                        </li>
                        <li
                            onClick={() => selectCategory('bags')}
                            style={{ background: category === 'bags' ? '#d8d8d8' : 'none' }}
                            className='px-2   rounded-md'
                        >
                            Bags
                        </li>
                        <li
                            onClick={() => selectCategory('clothes')}
                            style={{ background: category === 'clothes' ? '#d8d8d8' : 'none' }}
                            className='px-2   rounded-md'
                        >
                            Clothes
                        </li>
                        <li
                            onClick={() => selectCategory('shoes')}
                            style={{ background: category === 'shoes' ? '#d8d8d8' : 'none' }}
                            className='px-2   rounded-md'
                        >
                            Shoes
                        </li>
                        <li
                            onClick={() => selectCategory('cosmetics')}
                            style={{ background: category === 'cosmetics' ? '#d8d8d8' : 'none' }}
                            className='px-2   rounded-md'
                        >
                            Cosmetics
                        </li>

                    </ul>
                </div>
{check  && (
    <div className='absolute max-sm:w-4/5 w-2/4 left-0 right-0 m-auto top-5 z-20 all rounded-lg shadow-md p-6'>
        <p onClick={closeCheckout} className='text-2xl float-end mb-2'>×</p>
<CheckoutPage items={checkData}/>
    </div>
)}
                {categoryData.length > 0 ? (
                    <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                        {categoryData.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-sm:w-4/5 max-sm:m-auto" onClick={()=>handleCheckout(product.id)}>
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="w-full h-48 object-cover max-sm:h-auto "
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <p className="text-lg font-bold text-blue-600">${product.price}</p>
                                    <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="product-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
                        {data.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-sm:w-4/5 max-sm:m-auto"
                            onClick={()=>handleCheckout(product.id)}>
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="w-full h-48 object-cover max-sm:h-auto "
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <p className="text-lg font-bold text-blue-600">${product.price}</p>
                                    <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
            <div className='fotter-2'>
                <Footer />
            </div>
        </div>
    )
}
