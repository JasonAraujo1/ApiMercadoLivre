import React, { useEffect, useState } from "react";
// import ApiCategories from "../../APIs/ApiCategories";

export default function Categories() {
	const[selectOption, setSelectOption] = useState(null)

	const handleSelectOption = (event) =>{
		const value = event.target.value
		setSelectOption(value)
		
		
	}

	return (
		<div className="bg-gray-200 rounded-xl flex px-2">
   
     
			<select value={selectOption} onChange={handleSelectOption} className="flex px-2 md:px-5 outline-0 bg-gray-200 cursor-pointer">
				<option value="" disabled selected>
					Categorias
				</option>
				<option value="1">Agro </option>
				<option value="2">Alimentos </option>
				<option value="3">Todas</option>
			</select>

    
		</div>

	);
}
