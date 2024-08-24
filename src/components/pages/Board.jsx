"use client";
import { useState, useEffect} from 'react';
import { CirclePlus,SquarePlus,  CircleX, } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from '@/components/ui/Card'
import Box from '@/components/ui/Box'
import { Button } from '@/components/ui/button';


const DATA = [
    {
      id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
      component: <div className='h-[280px] bg-red-400 w-[80px]'>Card</div>,
    },
    {
      id: "487f68b4-1746-438c-920e-d67b7df46247",
      component: <div className='h-[280px] bg-red-400 w-[80px]'>Card</div>,
    },
    {
      id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
      component: <div className='h-[280px] bg-red-400 w-[80px]'>Card</div>,
    },
    {
      id: "25daffdc-aae0-4d73-bd31-43fdsfsd1e7c0",
      component: <div className='h-[280px] bg-red-400 w-[80px]'>Card</div>,
    }
  ]

const Baord = () => {
    const [stores, setStores] = useState(DATA);
    const [boxes, setBoxes] = useState([]);

    const handleDragAndDrop = (results) => {
        const { source, destination, type } = results;
    
        if (!destination) return;
    
        if (
          source.droppableId === destination.droppableId &&
          source.index === destination.index
        )
          return;
    
        if (type === "group") {
          const reorderedStores = [...stores];
    
          const storeSourceIndex = source.index;
          const storeDestinatonIndex = destination.index;
    
          const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
          reorderedStores.splice(storeDestinatonIndex, 0, removedStore);
    
          return setStores(reorderedStores);
        }
        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;
    
          router.push("/");
    
        const storeSourceIndex = stores.findIndex(
          (store) => store.id === source.droppableId
        );
        const storeDestinationIndex = stores.findIndex(
          (store) => store.id === destination.droppableId
        );
    
        const newSourceItems = [...stores[storeSourceIndex].items];
        const newDestinationItems =
          source.droppableId !== destination.droppableId
            ? [...stores[storeDestinationIndex].items]
            : newSourceItems;
    
        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);
    
        const newStores = [...stores];
    
        newStores[storeSourceIndex] = {
          ...stores[storeSourceIndex],
          items: newSourceItems,
        };
        newStores[storeDestinationIndex] = {
          ...stores[storeDestinationIndex],
          items: newDestinationItems,
        };
    
        setStores(newStores);
      };

      const AddBoxHandler = () => {
        const newBox = {
          id: Date.now(), 
          component: <Box />
        };
        setBoxes((old) => [...old, newBox]);
      }
      const closeBoxHandler = (id) => {
        const updatedBoxes = boxes.filter((box) => box.id !== id);
        setBoxes(updatedBoxes);
      }
  return (
   
    <div className="grid grid-cols-12 ">
    <div className="col-span-3 bg-gray-200 min-h-screen  text-white px-6 pt-[100px]">
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className="col-span-5  h-screen ">
    <div className='flex justify-center mt-[120px]'>
      <Box rightIcon={true}/>
    </div>
    </div>
    <div className='pt-[100px] col-span-4 bg-gray-200 flex flex-col'>
      <Button onClick={AddBoxHandler} variant="ghost" className='ml-[50px] gap-2 mb-4 self-end flex justify-end mr-[40px]'>
        <SquarePlus color='purple'/> Add box
      </Button>
      <div className="flex-col gap-3  items-center col-span-4 px-6 flex bg-gray-200 min-h-screen">
        {boxes.map((box) => (
          <Box key={box.id} rightIcon={false} closeBoxHandler={() => closeBoxHandler(box.id)} />
        ))}
      </div>
    </div>
  </div>
   
  );
};

export default Baord;
