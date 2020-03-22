var chart = Highcharts.chart('tra-container', {
		title: {
				text: 'The Trajectory of confirmed, dead and cured cases'
		},
		subtitle: {
				text: 'Source: NHCPRC, Chixiang, Dingxiang Doctor, Baidu'
		},
		xAxis: {
		type: 'datetime',
		dateTimeLabelFormats: {
				day: ''
		}
		},
		yAxis: {
				title: {
						text: ''
				}
		},
		legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle'
		},
		plotOptions: {
				series: {
						label: {
								connectorAllowed: false
						},
						pointStart: Date.UTC(2020, 0, 19),
		        pointInterval: 24 * 3600 * 1000 // one day

				}
		},
		series: [{
				name: 'Total confirmed cases',
				data: [1, 293, 435, 568, 866,	1335, 2015, 2780, 4533, 6010, 7738, 9713, 11819, 14407, 17237, 20467, 24362, 28067, 31208, 34611, 37249, 40221, 42706, 44729, 59878, 63932, 66573, 68579, 70631, 72527, 74276, 74671, 75566, 76391, 77040, 77261, 77778, 78189, 78629, 78632, 79389, 79600, 79971, 80174, 80302, 80422, 80565, 80714, 80813, 80859, 80904, 80924, 80963, 80980, 81003, 81026, 81048, 81078, 81133, 81151, 81416]
		}, {
				name: 'Total dead cases',
				data: [0, 6, 9,	17, 25, 42, 56, 80, 106, 132, 170, 213, 259, 304, 361, 425, 491, 564, 637, 723, 812, 909, 1017, 1114, 1367, 1489, 1524, 1666, 1772, 1870, 2006, 2120, 2239, 2348, 2445, 2595, 2666, 2718,	2747, 2747, 2838, 2850, 2873, 2915, 2946, 2984, 3015, 3045, 3073, 3100, 3123, 3140, 3162, 3173, 3181, 3194, 3204, 3218, 3231, 3242, 3261]
		}, {
				name: 'Total cured cases',
				data: [0, 25, 28, 28, 32, 36, 49, 51, 60, 103, 125, 170, 241, 330, 478, 643, 891, 1146, 1520, 2042, 2649, 3273, 3994, 4738, 5911, 6992, 8093, 9413, 10850, 12556, 14377, 16152, 18265, 20673, 22907, 24757, 27349, 29765, 32531, 35604, 39081, 40256, 41712, 44518, 47260, 49914, 52109, 53821, 55487, 57147, 58684, 59982, 61573, 62887, 64219, 65649, 67022, 67863, 68800, 69725, 71876]
		},
	],
		responsive: {
				rules: [{
						condition: {
								maxWidth: 500
						},
						chartOptions: {
								legend: {
										layout: 'horizontal',
										align: 'center',
										verticalAlign: 'bottom'
								}
						}
				}]
		}
});
