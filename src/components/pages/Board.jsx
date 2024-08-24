"use client";
import { useState } from 'react';
import { CirclePlus, SquarePlus } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from '@/components/ui/Card';
import Box from '@/components/ui/Box';
import { Button } from '@/components/ui/button';

const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-80G2d2f9997a",
    name: "item 1",
    component:<Card addIcon={true} name={"item 1"}/> 
  },
  {
    id: "487f68b4-1746-438c-920e-d67A7df46247",
    name: "item 2",
    component: <Card addIcon={true} name={"item 2"}/>
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43fS3101e7c0",
    name: "item 3",
    component: <Card addIcon={true} name={"item 3"}/>
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43Ddsfsd1e7c0",
    name: "item 4",
    component: <Card addIcon={true} name={"item 4"}/>
  }
]

const DraggableCard = ({ item, onAdd, inFocusedBox, onRemove }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: item.id, name: item.name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card
        key={item.id}
        {...item}
        addIcon={!inFocusedBox}
        closeIcon={inFocusedBox}
        onAdd={() => onAdd(item)}
        onRemove={() => onRemove(item)}
      />
    </div>
  );
};

const DroppableArea = ({ children, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => onDrop(item),
  }));

  return <div ref={drop} className="h-full">{children}</div>;
};

const Board = () => {
  const [stores, setStores] = useState(DATA);
  const [boxes, setBoxes] = useState([]);
  const [focusedBox, setFocusedBox] = useState(null);
  const [focusedCards, setFocusedCards] = useState([]);

  const addToFocusedCards = (card) => {
    if (focusedBox) {
      setFocusedCards(prev => [...prev, card]);
      setStores(prev => prev.filter(item => item.id !== card.id));
    }
  };

  const removeFromFocusedCards = (card) => {
    setFocusedCards(prev => prev.filter(item => item.id !== card.id));
    setStores(prev => [...prev, card]);
  };

  const moveBoxRight = () => {
    if (focusedBox) {
      const newBox = { ...focusedBox, cards: focusedCards };
      setBoxes(prevBoxes => [...prevBoxes, newBox]);
      setFocusedBox(null);
      setFocusedCards([]);
    }
  };

  const moveBoxLeft = (id) => {
    const boxToMove = boxes.find(box => box.id === id);
    if (boxToMove && focusedBox == null) {
      setFocusedBox(boxToMove);
      setFocusedCards(boxToMove.cards || []);
      setBoxes(prevBoxes => prevBoxes.filter(box => box.id !== id));
    }
  };

  const AddBoxHandler = () => {
    const newBox = {
      id: Date.now().toString(),
      cards: []
    };
    setBoxes(old => [...old, newBox]);
  };

  const closeBoxHandler = (id) => {
    const boxToClose = boxes.find(box => box.id === id);
    if (boxToClose) {
      setStores(prev => [...prev, ...(boxToClose.cards || [])]);
    }
    setBoxes(prevBoxes => prevBoxes.filter(box => box.id !== id));
  };

  const handleDropToFocusedBox = (item) => {
    addToFocusedCards(item);
  };

  const handleDropToStores = (item) => {
    removeFromFocusedCards(item);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-12">
        <div className='col-span-3 bg-gray-200 '>
            <DroppableArea onDrop={handleDropToStores} >
              <div className="  min-h-screen text-white px-6 pt-[100px]">
                {stores.map((item) => (
                  <DraggableCard
                    key={item.id}
                    item={item}
                    onAdd={addToFocusedCards}
                    inFocusedBox={false}
                  />
                ))}
              </div>
            </DroppableArea>
        </div>

        <div className="col-span-5 h-screen">
          <div className='flex justify-center mt-[120px]'>
            {focusedBox && (
              <DroppableArea onDrop={handleDropToFocusedBox}>
                <Box
                  data={focusedCards}
                  id={focusedBox.id}
                  rightIcon={true}
                  moveBox={moveBoxRight}
                  onRemoveCard={removeFromFocusedCards}
                  setFocusedBox={setFocusedBox}
                  setFocusedCards={setFocusedCards}
                  setBoxes={setBoxes}
                >
                  {focusedCards.map((item) => (
                    <DraggableCard 
                      key={item.id} 
                      item={item} 
                      onRemove={removeFromFocusedCards} 
                      inFocusedBox={true}
                    />
                  ))}
                </Box>
              </DroppableArea>
            )}
          </div>
        </div>

        <div className='pt-[60px] col-span-4 bg-gray-200 flex flex-col'>
          <Button onClick={AddBoxHandler} variant="ghost" className='ml-[50px] gap-2 mb-4 self-end flex justify-end mr-[40px]'>
            <SquarePlus color='purple' /> Add box
          </Button>
          <div className="flex-col gap-3 items-center col-span-4 px-6 flex bg-gray-200 min-h-screen">
            {boxes.map((box) => (
              <Box
                key={box.id}
                id={box.id}
                data={box.cards}
                closeIcon={true}
                rightIcon={false}
                closeBoxHandler={() => closeBoxHandler(box.id)}
                moveBox={() => moveBoxLeft(box.id)}
                unFocusedCol={true}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Board;