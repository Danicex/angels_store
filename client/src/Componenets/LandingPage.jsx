import React from 'react'
import Footer from './Footer'

export default function LandingPage() {
    return (
      <div className="min-h-screen ">
        {/* Navigation */}
        <div className='first-section '>

        <nav className="flex justify-between items-center px-8 py-4 w-4/5 m-auto max-sm:w-full max-sm:mx-2">
          <div className="logo-txt text-xl font-bold">Angels place</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600">
              MEN
            </a>
            <a href="#" className="text-gray-600">
              WOMEN
            </a>
            <a href="#" className="text-gray-600">
              KIDS
            </a>
            <a href="#" className="text-gray-600">
              COLLECTION
            </a>
            <a href="#" className="text-gray-600">
              TRENDS
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2">🛒</button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section className=" flex items-center justify-between px-8 py-16 w-4/5 m-auto max-sm:w-full max-sm:mx-2">
          <div className="max-w-xl">
            <h1 className="special-font1 text-5xl font-serif mb-4">Find The Best Fashion Style For You</h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum is simply dummy text & commonly used in the graphic, print & publishing industries for
              previewing layouts.
            </p>
            <button className="px-8 py-3 bg-black text-white">SHOP NOW</button>
          </div>
          <div className="hidden md:block w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250127-135551_Gallery.jpg-b7e2wVcAgVfrG9lAlaCKzx0kJcF821.jpeg"
              alt="Fashion model"
              className="rounded-3xl"
            />
          </div>
        </section>
        </div>
  
        {/* New Collection */}
        <section className="px-8 py-16">
          <h2 className="text-4xl font-serif text-center mb-4">New Collection</h2>
          <p className="text-gray-600 text-center mb-8">
            Lorem ipsum is simply dummy text & commonly used in the graphic, print & publishing industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Collection item ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
  
        {/* Best Fashion Since 2014 */}
        <section className="px-8 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Fashion model in business attire"
              className="rounded-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif mb-4">Best Fashion Since 2014</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <div className="flex justify-between">
              <div>
                <div className="text-2xl font-bold">2014</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5900+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3105+</div>
                <div className="text-gray-600">Users</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Best Seller Products */}
        <section className="px-8 py-16 bg-[#1a1a1a] text-white">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-serif">Best Seller Product</h2>
            <button className="px-6 py-2 border border-white rounded">SEE MORE</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl p-4 text-black">
                <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=400`}
                    alt={`Product ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex text-yellow-400 mb-2">{"★".repeat(5)}</div>
                <h3 className="font-semibold mb-1">Product Name Here</h3>
                <p className="text-gray-600">$299</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3].map((dot) => (
              <button
                key={dot}
                className={`w-2 h-2 rounded-full ${dot === 1 ? "bg-white" : "bg-gray-600"}`}
                aria-label={`Go to slide ${dot}`}
              />
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
  
  
