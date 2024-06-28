export type Size = 'sm' | 'md' | 'lg' | 'xg';
export type BackgroundColor = 'red' | 'green';
export type Color = 'white' | 'black';

export interface ButtonStyleProps {
    $size?: Size;
    $bgColor?: BackgroundColor;
    $color?: Color;
}

export interface DefaultButtonProps {
    title: string;
    onClick: (event: any) => void;
    styleProps?: ButtonStyleProps;
}