'use client';

import {
    IconClipboardList,
    IconHeart,
    IconHelp,
    IconHome,
    IconMenu2,
    IconSettings,
    IconWeight,
} from '@tabler/icons-react';
import { Button } from './ui/button';
import { useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './ui/drawer';
import Link from 'next/link';
import { Label } from './ui/label';
import { useRouter, usePathname } from 'next/navigation';

const routes = [
    {
        href: '/app',
        regExp: {
            match: '^/app$',
            args: '',
        },
        display: 'Dashboard',
        icon: <IconHome className='h-4 w-4' />,
    },
    {
        href: '/app/diary',
        regExp: {
            match: '^/app/diary$',
            args: '',
        },
        display: 'Diary',
        icon: <IconClipboardList className='h-4 w-4' />,
    },
    {
        href: '/app/workouts',
        regExp: {
            match: '^/app/workouts$',
            args: '',
        },
        display: 'Workouts',
        icon: <IconWeight className='h-4 w-4' />,
    },
    {
        href: '/app/trainers',
        regExp: {
            match: '^/app/trainers$',
            args: '',
        },
        display: 'Trainers',
        icon: <IconHelp className='h-4 w-4' />,
    },
    {
        href: '/app/settings',
        regExp: {
            match: '^/app/settings$',
            args: '',
        },
        display: 'Settings',
        icon: <IconSettings className='h-4 w-4' />,
    },
];

export default function FloatingButtion() {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    //   const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <div className='fixed right-4 bottom-4'>
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button
                        size={'icon'}
                        className='rounded-full p-3 h-12 w-12 drop-shadow-lg'
                        variant={'secondary'}
                        onClick={() => setOpen(true)}
                    >
                        <IconMenu2 />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className='text-left'>
                        <DrawerTitle>Navigation</DrawerTitle>
                        <DrawerDescription>test</DrawerDescription>
                    </DrawerHeader>
                    <div className='flex flex-col gap-4 m-4'>
                        {routes.map(entry => (
                            <Button
                                asChild
                                variant={
                                    new RegExp(
                                        entry.regExp.match,
                                        entry.regExp.args
                                    ).test(path)
                                        ? 'outline'
                                        : 'ghost'
                                }
                                onClick={() => setOpen(false)}
                                key={entry.href}
                            >
                                <Link
                                    href={entry.href}
                                    className='flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-primary'
                                    prefetch={false}
                                    passHref
                                >
                                    {entry.icon}
                                    <Label className=''>{entry.display}</Label>
                                </Link>
                            </Button>
                        ))}
                    </div>
                    <DrawerFooter className='pt-2'>
                        <DrawerClose asChild>
                            <Button variant='outline'>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
