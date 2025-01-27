import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      
      {/* About Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-sm">
          We are a leading fashion e-commerce platform bringing you the latest styles and trends. Shop your favorites today!
        </p>
      </div>
      
      {/* Quick Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Shop</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Blog</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
        </ul>
      </div>
      
      {/* Customer Service Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
        <ul>
          <li><a href="#" className="text-sm hover:text-gray-400">FAQ</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Returns & Exchanges</a></li>
          <li><a href="#" className="text-sm hover:text-gray-400">Shipping Info</a></li>
        </ul>
      </div>
      
      {/* Social Media Links Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
      
    </div>
    
    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-12 pt-4 text-center">
      <p className="text-sm">© 2025 FashionStore. All rights reserved.</p>
    </div>
  </footer>
  )
}

