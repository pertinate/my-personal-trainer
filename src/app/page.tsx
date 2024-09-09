import Link from 'next/link';

import { LatestPost } from '~/app/_components/post';
import { getServerAuthSession } from '~/server/auth';
import { api, HydrateClient } from '~/trpc/server';

export default async function Home() {
    const hello = await api.post.hello({ text: 'from tRPC' });
    const session = await getServerAuthSession();

    void api.post.getLatest.prefetch();

    return (
        <HydrateClient>
            <main>
                {/* <Flex align={'center'} justify={'center'}>
                    <Card>
                        <Flex direction='column' gap='2'>
                            <Text>Hello from Radix Themes :)</Text>
                            <Button asChild>
                                <Link href={'/app'}>Let's go</Link>
                            </Button>
                        </Flex>
                    </Card>
                </Flex> */}
            </main>
        </HydrateClient>
    );
}
