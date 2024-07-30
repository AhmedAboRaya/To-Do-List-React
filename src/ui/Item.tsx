import { useEffect } from "react";
import { IItemProps } from "../Intefaces";
import { X,Trash2  } from "lucide-react";
import toast from "react-hot-toast";

const Item = ({ value, setSelectedItem, deleteItem, selectedItem}: IItemProps) => {  
    const handleClick = () => {
      setSelectedItem(value.id);
      toast.error("Deleted", { duration: 2000,icon:<Trash2 /> });
      console.log("click X");
    }

    useEffect(() => {
      if (selectedItem !== "") {
        deleteItem();
      }
    }, [selectedItem]);
    return (
        <div className="flex justify-between items-center border-2 p-2 border-dotted border-blue-200 rounded-3xl mb-3" >
          <div className="flex justify-start items-center space-x-4">
            <input
              type="checkbox"
              id="checkbox"
              className="appearance-none h-5 w-5 border border-gray-300 rounded-full bg-white ml-2 checked:bg-blue-500 checked:border-transparent focus:outline-none"
              style={{
                position: "relative",
              }}
            />
            <label
              htmlFor="checkbox"
              className={`text-gray-800 font-semibold text-xl pr-36`}
            >
              {value.text}
            </label>
          </div>
          <X 
            className="bg-red-600 rounded-full p-[3px] size-6 duration-500 hover:bg-red-400"
            onClick={handleClick}
          />

        </div>
    )
}

export default Item 