import { CirclePlus, CircleX, } from 'lucide-react';
import { Button } from '@/components/ui/button'

const Card = () => {
    return (
        <div className="h-[100px] flex  items-center m-2 bg-white border-2 text-black border-gray-300">
            <Button variant={'ghost'} className='h-full w-[90px] px-0 flex justify-center items-center bg-purple-400 hover:bg-purple-600 border-none rounded-none'>
                <CirclePlus/>
            </Button>

            <div className='ml-4'>
                Item 1
            </div>
        </div>
      );
}
 
export default Card;