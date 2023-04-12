
var farben_RGB = {
	blau: '73, 157, 242',
	dunkelblau: '57, 124, 191',
	dunkelgrau: '102, 102, 102',
	dunkelgruen: '63, 140, 89',
	dunkelrosa: '153, 77, 102',
	dunkeltuerkis: '46, 153, 153',
	dunkeltuerkisgruen: '63, 140, 114',
	gelb: '252, 212, 88',
	grau: '153, 153, 153',
	gruen: '97, 166, 83',
	hellblau: '128, 212, 255',
	hellblaugrau: '133, 205, 242',
	hellgelb: '254, 251, 241',
	hellgrau: '200, 200, 200',
	hellgraugelb: '235, 232, 223',
	hellgruen: '136, 204, 122',
	hellrosa: '250, 187, 208',
	helltuerkis: '143, 204, 194',
	lichtgrau: '230, 230, 230',
	lila: '122, 92, 153',
	orange: '255, 153, 51',
	rosa: '217, 108, 145',
	rot: '204, 82, 82',
	schwarz: '0, 0, 0',
	tooltip: '254, 241, 203',
	tuerkis: '54, 179, 179',
	weiss: '255, 255, 255'
};

function chartFarben(farbe, transparenz)
{
	var ausgabe = 'rgba(' + farben_RGB[farbe] + ', 1)';

	if(transparenz != null)
	{
		ausgabe = 'rgba(' + farben_RGB[farbe] + ', 0.' + transparenz + ')';
	}

	return ausgabe;
}
