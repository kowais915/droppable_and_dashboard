import { SquareX, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Box = ( props ) => {
    const { closeBoxHandler,  rightIcon } = props;
    return (
        <div className=" bg-white h-[420px] w-[420px] border-2 border-gray-300 mb-2">
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <div>

                    {rightIcon ?  <ChevronRight/> : <ChevronLeft/>}
                    </div> 
                    <div>
                        name
                    </div>
                </div>
                <div>
                    <Button variant={'ghost'} onClick={() => closeBoxHandler()}>
                      <SquareX color='red'/>
                    </Button>


                </div>

            </div>
        </div>
      );
}
 
export default Box;