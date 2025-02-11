'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {BaseAnimationProps} from '@/types/animationType';

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps extends BaseAnimationProps {
    y?: number;
    triggerPoint?: string;  // 트리거 위치 추가
}

export const FadeIn = ({
                           children,
                           duration = 1,
                           delay = 0,
                           y = 100,
                           triggerPoint = 'top 80%',  // 기본값 설정
                       }: FadeInProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!elementRef.current) return;

            gsap.fromTo(
                elementRef.current,
                {opacity: 0, y},
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: elementRef.current,
                        start: triggerPoint,
                        toggleActions: 'play none none reverse'  // 스크롤 올릴 때 다시 실행
                    }
                },
            );
        });

        return () => ctx.revert();
    }, [duration, delay, y, triggerPoint]);

    return <div ref={elementRef}>{children}</div>;
};