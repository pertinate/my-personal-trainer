import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '~/components/ui/dropdown-menu';
import {
    PopoverTrigger,
    PopoverContent,
    Popover,
} from '~/components/ui/popover';
import {
    IconBell,
    IconClipboardList,
    IconHeart,
    IconHome,
    IconMenu,
    IconMenu2,
    IconSearch,
    IconSettings,
    IconWeight,
} from '@tabler/icons-react';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import FloatingButtion from '~/components/FloatingButton';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import ResponsiveLine from '~/components/ResponsiveLine';

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    //   const [open, setOpen] = useState(false);
    //   const isDesktop = useMediaQuery('(min-width: 768px)');
    // const headersList = headers();
    // const activePath = headersList.get('x-invoke-path');
    return (
        <div className='min-h-screen w-full bg-background flex flex-col'>
            <Card className='flex h-[60px] w-full items-center border-b px-6 sticky top-0 rounded-none z-50'>
                <Link
                    href='#'
                    className='flex items-center gap-2 font-semibold'
                    prefetch={false}
                >
                    <IconWeight className='h-6 w-6' />
                    <span className=''>Fitness Tracker</span>
                </Link>
                <Button
                    variant='outline'
                    size='icon'
                    className='ml-auto h-8 w-8 lg:hidden'
                >
                    <IconBell className='h-4 w-4' />
                    <span className='sr-only'>Toggle notifications</span>
                </Button>
            </Card>
            <div className='border-r lg:block'>
                <div className='flex h-full max-h-screen flex-col gap-2'>
                    <div className='flex-1 overflow-auto py-2 lg:block hidden'>
                        <nav className='grid items-start px-4 text-sm font-medium'>
                            <Button asChild variant={'ghost'}>
                                <Link
                                    href='#'
                                    className='flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-primary'
                                    prefetch={false}
                                    passHref
                                >
                                    <IconHome className='h-4 w-4' />
                                    <Label className=''>Dashboard</Label>
                                </Link>
                            </Button>
                            <Link
                                href='#'
                                className='flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary'
                                prefetch={false}
                            >
                                <IconClipboardList className='h-4 w-4' />
                                Diary
                            </Link>
                            <Link
                                href='#'
                                className='flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary'
                                prefetch={false}
                            >
                                <IconWeight className='h-4 w-4' />
                                Workouts
                            </Link>
                            <Link
                                href='#'
                                className='flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary'
                                prefetch={false}
                            >
                                <Button variant={'ghost'}>
                                    <IconHeart className='h-4 w-4' />
                                    Health
                                </Button>
                            </Link>
                            <Link
                                href='#'
                                className='flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary'
                                prefetch={false}
                            >
                                <IconSettings className='h-4 w-4' />
                                Settings
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b px-6'>
                    <Link href='#' className='lg:hidden' prefetch={false}>
                        <IconWeight className='h-6 w-6' />
                        <span className='sr-only'>Home</span>
                    </Link>
                    <div className='w-full flex-1'>
                        <form>
                            <div className='relative'>
                                <IconSearch className='absolute left-2.5 top-2.5 h-4 w-4 ' />
                                <Input
                                    type='search'
                                    placeholder='Search'
                                    className='w-full shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3'
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage
                                    src={
                                        'https://cdn.discordapp.com/avatars/133731699858079746/8075754b6d9992172d4990d7ac5bdaa1?size=1024'
                                    }
                                />
                                <AvatarFallback>NE</AvatarFallback>
                                <span className='sr-only'>
                                    Toggle user menu
                                </span>
                            </Avatar>
                            {/* <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full border w-8 h-8 lg:hidden'
                            >
                                <img
                                    src='/placeholder.svg'
                                    width='32'
                                    height='32'
                                    className='rounded-full'
                                    alt='Avatar'
                                    style={{
                                        aspectRatio: '32/32',
                                        objectFit: 'cover',
                                    }}
                                />
                                <span className='sr-only'>
                                    Toggle user menu
                                </span>
                            </Button> */}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>
                                <Link href={'/app/profile'}>My Account</Link>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                {children}
            </div>
            <FloatingButtion />
        </div>
    );
}
