import React from 'react'

export default function CheckoutPage({items}) {
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
   
      
            <div className="">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center border-b border-gray-200 py-4">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 sm:ml-4 mt-4 sm:mt-0">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-lg font-bold text-blue-600 sm:ml-auto mt-4 sm:mt-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
           <h2 className="text-xl font-semibold mb-6">Order Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">$5.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${(totalPrice + 5 + totalPrice * 0.1).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-md mt-6 hover:bg-blue-600 transition-colors duration-300">
              Place Order
            </button>
          
        </div>
    );
  
}
