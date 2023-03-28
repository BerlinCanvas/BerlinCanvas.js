
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('helltuerkis'),
			chartFarben('gelb')
		],
		border_color: chartFarben('schwarz'),
		border_width: 0,
		rainbow: 'no',
		stacked: 'no'
	},
	barlabel:
	{
		display: ['no', 'no'],
		font_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		font_size: [12, 12],
		position_y: [-14, -14]
	},
	canvas:
	{
		document_id: document.getElementById('bc_2_discrete_bar_2_discrete_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 800
	},
	chart:
	{
		axis_labels:
		[
			[
				'01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
				'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
				'21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
				'31', '32', '33', '34', '35', '36', '37', '38', '39', '40'
			]
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line', 'line', 'bar', 'bar'],
		values:
		[
			[
				110, 112, 114, 116, 118, 120, 122, 124, 126, 128,
				130, 128, 126, 124, 122, 120, 118, 116, 114, 112,
				110, 112, 114, 116, 118, 120, 122, 124, 126, 128,
				130, 128, 126, 124, 122, 120, 118, 116, 114, 112
			],
			[
				70, 72, 74, 76, 78, 80, 82, 84, 86, 86,
				84, 82, 80, 82, 84, 86, 89, 92, 96, 96,
				96, 96, 96, 92, 89, 86, 84, 82, 80, 82,
				84, 86, 86, 84, 82, 80, 78, 76, 74, 72
			],
			[
				40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
				60, 58, 56, 54, 52, 50, 48, 46, 44, 42,
				40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
				60, 58, 56, 54, 52, 50, 48, 46, 44, 42
			],
			[
				10, 12, 14, 16, 18, 20, 22, 24, 26, 26,
				24, 22, 20, 22, 24, 26, 29, 32, 36, 36,
				36, 36, 36, 32, 29, 26, 24, 22, 20, 22,
				24, 26, 26, 24, 22, 20, 18, 16, 14, 12
			],
		]
	},
	grid:
	{
		background_color: chartFarben('hellgelb'),
		x:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 1
		},
		y:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 1
		},
		under_over_zero_line_color: chartFarben('grau')
	},
	legend:
	{
		display: 'yes',
		font_color: chartFarben('schwarz'),
		font_size: 16,
		labels: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('helltuerkis'),
			chartFarben('gelb')
		],
		border_color:
		[
			chartFarben('dunkelblau'),
			chartFarben('rosa'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [2, 2, 1, 1],
		position_y: [7, 7, 7, 7],
		radius: [3, 3, 10, 10],
		shape: ['discrete vertical', 'discrete vertical', 'rectangle', 'rectangle']
	},
	line:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no'],
		width: [0, 0]
	},
	linearea:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no'],
		fill_to: ['bottom', 'bottom']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_color:
		[
			chartFarben('dunkelblau', 7),
			chartFarben('rosa', 7)
		],
		border_width: [2, 2],
		display: ['yes', 'yes'],
		radius: [12, 12],
		rainbow: 'no',
		shape: ['discrete vertical', 'discrete vertical']
	},
	linepointlabel:
	{
		display: ['no', 'no'],
		font_color:
		[
			chartFarben('dunkelgrau'),
			chartFarben('dunkelgrau')
		],
		font_size: [12, 12],
		position_y: [0, 0]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('gruen')
		],
		font_size: [12],
		line_height: [1],
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_to_label_spacing: 5,
		tick_width: 1
	},
	yaxis:
	{
		font_color: chartFarben('dunkelgrau'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 20,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
