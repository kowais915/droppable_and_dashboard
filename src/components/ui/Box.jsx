import { SquareX, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/Card'

const Box = (props) => {
    const {unFocusedCol, data, id, closeBoxHandler, rightIcon, closeIcon, moveBox, onRemoveCard, children } = props;
    
    return (
        <div className="bg-white h-[420px] w-[420px] border-2 border-gray-300 mb-2 overflow-y-auto">
            <div className='flex justify-between p-4'>
                <div className='flex gap-2 items-center'>
                    <Button variant="ghost" onClick={moveBox}>
                        {rightIcon ? <ChevronRight /> : <ChevronLeft />}
                    </Button>
                    <div>
                        Box {id}
                    </div>
                </div>
                <div>
                    {closeIcon && 
                    <Button variant='ghost' onClick={() => closeBoxHandler(id)}>
                        <SquareX color='red'/>
                    </Button>
                    }
                </div>
            </div>
            <div className='flex flex-col px-7 mt-4'>
                {children ? children : data?.map((card) => (
                    <Card 
                        key={card.id} 
                        {...card} 
                        closeIcon={true} 
                        onRemove={() => onRemoveCard(card)}
                        unFocusedCol={unFocusedCol}
                    />
                ))}
            </div>
        </div>
    );
}

export default Box;