import React, { useState } from 'react';

// Individual StatCard Component
const StatCard = ({ number, label, isInactive, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={`cursor-pointer flex flex-col items-center justify-center px-10 py-6 border rounded-lg shadow-md 
                        ${isInactive ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-800'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <p className={`my-2 text-3xl font-bold ${isInactive ? 'text-gray-400' : 'text-orange-500'}`}>
                {number}+
            </p>
            <p className={isInactive ? 'text-gray-400' : 'text-gray-600'}>{label}</p>
        </div>
    );
};

// StatsSection Component to hold all StatCards
const StatsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const stats = [
        { number: '24', label: 'Cities' },
        { number: '700', label: 'Place' },
        { number: '300', label: 'Hotel' },
        { number: '4k', label: 'Review' },
    ];

    return (
        <div className="flex lg:flex-row flex-col justify-evenly text-center my-10">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    number={stat.number}
                    label={stat.label}
                    isInactive={hoveredIndex !== null && hoveredIndex !== index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
            ))}
        </div>
    );
};

export default StatsSection;
