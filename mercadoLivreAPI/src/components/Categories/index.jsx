function handleSelectedProduct(){
	alert('ok')
}

export default function Categories({ categories }) {

	return (
		<div className="bg-gray-200 rounded-xl flex px-2 ">
			
				<select onChange={handleSelectedProduct} className="flex px-2 md:px-5 outline-0 bg-gray-200 cursor-pointer  w-full sm:w-24 md:w-32 lg:w-40">
				
					<option value="" disabled selected>
						Categorias
					</option >
					{categories.map((category) => (
					<option  value="1"> {category.name}
					</option>
					
				))}
				
				</select>
			
		</div>
	);
}
