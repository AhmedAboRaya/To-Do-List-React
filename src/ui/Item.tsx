import { IItemProps } from "../Intefaces";
import { X } from "lucide-react";

const Item = ({handleCheckboxChange, isChecked, value}: IItemProps) => {   
    return (
        <div className="flex justify-between items-center border-2 p-2 border-dotted border-blue-200 rounded-3xl mb-3" onClick={handleCheckboxChange}>
          <div className="flex justify-start items-center space-x-4" >
            <input
              type="checkbox"
              id="checkbox"
              className="appearance-none h-5 w-5 border border-gray-300 rounded-full bg-white ml-2 checked:bg-blue-500 checked:border-transparent focus:outline-none"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{
                position: "relative",
              }}
            />
            <label
              htmlFor="checkbox"
              className={` ${isChecked ? "line-through" : ""} text-gray-800 font-semibold text-xl`}
            >
              {value.text}
            </label>
          </div>
          <X onClick={() => {
            console.log("click X");
            
          }}/>

        </div>
    )
}

export default Item 