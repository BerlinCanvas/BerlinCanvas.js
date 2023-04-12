
var canvas_properties = {

	bar:
	{
		background_color:
		[
			chartFarben('dunkelblau'),
			chartFarben('tuerkis'),
			chartFarben('rosa'),
			chartFarben('gruen')
		],
		border_color: chartFarben('schwarz'),
		border_width: 0,
		rainbow: 'no',
		stacked: 'yes'
	},
	barlabel:
	{
		display: ['yes', 'yes', 'yes', 'yes'],
		font_color:
		[
			chartFarben('weiss'),
			chartFarben('weiss'),
			chartFarben('weiss'),
			chartFarben('weiss')
		],
		font_size: [16, 16, 16, 16],
		position_x: [-5, -5, -5, -5]
	},
	canvas:
	{
		document_id: document.getElementById('bc_4_negative_stacked_horizontal_bar_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[
				'Sparte 1', 'Sparte 2', 'Sparte 3', 'Sparte 4',
				'Sparte 5', 'Sparte 6', 'Sparte 7', 'Sparte 8'
			]
		],
		chart_to_values_spacing: 'no',
		orientation: 'horizontal',
		types: ['bar', 'bar', 'bar', 'bar'],
		values:
		[
			[-10, 44, -53, 19, -34, 54, -34, 46],
			[-27, 54, -15, -17, 16, 14, -10, -20],
			[-22, 17, 30, -45, -11, 33, -30, 26],
			[-22, -17, -32, 51, -25, 49, -17, 9]
		]
	},
	grid:
	{
		background_color: chartFarben('hellgelb'),
		x:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 5
		},
		y:
		{
			display: 'yes',
			line_color: chartFarben('lichtgrau'),
			line_width: 1
		},
		under_over_zero_line_color: chartFarben('hellgrau')
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
			chartFarben('dunkelblau'),
			chartFarben('tuerkis'),
			chartFarben('rosa'),
			chartFarben('gruen')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [1, 1, 1, 1],
		position_y: [7, 7, 7, 7],
		radius: [11, 11, 11, 11],
		shape: ['rectangle', 'rectangle', 'rectangle', 'rectangle']
	},
	line:
	{
	},
	linearea:
	{
	},
	linepoint:
	{
	},
	linepointlabel:
	{
	},
	xaxis:
	{
		font_color: chartFarben('dunkelgrau'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 12,
		tick_step_size: 50,
		tick_to_label_spacing: 10,
		tick_width: 5
	},
	yaxis:
	{
		font_color:
		[
			chartFarben('dunkeltuerkisgruen')
		],
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 12,
		tick_to_label_spacing: 10,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
