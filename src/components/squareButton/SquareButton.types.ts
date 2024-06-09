export interface SquareButtonProps {
    title: string;
    variant: 'red' | 'blue';
    onPress: () => void;
    disabled?: boolean;
}