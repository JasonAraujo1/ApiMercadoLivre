import React from "react";
import Categories from "../Categories";
import { useState } from "react";

export default function MenuBar({ fetchApiSearchInput }) {
	const [inputSearchvalue, setInputSearchValue] = useState("");

	function handleInputChange(event) {
		setInputSearchValue(event.target.value);
	}

	function handleSearch() {
		fetchApiSearchInput(inputSearchvalue);
	}
	return (
		<div className=" bg-amber-200 ">
			<div className="p-14 flex justify-between max-w-[1280px]  mx-auto gap-3">
				<Categories />
				<div className="flex items-center">
					<input
						onChange={handleInputChange}
						value={inputSearchvalue}
						type="search"
						className="border-neutral-950 border-2 bg-white p-1 outline-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
					/>
					<button
						onClick={handleSearch}
						className=" flex border-neutral-950 border-2 bg-white p-1"
					>
						<span className="material-symbols-outlined cursor-pointer">
							search
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
