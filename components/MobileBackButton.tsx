'use client';

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import BackgroundTexture from "./BackgroundTexture";

export default function MobileBackButton() {
    const router = useRouter();
    const pathname = usePathname();

    // Only show on project pages
    const isProjectPage = pathname?.startsWith('/projects/');

    if (!isProjectPage) {
        return null;
    }

    const iconHoverAnimation = {
        x: -5,
        transition: { duration: 0.1, ease: "linear" },
    };

    return (
        <div className="lg:hidden fixed top-3 left-3 z-50">
            <motion.div
                className="bg-transparent"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <BackgroundTexture
                    className="flex items-center justify-center px-4 py-2 bg-white border-4 border-black rounded-full overflow-hidden"
                    scrollSpeedX={50}
                    scrollSpeedY={150}
                    // dotRadius={1}
                    dotOpacity={0}
                >
                    <motion.button
                        onClick={() => router.push('/')}
                        className="flex items-center justify-center"
                        whileHover={iconHoverAnimation}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IoArrowBack className="text-2xl text-black" />
                    </motion.button>
                </BackgroundTexture>
            </motion.div>
        </div>
    );
}
