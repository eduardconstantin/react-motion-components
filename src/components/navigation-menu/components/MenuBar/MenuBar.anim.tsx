export const menuAnim = {
	open: {
		opacity: 1,
		rotateX: 0,
		translateZ: 0,
		transition: {
			rotateX: { delay: 0.15, type: 'spring', stiffness: 150, mass: 1 },
			duration: 0.4,
		},
	},
	closed: {
		opacity: 0,
		rotateX: -40,
		translateZ: -300,
		transition: {
			rotateX: { delay: 0.2, type: 'spring', stiffness: 130 },
			duration: 0.5,
		},
	},
};
