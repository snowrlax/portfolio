import React from 'react'

const Navbar = () => {
  return (
    <div className="absolute z-30 m-auto top-0 left-0 right-0 w-full max-w-6xl">
      <div className="container mx-auto flex flex-wrap py-12 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0">
          <svg className='h-16 w-16' viewBox="0 0 61 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clippath="url(#clip0_313_12)">
              <g clippath="url(#clip1_313_12)">
                <g clippath="url(#clip2_313_12)">
                  <path d="M59.3819 44.51H57.327H55.2722C54.8507 44.51 54.4819 44.1412 54.4819 43.7197V41.6649V39.6101C54.4819 39.1359 54.8507 38.7671 55.2722 38.7671H57.327H59.3819C59.8034 38.7671 60.2249 39.1359 60.2249 39.6101V41.6649V43.7197C60.2249 44.1412 59.8034 44.51 59.3819 44.51Z" fill="black" />
                  <path d="M56.5 11.875V29.5H53.5625V32.4375H50.625L50.625 35.375H41.8125V32.4375H47.6875L47.6875 29.5L50.625 29.5V11.875H47.6875L47.6875 8.9375L41.8125 8.9375V6L50.625 6V8.9375H53.5625L53.5625 11.875H56.5ZM38.875 8.9375H41.8125L41.8125 11.875H38.875L38.875 29.5H41.8125L41.8125 32.4375L38.875 32.4375V47.125H33L33 6H38.875V8.9375Z" fill="black" />
                  <path d="M24.5312 12.1976H21.5937V18.0726H18.6562V23.9476H15.7187V29.8226H12.7812V35.6976H9.84375V41.5726H6.90625V47.4476H1.03125V41.5726H3.96875V35.6976H6.90625V29.8226H9.84375V23.9476H12.7812V18.0726H15.7187V12.1976H18.6562V6.32263H21.5937V0.447632H27.4687V6.32263H24.5312V12.1976Z" fill="black" />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_313_12">
                <rect width="{60}" height="{47}" fill="white" transform="translate(0.561523 0.447632)" />
              </clipPath>
              <clipPath id="clip1_313_12">
                <rect width="{60}" height="{47}" fill="white" transform="translate(0.561523 0.447632)" />
              </clipPath>
              <clipPath id="clip2_313_12">
                <rect width="{60}" height="{47}" fill="white" transform="translate(0.561523 0.447632)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-slate-900">First Link</a>
          <a className="mr-5 hover:text-slate-900">Second Link</a>
          <a className="mr-5 hover:text-slate-900">Third Link</a>
          <a className="mr-5 hover:text-slate-900">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Navbar
