// src/components/GalleryFilter.js
import React, { useContext, useState } from 'react';
import SchoolContext from '../context/SchoolContext';

function GalleryFilter({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { schoolData } = useContext(SchoolContext);
  const handleChange = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="gallery-filter">
      <label htmlFor="filter">Filter by:</label>
      <select id="filter" value={selectedFilter} onChange={handleChange}>
        <option value="all">All</option>
        <option value="event1">Cultural Fest</option>
        <option value="event2">Sports Day</option>
      </select>
    </div>
  );
}

export default GalleryFilter;
