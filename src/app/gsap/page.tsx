"use client";

import {FadeIn} from "@/components/FadeIn";
import {ScaleIn} from "@/components/ScaleIn";
import {ScrollAnimation} from "@/components/ScrollParallax";
import {SlideIn} from "@/components/SlideIn";
import {TextTypo} from "@/components/TextTypo";

export default function GsapPage() {
    return (
        <div style={{minHeight: "500vh", textAlign: "center", fontSize: "20px"}}>
            <FadeIn delay={.5}>
                <div className="p-5 bg-amber-500">
                    Fade In Animation1
                </div>
            </FadeIn>
            <FadeIn delay={1}>
                <div className="p-5 bg-amber-400">
                    Fade In Animation2
                </div>
            </FadeIn>
            <ScaleIn delay={1.5} duration={1}>
                <div className="p-5 bg-blue-400">
                    Scale In Animation1
                </div>
            </ScaleIn>
            <ScaleIn delay={2} duration={1}>
                <div className="p-5 bg-blue-500">
                    Scale In Animation2
                </div>
            </ScaleIn>
            <SlideIn delay={2.5}>
                <div className="p-5 bg-green-400">
                    Slide In Animation1
                </div>
            </SlideIn>
            <SlideIn delay={3} direction="right">
                <div className="p-5 bg-green-500">
                    Slide In Animation2
                </div>
            </SlideIn>
            <TextTypo delay={3.5} duration={1} text="Text Typo Animation1"/>
            <TextTypo delay={4} duration={3} text="Text Typo Animation2"/>
            <div style={{marginTop: "500px"}}></div>
            <ScrollAnimation>Scroll Animation1</ScrollAnimation>
            <div style={{marginTop: "200px"}}></div>
            <ScrollAnimation>Scroll Animation2</ScrollAnimation>
            <div style={{marginTop: "200px"}}></div>
            <ScrollAnimation>Scroll Animation3</ScrollAnimation>
        </div>
    )
}