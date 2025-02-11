import { FadeIn } from "@/components/FadeIn";
import { ScaleIn } from "@/components/ScaleIn";
import { ScrollWidthAnimation } from "@/components/ScrollWidthContent";
import { SlideIn } from "@/components/SlideIn";
import { TextTypo } from "@/components/TextTypo";

export default function DemoPage() {
    return(
        <div style={{minHeight: "500vh", textAlign: "center", fontSize: "20px", overflowX: "hidden"}}>
            <div className="mt-48"></div>
            <div>
                <FadeIn><h2 className="text-5xl text-bold">DEMO</h2></FadeIn>
                <ScrollWidthAnimation className="bg-gray-500 mt-6 py-52 mx-auto">IMAGE</ScrollWidthAnimation>
            </div>
            <div className="mt-32"></div>
            <FadeIn>
                <div className="p-5 text-4xl text-bold">
                    TITLE 1
                </div>
            </FadeIn>
            <div className="flex mt-12 justify-around items-center">
                <FadeIn delay={0.5} triggerPoint="top 80%">
                    <div className="text-2xl text-bold bg-gray-300 w-[400px] h-[500px]">IMAGE1</div>
                </FadeIn>
                <FadeIn delay={0.5} triggerPoint="top 70%">
                    <div className="text-2xl text-bold bg-gray-400 w-[400px] h-[500px]">IMAGE2</div>
                </FadeIn>
                <FadeIn delay={0.5} triggerPoint="top 60%">
                    <div className="text-2xl text-bold bg-gray-500 w-[400px] h-[500px]">IMAGE3</div>
                </FadeIn>
            </div>
            <div className="mt-32"></div>
            <FadeIn>
                <div className="p-5 text-4xl text-bold">
                    TITLE 2
                </div>
            </FadeIn>
            <div className="mt-12"></div>
            <SlideIn>
                <div className="p-10 bg-gray-500">
                    Slide In Animation1
                </div>
            </SlideIn>
            <div className="mt-12"></div>
            <SlideIn direction="right">
                <div className="p-10 bg-gray-400">
                    Slide In Animation2
                </div>
            </SlideIn>
            <div className="mt-32"></div>
            <TextTypo
                text="TITLE TITLE TITLE 3"
                duration={1.5}
                triggerPoint="top 50%"  // 화면의 70% 지점에서 트리거
            />
            <ScrollWidthAnimation className="bg-gray-500 mt-6 py-52 mx-auto">IMAGE</ScrollWidthAnimation>
        </div>
    )
}