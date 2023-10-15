import React from 'react'

const Filter = () => {
  return (
    <div className="w-1/4 p-4 ">
                <div className="text-2xl">Filter</div>

                <div className="mt-4">
                    <label htmlFor="category" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                        Category
                    </label>
                    <select id="category" name="category" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                        
                        <option value="option1">Engineering Drawing Instruments</option>
                        <option value="option2">Organizer (Newly Published)</option>
                        <option value="option3">Paperback(Kindle)</option>
                        <option value="option3">Electronics</option>
                        <option value="option3">Location</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label htmlFor="sortBy" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                        Sort By
                    </label>
                    <select id="sortBy" name="sortBy" className="block w-full mt-1 border rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 hover:border-blue-500">
                      
                        <option value="option1">Price (Low to High)</option>
                        <option value="option2">Price (High to Low)</option>
                    </select>
                </div>
            </div>
  )
}

export default Filter
