import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/CountUp";
import GradientText from "@/components/ui/GradientText";
import { cn } from "@/lib/utils";

export default function LandingPage({ totalDonated, goToHome }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="w-screen h-screen">
        <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
          <div className={cn(
            "absolute inset-0 z-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}/>
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
            >
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1 text-6xl md:text-8xl font-bold">
                  <CountUp
                    from={0}
                    to={totalDonated * 1000000}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span> Gwei funded</span>
                </div>
              </div>
            </GradientText>
            <Button variant="outline" className="mt-10" onClick={goToHome}>
              Donate now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}