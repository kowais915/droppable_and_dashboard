import { CirclePlus, CircleX, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button'

const Card = (props) => {
    const { id, unFocusedCol, name, addIcon, closeIcon, onAdd, onRemove } = props;
    return (
        <div className="h-[60px] w-full flex items-center m-2 bg-white border-2 text-black border-gray-300">
            {addIcon && 
                <Button variant={'ghost'} onClick={onAdd} className='h-full w-[90px] px-0 flex justify-center items-center bg-purple-400 hover:bg-purple-600 border-none rounded-none'>
                    <CirclePlus/>
                </Button>
            } 
            {(closeIcon && !unFocusedCol )&& 
                <Button variant={'ghost'} onClick={onRemove} className='h-full w-[90px] px-0 flex justify-center items-center bg-red-400 hover:bg-purple-600 border-none rounded-none'>
                    <CircleX />
                </Button>
            }

            {(closeIcon && unFocusedCol )&& 
                <Button variant={'ghost'}  className='h-full w-[90px] px-0 flex justify-center items-center bg-gray-200 hover:bg-purple-600 border-none rounded-none'>
                    <ThumbsUp />
                </Button>
            }
            <div className='ml-4'>
                {name}
            </div>
        </div>
    );
}

export default Card;