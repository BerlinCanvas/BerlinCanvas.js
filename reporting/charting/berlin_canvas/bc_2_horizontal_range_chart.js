
var canvas_properties = {

	bar:
	{
	},
	barlabel:
	{
	},
	canvas:
	{
		document_id: document.getElementById('bc_2_horizontal_range_chart'),
		font_family: 'Calibri, Arial, Helvetica',
		height: 350,
		width: 700
	},
	chart:
	{
		axis_labels:
		[
			['Jan 22', 'Feb 22', 'Mrz 22', 'Apr 22', 'Mai 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sep 22', 'Okt 22', 'Nov 22', 'Dez 22']
		],
		chart_to_values_spacing: 'yes',
		orientation: 'horizontal',
		types: ['line', 'line', 'line', 'line'],
		values:
		[
			[50, 85, 90, 75, 55, 65, 46, 65, 35, 75, 62, 85],
			[140, 160, 140, 120, 100, 90, 80, 105, 125, 95, 120, 150],
			[220, 230, 210, 195, 190, 172, 155, 175, 195, 185, 225, 240],
			[240, 250, 240, 265, 225, 230, 220, 210, 245, 300, 250, 260]
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
		labels: ['Range Set 1', 'Range Set 2'],
		legend_to_chart_spacing: 50,
		line_height: 2.25,
		point_to_label_spacing: 8
	},
	legendpoint:
	{
		background_color:
		[
			chartFarben('dunkeltuerkisgruen'),
			chartFarben('gruen')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [1, 1],
		position_y: [7, 7],
		radius: [11, 11],
		shape: ['rectangle', 'rectangle']
	},
	line:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no', 'no', 'no'],
		width: [0, 0, 0, 0]
	},
	linearea:
	{
		color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		display: ['no', 'no', 'no', 'no'],
		fill_to: ['bottom', 'bottom', 'bottom', 'bottom']
	},
	linepoint:
	{
		background_color:
		[
			chartFarben('dunkeltuerkisgruen'),
			chartFarben('schwarz'),
			chartFarben('gruen'),
			chartFarben('schwarz')
		],
		border_color:
		[
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz'),
			chartFarben('schwarz')
		],
		border_width: [0, 0, 0, 0],
		display: ['yes', 'no', 'yes', 'no'],
		radius: [14, 0, 14, 0],
		rainbow: 'no',
		shape: ['range', 'circle', 'range', 'circle']
	},
	linepointlabel:
	{
		display: ['yes', 'yes', 'yes', 'yes'],
		font_color:
		[
			chartFarben('dunkelgrau'),
			chartFarben('dunkelgrau'),
			chartFarben('dunkelgrau'),
			chartFarben('dunkelgrau')
		],
		font_size: [16, 16, 16, 16],
		position_x: [-6, 6, -6, 6]
	},
	xaxis:
	{
		font_color: chartFarben('dunkelgrau'),
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_step_size: 50,
		tick_to_label_spacing: 5,
		tick_width: 1
	},
	yaxis:
	{
		font_color:
		[
			chartFarben('dunkeltuerkisgruen')
		],
		font_size: 16,
		tick_color: chartFarben('lichtgrau'),
		tick_length: 10,
		tick_to_label_spacing: 5,
		tick_width: 1
	}
};

berlin_canvas_chart(canvas_properties);
