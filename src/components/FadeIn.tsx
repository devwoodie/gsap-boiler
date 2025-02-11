'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {BaseAnimationProps} from '@/types/animationType';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps extends BaseAnimationProps {
    y?: number;
}

export const FadeIn = ({
                           children,
                           duration = 1,
                           delay = 0,
                           y = 50,
                       }: FadeInProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!elementRef.current) return;

            gsap.fromTo(
                elementRef.current,
                {opacity: 0, y},
                {opacity: 1, y: 0, duration, delay, ease: 'power2.out'}
            );
        });

        return () => ctx.revert();
    }, [duration, delay, y]);

    return <div ref={elementRef}>{children}</div>;
};