import { useEffect, useState } from "react";
import Modal from "./ui/modal";
import { NotebookText } from "lucide-react";
import Item from "./ui/Item";
import { v4 as uuidv4 } from 'uuid';
import { ITodoItem } from "./Intefaces";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [isChecked, setIsChecked] = useState(false);

  const [items, setItems] = useState<ITodoItem[]>([]);

  const [inputValue, setInputVlaue] = useState("");
  
  const handleOnChangeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputVlaue(event.target.value);
  }
  
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClickAddItem = () => {
    event?.preventDefault();

    if (inputValue.trim() !== "")
    {
      const newItem:ITodoItem = {
        id: uuidv4(),
        text: inputValue,
        completed: false
      }
      setItems(prev => [ newItem, ...prev ]);


      toast.success("Item added successfully", { duration: 1500 });
    }else{
      toast.error("Empty Item",{duration:1500});
    }
  }
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  


  return (
    <div className="bg-gradient-to-r from-customBlue1 via-customBlue2 to-customCyan h-[58.2rem]">
      <div><Toaster/></div>
      
      <Modal>
        <h1 className="text-blue-500 font-bold flex mb-4 text-2xl items-center">
          To Do List <NotebookText className="ml-2 size-7 text-yellow-400" />
        </h1>
        <form className="space-x-[-50px] flex mb-8" onSubmit={handleClickAddItem}>
          <input
            type="text"
            onChange={handleOnChangeValue}
            className="rounded-3xl border-2 border-gray-300 py-1 pr-16 focus:outline-none px-3 w-full"
          />
          <button className="rounded-3xl border-2 py-1 px-5 border-gray-300  bg-blue-500 text-white hover:bg-blue-700 duration-500 font-mono text-xl">
            Add
          </button>
        </form>

        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Item
                handleCheckboxChange={handleCheckboxChange}
                isChecked={isChecked}
                value={item}
              />
            </li>
          ))}
        </ul>

        {/* <Item handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} value={items} /> */}
      </Modal>
    </div>
  );
}

export default App;
