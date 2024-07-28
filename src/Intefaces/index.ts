import { ReactNode } from 'react';

export interface IModalProps {
    children: ReactNode;
}

export interface ITodoItem {
    id: string; 
    text: string;
    completed: boolean;
  }

export interface IItemProps {
    handleCheckboxChange: () => void;
    isChecked: boolean;
    value: ITodoItem;
    setSelectedItem: (input: string) => void;
    selectedItem: string;
    deleteItem: () => void;
}

