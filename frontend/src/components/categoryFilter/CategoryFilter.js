import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../GlobalProvider/GlobalProvider";
import { filterByCat } from "../../helper";

const CategoryFilter = ({handleFilterNotes}) => {
  const { categories, setNotes, chosenCat,notes } =
    useContext(GlobalContext);


  const handleFilter = () => {
    const filteredNotes = filterByCat(notes, chosenCat)
    setNotes(filteredNotes);
  };

  useEffect(() => {
    if (chosenCat !== "") {
       handleFilter();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenCat]);

  return (
    <div className="flex gap-2">
      <h1>Category Filter</h1>
      <select onChange={(e) =>handleFilterNotes(e.target.value) } name="" id="">
        <option value="">no filter selected</option>
        {categories.length>0&&categories.map((item, index) => (
          <option key={index} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
