'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {BaseAnimationProps} from '@/types/animationType';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps extends BaseAnimationProps {
    triggerPoint?: string;
}

export const ScrollAnimation = ({
                                    children,
                                    triggerPoint = 'top 25%',
                                    duration = 1,
                                    delay = 0,
                                }: ScrollAnimationProps) => {
    const element = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!element.current) return;

            gsap.fromTo(
                element.current,
                {y: 50, opacity: 0},
                {
                    y: 0,
                    opacity: 1,
                    duration,
                    delay,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element.current,
                        start: triggerPoint,
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [triggerPoint, duration, delay]);

    return <div ref={element}>{children}</div>;
};
