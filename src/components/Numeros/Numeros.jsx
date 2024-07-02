import React, { useState, useEffect } from 'react';

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: 44000000 },
  { id: 2, name: 'Assets under holding', value: 119000000000000 },
  { id: 3, name: 'New users annually', value: 46000 },
];

const formatValue = (value) => {
  if (value >= 1000000000000) {
    return `${(value / 1000000000000).toFixed(value % 1000000000000 === 0 ? 0 : 1)} trillion`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)} million`;
  } else {
    return value.toLocaleString();
  }
};

export default function Numeros() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 100; // Ajusta esto para controlar la velocidad
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          }
          return newCounts;
        });
      }, 50); // Ajusta esto para controlar la velocidad
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {formatValue(Math.floor(counts[index]))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}