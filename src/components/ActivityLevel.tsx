'use client';

import { useState } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from './ui/command';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';

type Status = {
    value: string;
    label: string;
};

const statuses: Status[] = [
    {
        value: 'sedentary',
        label: 'Sedentary',
    },
    {
        value: 'lightlyActive',
        label: 'Lightly Active',
    },
    {
        value: 'moderatelyActive',
        label: 'Moderately Active',
    },
    {
        value: 'veryActive',
        label: 'Very Active',
    },
    {
        value: 'extraActive',
        label: 'Extra Active',
    },
];

export default function ActivityLevel() {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
    return (
        <div className='flex items-center space-x-4'>
            <p className='text-sm text-muted-foreground'>Activity Level</p>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        className='w-[150px] justify-start'
                    >
                        {selectedStatus ? (
                            <>{selectedStatus.label}</>
                        ) : (
                            <>+ Set Level</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='p-0' side='bottom' align='start'>
                    <Command>
                        <CommandInput placeholder='Change status...' />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map(status => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        onSelect={value => {
                                            setSelectedStatus(
                                                statuses.find(
                                                    priority =>
                                                        priority.value === value
                                                ) ?? null
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        {status.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
