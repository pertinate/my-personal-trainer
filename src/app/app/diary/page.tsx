import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Label } from '~/components/ui/label';

export default async function Diary() {
    return (
        <>
            <Button>New Entry</Button>
            <Card>
                <CardContent className='flex flex-col'>
                    <Label>Date of Entry</Label>
                    <Label>Meal Type</Label>
                    <Label>Total Calories</Label>
                    <Label>Macros: protein, fat, carbs</Label>
                    <Label>Serving/size</Label>
                    <Label></Label>
                    <Label></Label>
                    <Label></Label>
                    <Label></Label>
                </CardContent>
            </Card>
        </>
    );
}
