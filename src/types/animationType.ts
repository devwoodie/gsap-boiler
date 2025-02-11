import {ReactNode} from 'react'

export interface BaseAnimationProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    className?: string;
}