import DiaryCarousel from '~/components/DiaryCarousel';
import ResponsiveLine from '~/components/ResponsiveLine';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '~/components/ui/carousel';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '~/components/ui/popover';

export default async function App() {
    return (
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
            <div className='flex items-center gap-4'>
                <h1 className='font-semibold text-lg md:text-xl text-primary'>
                    Dashboard
                </h1>
                <div className='ml-auto flex items-center gap-2'>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id='date'
                                variant='outline'
                                className='w-[280px] justify-start text-left font-normal'
                            >
                                {/* <CalendarClockIcon className='mr-2 h-4 w-4' /> */}
                                June 01, 2023 - June 30, 2023
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='end'>
                            <Calendar
                                initialFocus
                                mode='range'
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <DiaryCarousel />
        </main>
        // <>
        //     <Carousel className='mx-4 my-4'>
        //         <CarouselContent className='-ml-4'>
        //             <CarouselItem>
        //                 <Card className='shadow-[0_10px_20px_0_rgba(217,119,6,0.1)] m-2'>
        //                     <CardContent>test</CardContent>
        //                 </Card>
        //             </CarouselItem>
        //             <CarouselItem className=''>...</CarouselItem>
        //             <CarouselItem className=''>...</CarouselItem>
        //             <CarouselNext />
        //             <CarouselPrevious />
        //         </CarouselContent>
        //     </Carousel>
        //     <div>featured trainers (if no trainer)</div>
        //     <div>view/create workouts</div>
        //     <div>recent diary updates/view diary</div>
        //     <div>trainer updates (if has trainer)</div>
        //     <div>personal stats</div>
        // </>
    );
}
