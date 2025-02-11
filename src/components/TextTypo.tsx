'use client';

import {useLayoutEffect, useRef} from 'react';
import gsap from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface TypingTextProps {
    text: string;
    duration?: number;
    delay?: number;
}

export const TextTypo = ({
                             text,
                             duration = 0.8,
                             delay = 0
                         }: TypingTextProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!textRef.current) return;
        if (!textRef.current) return;

        gsap.fromTo(
            textRef.current,
            {text: ''},
            {text, duration, delay, ease: 'power1.out'}
        );
    }, [text, duration, delay]);

    return <div ref={textRef} className="text-2xl font-bold"></div>;
}