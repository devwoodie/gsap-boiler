'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import {BaseAnimationProps} from '@/types/animationType';

gsap.registerPlugin(gsap);

export const ScaleIn = ({
                            children,
                            duration = 0.5,
                            delay = 0
                        }: BaseAnimationProps) => {
    const element = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!element.current) return;

            gsap.fromTo(
                element.current,
                {scale: 0, opacity: 0},
                {scale: 1, opacity: 1, duration, delay, ease: 'bounce.out'}
            );
        });

        return () => ctx.revert();
    }, [duration, delay]);

    return <div ref={element}>{children}</div>;
};
