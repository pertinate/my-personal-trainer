type Props = {
    count: number;
    current: number;
};

export default function CarouselDots(props: Props) {
    const dots = Array.from({ length: props.count })
        .fill(undefined)
        .map((_, idx) => (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                stroke={idx == props.current ? 'white' : 'grey'}
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                repeatCount='1'
                key={`dots-${idx}`}
            >
                <path d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
            </svg>
        ));

    const brokenByThree = dots.reduce<(typeof dots)[]>((acc, next) => {
        if (!acc[0] || acc[acc.length - 1]?.length == 3) {
            acc.push([]);
            return acc;
        }

        acc[acc.length - 1]?.push(next);

        return acc;
    }, []);

    const currentIdx = Math.floor(props.current / 3);

    console.log(brokenByThree);

    const left = dots.shift();
    const right = dots.pop();

    const viewable: typeof brokenByThree = [];

    if (brokenByThree[currentIdx]) {
        if (currentIdx == 0) {
            viewable.push(brokenByThree[currentIdx]);
        }
    }

    return (
        <div className='flex flex-row justify-center items-center'>
            {/* {left}
            {dots.length > 3 && props.current > 3 && '...'}
            {viewable}
            {dots.length > 5 && props.current < props.count - 3 && '...'}
            {right} */}
        </div>
    );
}
