export const iconAnim = {
	hover: {
		color: '#157C95',
		fill: '#157C95',
		y: 0,
		filter: 'drop-shadow(0px 2px 10px rgba(117, 212, 232,1))',
		transition: {
			type: 'spring',
			stiffness: 150,
		},
	},
	initial: {
		color: '#5D606F',
		fill: '#5D606F',
		y: 8,
		filter: 'drop-shadow(0px 0px 0px rgba(117, 212, 232,0))',
		transition: {
			type: 'spring',
			stiffness: 130,
		},
	},
};

export const labelAnim = {
	hover: {
		color: '#157C95',
		fill: '#157C95',
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 150,
		},
	},
	initial: {
		color: '#5D606F',
		fill: '#5D606F',
		opacity: 0,
		y: -8,
		transition: {
			type: 'spring',
			stiffness: 130,
		},
	},
};
