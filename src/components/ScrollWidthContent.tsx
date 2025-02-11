'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { BaseAnimationProps } from '@/types/animationType';

gsap.registerPlugin(ScrollTrigger);

interface ScrollWidthAnimationProps extends BaseAnimationProps {
    triggerPoint?: string;
    minWidth?: string;
    maxWidth?: string;
}

export const ScrollWidthAnimation = ({
                                         children,
                                         triggerPoint = 'top 25%',
                                         duration = 1,
                                         delay = 0,
                                         minWidth = '60%',  // 기본값 60%
                                         maxWidth = '100%', // 기본값 100%
                                         className
                                     }: ScrollWidthAnimationProps) => {
    const element = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!element.current) return;

            // 초기 스타일 설정
            gsap.set(element.current, {
                width: maxWidth,
            });

            // 스크롤 애니메이션
            gsap.to(element.current, {
                width: minWidth,
                duration,
                delay,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: element.current,
                    start: triggerPoint,
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse', // 스크롤 올릴 때 원상복구
                    scrub: 1, // 스크롤과 함께 부드럽게 애니메이션
                },
            });
        });

        return () => ctx.revert();
    }, [triggerPoint, duration, delay, minWidth, maxWidth]);

    return (
        <div ref={element} style={{ width: maxWidth }} className={className}>
            {children}
        </div>
    );
};