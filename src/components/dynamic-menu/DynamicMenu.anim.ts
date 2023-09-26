export const menuWrapper = {
	initial: {
		width: 150,
		height: 40,
		borderRadius: 20,
	},
	click: (count: number) => ({
		width: 250,
		height: 40 + count * 34 + 12,
		borderRadius: 30,
	}),
};

export const menuContainer = {
	initial: {
		opacity: 0,
		height: 0,
		margin: 0,
	},
	click: (custom: any[]) => ({
		opacity: 1,
		height: 'auto',
		margin: custom[1] === 'down' ? '0 0 1rem 0' : '1rem 0 0 0',
		transition: {
			staggerChildren: 0.15 / custom[0],
			staggerDirection: custom[1] === 'down' ? 1 : -1,
			delayChildren: 0.15,
		},
	}),
};

export const item = {
	initial: {
		scale: 0,
	},
	click: {
		scale: 1,
		transition: {
			type: 'spring',
			bounce: 0.35,
		},
	},
};
