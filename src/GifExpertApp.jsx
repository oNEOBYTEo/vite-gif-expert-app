import React, { useState } from 'react';
import AddCategories from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setCategories([...categories, "HunterXHunter"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategories setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
