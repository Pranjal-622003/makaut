import React from 'react';

const data = [
    {
        name: 'Organiser 1',
        description: 'This is the organizer of the event 1.',
        contact: 'contact@example.com',
        location: 'New York, USA',
        imageUrl:
            '/google.jpg',
        cartUrl: '/cart.png',
        contactLogoUrl: '/phn.jpg',
        locationLogoUrl: '/location.png',
        sellerName: 'Seller 1',
        price: '$50',
    },
    {
        name: 'Organiser 2',
        description: 'This is the organizer of the event 2.',
        contact: 'contact@example.com',
        location: 'Los Angeles, USA',
        imageUrl:
            '/google.jpg',
        cartUrl: '/cart.png',
        contactLogoUrl: '/phn.jpg',
        locationLogoUrl: '/location.png',
        sellerName: 'Seller 2',
        price: '$40',
    },
    {
        name: 'Organiser 3',
        description: 'This is the organizer of the event 3.',
        contact: 'contact@example.com',
        location: 'San Francisco, USA',
        imageUrl:
            '/google.jpg',
        cartUrl: '/cart.png',
        contactLogoUrl: '/phn.jpg',
        locationLogoUrl: '/location.png',
        sellerName: 'Seller 3',
        price: '$60',
    },
];

const Previousorder = () => {
    return (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-2">
            {data.map((item, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded">
                    <div className="flex items-center mb-4">
                        <h1 className="text-xl font-bold">{item.name}</h1>
                    </div>
                    <p className="mb-2 text-gray-700">{item.description}</p>
                    <img src={item.imageUrl} alt={item.name} className="w-full mb-2" />
                    <div className="flex items-center whitespace-normal overflow-ellipsis">
                        <img src={item.contactLogoUrl} alt="contact logo" className="w-6 h-6 mr-2" />
                        <p className="text-gray-700">{item.contact}</p>
                    </div>
                    <div className="flex items-center whitespace-normal overflow-ellipsis">
                        <img src={item.locationLogoUrl} alt="location logo" className="w-6 h-6 mr-2" />
                        <p className="text-gray-700">{item.location}</p>
                    </div>
                    <p className="mb-2 text-gray-700">Seller: {item.sellerName}</p>
                    <p className="mb-4 text-gray-700">Price: {item.price}</p>
                    <button className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-300">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Previousorder;

