"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInOnView = ({
	children,
	delay = 0,
	amount = 0.4,
	stagger = 0.15,
	once = true,
	className = "",
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount, once });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: stagger,
						delayChildren: delay,
					},
				},
			}}
			className={className}
		>
			{/* Chaque enfant recevra l’animation fade+blur+slide */}
			{Array.isArray(children) ? (
				children.map((child, i) => (
					<motion.div
						key={i}
						variants={{
							hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
							visible: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)",
								transition: {
									duration: 0.5,
									ease: "easeOut",
								},
							},
						}}
					>
						{child}
					</motion.div>
				))
			) : (
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
						visible: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							transition: {
								duration: 0.5,
								ease: "easeOut",
								delay,
							},
						},
					}}
				>
					{children}
				</motion.div>
			)}
		</motion.div>
	);
};

export default FadeInOnView;
