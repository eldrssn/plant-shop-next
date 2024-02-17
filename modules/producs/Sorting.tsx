import React from 'react';

const optionsArray = [
  { title: 'Sort by: Recommended', value: 'rank:desc' },
  { title: 'Sort by: Most popular', value: 'popularity:desc' },
  { title: 'Sort by: Price (high to low)', value: 'price:desc' },
  { title: 'Sort by: Price (low to high)', value: 'price:asc' },
  { title: 'Sort by: Newest', value: 'created:desc' },
];

export const Sorting = () => (
  <select
    className="basis-1/2 font-bold px-6 py-4 border-b break-words font-sm md:font-normal md:min-w-1/3 md:w-1/3 md:basis-1/3 md:border md:mr-3"
    name="order"
  >
    {optionsArray.map((option) => (
      <option key={option.value} value={option.value}>
        {option.title}
      </option>
    ))}
  </select>
);
