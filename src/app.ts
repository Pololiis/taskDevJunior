type Rectangle = {
    heigh: number;
    width: number;
}

const solarPanel: Rectangle = {
	heigh: 2,
	width: 1,
};

const roof: Rectangle = {
	heigh: 3,
	width: 5,
};

const solarPanelCalculator = (roof: Rectangle, solarPanel: Rectangle): number => {
	const { heigh: x, width: y } = roof;
	const { heigh: a, width: b } = solarPanel;

	if ((a > x && b > x) || (a > y && b > y)) {
		return 0;
	}

	const totalSolarPanels: number = Math.floor((x * y) / (a * b));

	return totalSolarPanels;
};

const totalSolarPanels: number = solarPanelCalculator(roof, solarPanel);

console.log(totalSolarPanels);