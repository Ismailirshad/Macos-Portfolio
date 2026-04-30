import { motion } from "framer-motion";
import dayjs from 'dayjs';

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <motion.span key={i}
            className={className}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03, duration: 2 }}
            style={{ fontVariationSettings: `whgt ${baseWeight}` }}
        >
            {char == " " ? '\u00A0' : char}
        </motion.span>
    ))
}
const Welcome = () => {

    return (
        <section id="welcome">
            <time className="absolute -top-54 left-1/2 -translate-x-1/2 flex items-start">
                <span className="text-[110px] font-light text-gray-100 drop-shadow-lg">
                    {dayjs().format("h:mm")}
                </span>

                <span className="text-3xl font-medium text-gray-300 mt-25 tracking-wide">
                    {dayjs().format("A")}
                </span>
            </time>
            <p>
                {renderText(
                    "Hey I'am Irshad! Welcome to my",
                    "text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-georama font-medium tracking-wide drop-shadow-md",
                    100,
                )}
            </p>

            <motion.h1>
                {renderText(
                    "Portfolio",
                    "text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-green-400 to-emerald-300 text-transparent bg-clip-text font-georama font-bold tracking-tight drop-shadow-lg"
                )}
            </motion.h1>
            <div className="small-screen">
                <p className="text-slate-100">This Portfolio is designed for desktop/tabled screens only</p>
            </div>
        </section>
    )
}

export default Welcome
