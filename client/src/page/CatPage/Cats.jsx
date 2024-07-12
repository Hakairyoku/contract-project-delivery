import React, { useState, useEffect } from "react"; 
import requestAxios from "../../services/axios"; 
 
function Cats() { 
  const [cats, setCats] = useState([]); 
  const [catClasses, setCatClasses] = useState([]); 
  const [selectedCatClass, setSelectedCatClass] = useState("All"); 
 
  const axiosCats = async () => { 
    const { data } = await requestAxios.get("/cats"); 
    if (data.message === "success") { 
      setCats(data.cats); 
 
      const classes = ["All", ...new Set(data.cats.map((cat) => cat.catClass))]; 
      setCatClasses(classes); 
    } 
  }; 
 
  useEffect(() => { 
    axiosCats(); 
  }, []); 
 
  const handleClassChange = (event) => { 
    setSelectedCatClass(event.target.value); 
  }; 
 
  const filteredCats = 
    selectedCatClass === "All" 
      ? cats 
      : cats.filter((cat) => cat.catClass === selectedCatClass); 
 
  return ( 
    <div> 
      <h1>Cats</h1> 
      <label> 
        Выбери класс героя 
        <select value={selectedCatClass} onChange={handleClassChange}> 
          {catClasses.map((catClass, index) => ( 
            <option key={index} value={catClass}> 
              {catClass} 
            </option> 
          ))} 
        </select> 
      </label> 
      <div> 
        {filteredCats.map((cat) => ( 
          <div key={cat.id}> 
            <img src={cat.img} alt={cat.name} /> 
            <h2>{cat.name}</h2> 
            <p>Class: {cat.catClass}</p> 
            <p>Place: {cat.place}</p> 
            <p>Sausage: {cat.price}</p> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default Cats;

