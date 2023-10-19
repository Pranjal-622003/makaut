import React from 'react';

const data = [
    {
        name: 'Mouse & Keyboard',
        description: 'This is the organizer of the event 1.',
        contact: '9431623537',
        location: 'New York, USA',
        imageUrl:
            '/keyboard.jpeg',
        cartUrl: '/cart.png',
        contactLogoUrl: '/phn.jpg',
        locationLogoUrl: '/location.png',
        sellerName: 'Seller 1',
        price: '$50',
    },
    {
        name: 'Eng-Drawing Instrument',
        description: 'This is the organizer of the event 2.',
        contact: '9431623537',
        location: 'kestopur 206',
        imageUrl:
            '/engineers-drawing-instruments-box.jpg',
        cartUrl: '/cart.png',
        contactLogoUrl: '/phn.jpg',
        locationLogoUrl: '/location.png',
        sellerName: 'Seller 2',
        price: '$40',
    },
    {
        name: 'Organiser',
        description: 'condition good, goodbook ',
        
        contact: '9431623537',
        location: 'San Francisco, USA',
        imageUrl:
            '/makaut organizer.jpg',
        cartUrl: '/cart.png',
        contactLogoUrl: '/phn.jpg',
        locationLogoUrl: '/location.png',
        sellerName: 'Seller 3',
        price: '$60',
    },
];

const List = () => {
    const handleLocationClick = (location) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
    };

    return (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {data.map((item, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded">
                    <div className="flex flex-col items-center mb-4 md:items-start">
                        <div className="mb-2">
                            <h1 className="text-xl font-bold">{item.name}</h1>
                        </div>
                        <div>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </div>
                    <div className="mb-2">
                        <img src={item.imageUrl} alt={item.name} className="object-cover w-full h-64" />
                    </div>
                    <div className="flex flex-col items-start mb-2">
                        <div className="flex items-center mb-2">
                            <img
                                src={item.contactLogoUrl}
                                alt="contact logo"
                                className="w-6 h-6 mr-2"
                            />
                            <p className="text-gray-700">{item.contact}</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleLocationClick(item.location)}
                            >
                                <img
                                    src={item.locationLogoUrl}
                                    alt="location logo"
                                    className="w-6 h-6 mr-2 cursor-pointer"
                                />
                            </a>
                            <p
                                className="text-gray-700 cursor-pointer"
                                onClick={() => handleLocationClick(item.location)}
                            >
                                {item.location}
                            </p>
                        </div>
                        <div className="mb-2 text-gray-700">Seller: {item.sellerName}</div>
                        <div className="mb-4 text-gray-700">Price: {item.price}</div>
                        <button className="w-full px-4 py-2 font-bold text-white bg-yellow-500 rounded md:w-auto hover:bg-yellow-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;