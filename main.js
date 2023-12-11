// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas')


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Termine de programar a função new_image() para adicionar uma nova imagem
function new_image(get_image)
{
	fabric.image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidht(block_image_width);
	block_image_object.scaleToheight(block_image_height);
	block_image_object.set({top:block_y,left:block_x});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	if(keyPressed == '82') 
	{
		block_x=10;
		new_image('vermelho.jpg')
		console.log('R')
	}
	if(keyPressed =='71')
	{
		block_x=310;
		new_image('verde.png');
		console.log('G')
	}
	if(keyPressed =='89' )
	{
		block_x = 560;
		new_image('amarelo.png');
		console.log('Y')
	}
	if(keyPressed =='80' )
	{
	block_x= 880;
	new_image('rosa.png');
	console.log('P')
	}
	if(keyPressed == '66')
	{
    block_x = 1040;
	new_image('azul.png');
	console.log('B')
	}
	
}

