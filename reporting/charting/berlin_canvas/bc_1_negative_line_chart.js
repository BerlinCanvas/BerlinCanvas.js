
var canvas_properties = {

	bar:
	{
	},
	barlabel:
	{
	},
	canvas:
	{
		document_id: document.getElementById('bc_1_negative_line_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			[
				'Sparte', 'Sparte', 'Sparte', 'Sparte',
				'Sparte', 'Sparte', 'Sparte', 'Sparte'
			],
			['1', '2', '3', '4', '5', '6', '7', '8']
		],
		chart_to_values_spacing: 'yes',
		orientation: 'vertical',
		types: ['line'],
		values:
		[
			[-27, 22, -45, 11, -34, 30, -24, 25]
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
		display: 'no',
		font_color: chartFarben('schwarz'),
		font_size: 16,
		labels: ['Negative Werte'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('weiss')
		],
		border_color:
		[
			chartFarben('schwarz')
		],
		border_width: [1],
		position_y: [7],
		radius: [6],
		shape: ['circle']
	},
	line:
	{
		color:
		[
			chartFarben('blau', 8)
		],
		display: ['yes'],
		width: [4]
	},
	linearea:
	{
		color:
		[
			chartFarben('hellgrau', 3)
		],
		display: ['yes'],
		fill_to: ['line']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('weiss', 9)
		],
		border_color:
		[
			chartFarben('hellgrau', 5)
		],
		border_width: [2],
		display: ['yes'],
		radius: [16],
		rainbow: 'no',
		shape: ['circle']
	},
	linepointlabel:
	{
		display: ['yes'],
		font_color:
		[
			chartFarben('schwarz')
		],
		font_size: [16],
		position_y: [0]
	},
	xaxis:
	{
		font_color:
		[
			chartFarben('dunkelgrau'),
			chartFarben('dunkelblau')
		],
		font_size: [12, 16],
		line_height: [1.5, 1],
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
		tick_step_size: 15,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
