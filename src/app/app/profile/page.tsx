import ActivityLevel from '~/components/ActivityLevel';
import { Label } from '~/components/ui/label';

export default async function Profile() {
    return (
        <>
            <div>
                <Label>Name</Label>
                <Label>Gender</Label>
                <Label>Age</Label>
                <Label>Height</Label>
                <Label>Weight</Label>
            </div>
            <ActivityLevel />
            <Label>Fitness goals</Label>
            <Label>Estimated daily caloric intake</Label>
            <Label>Linked Accounts</Label>
            <Label>Dietary Preferences</Label>
            <Label>Measurement History</Label>
        </>
    );
}
