'use client';

import { useState, useEffect } from 'react';
import ResponsiveLine from './ResponsiveLine';
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
} from './ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from './ui/carousel';
import { IconDots } from '@tabler/icons-react';
import CarouselDots from './CarouselDots';

export default function DiaryCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <div className='flex flex-col'>
            <Carousel className='' setApi={setApi}>
                <CarouselContent>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>
                                        Calories Burned
                                    </CardDescription>
                                    <CardTitle>2,389 kcal</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>
                                        Steps Taken
                                    </CardDescription>
                                    <CardTitle>12,345</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='p-1'>
                            <Card>
                                <CardHeader>
                                    <CardDescription>Weight</CardDescription>
                                    <CardTitle>175 lbs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveLine />
                                    {/* <FilledtimeseriesChart className='aspect-[4/3]' /> */}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className='left-1/3 top-full translate-y-0' />
                <CarouselNext className='left-2/3 top-full translate-y-0' />
            </Carousel>
        </div>
    );
}
