"use client"
import React, { useState } from 'react';

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside
        id="cta-button-sidebar"
        className={`sm:w-64 h-screen bg-gray-800 text-white ${
          isSidebarOpen ? 'block' : 'hidden sm:block'
        }`}
      >
        <ul className="p-4">
          <li className="mb-4">
            <a href="#" className="text-white">Sidebar Item 1</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white">Sidebar Item 2</a>
          </li>
          {/* Add more sidebar items here */}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100">
        <button
          data-drawer-target="cta-button-sidebar"
          data-drawer-toggle="cta-button-sidebar"
          aria-controls="cta-button-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={handleSidebarToggle}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path code */}
          </svg>
        </button>

        {/* Main content area */}
        <div>
          {/* Your main content here */}
          <h1>Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
