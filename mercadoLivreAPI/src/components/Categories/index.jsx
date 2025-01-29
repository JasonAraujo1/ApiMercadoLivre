import React, { useEffect, useState } from "react";

export default function Categories({ products }) {
	const [categories, setCategories] = useState(null);


		const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://api.mercadolibre.com/sites/MLB/categories",
        );
        const data = await response.json();
        console.log(data);
        
        setCategories(data);
      } catch (error) {
        console.log("Erro fetching data", error);
      }
   


	}

  useEffect(() => {
    fetchApi();
  }, []);


	

	return (
		<div className="bg-gray-200 rounded-xl flex px-2">
   
     
			<select className="flex px-2 md:px-5 outline-0 bg-gray-200 cursor-pointer">
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
