'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {BaseAnimationProps} from '@/types/animationType';

gsap.registerPlugin(ScrollTrigger);

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface SlideInProps extends BaseAnimationProps {
    direction?: Direction;
    triggerOnce?: boolean;
    triggerPoint?: string;  // 트리거 포인트 추가
}

export const SlideIn = ({
                            children,
                            direction = 'left',
                            duration = 1,
                            delay = 0,
                            triggerOnce = true,
                            triggerPoint = 'top 50%',  // 기본값 설정
                        }: SlideInProps) => {
    const element = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!element.current) return;

            const xValue = direction === 'left' ? -200 : direction === 'right' ? 200 : 0;
            const yValue = direction === 'top' ? -200 : direction === 'bottom' ? 200 : 0;

            gsap.fromTo(
                element.current,
                {opacity: 0, x: xValue, y: yValue},
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration,
                    delay,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element.current,
                        start: triggerPoint,  // 트리거 포인트 적용
                        toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [direction, duration, delay, triggerOnce, triggerPoint]);  // 의존성 배열에 triggerPoint 추가

    return <div ref={element}>{children}</div>;
};