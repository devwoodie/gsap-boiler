'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

interface TypingTextProps {
    text: string;
    duration?: number;
    delay?: number;
    triggerPoint?: string;  // 트리거 포인트 추가
}

export const TextTypo = ({
                             text,
                             duration = 0.8,
                             delay = 0,
                             triggerPoint = 'top 80%'  // 기본값 설정
                         }: TypingTextProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!textRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                {text: ''},
                {
                    text,
                    duration,
                    delay,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: triggerPoint,
                        toggleActions: 'play none none reset'  // 스크롤 올릴 때 리셋
                    }
                }
            );
        });

        return () => ctx.revert();
    }, [text, duration, delay, triggerPoint]);

    return <div ref={textRef} className="text-2xl font-bold"></div>;
}