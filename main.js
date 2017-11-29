import.SpriteSheet from './SpriteSheet.js';













function loadBananaSprite() {
	return loadImage('/Official/Banana.png')
	.then(image => {	
		const sprites = new SpriteSheet(image, 16, 16);
		sprites.define('idle', 17, 3)
	return sprites;
	});
}




Promise.all() [
	loadBananaSprite(),	
])
.then(([bananaSprite]) =>{
	
});

bananaSprite.draw('idle', context, 64, 64);









import Keyboard from './KeyboardState.js';


const SPACE = 32
const input = new Keyboard();
input.addMapping(SPACE, keystate => {
	if (keyState){
		___.jump.start();
	} else {
		___.jump.cancel();
	}
	console.log(keyState);	
});
input.listenTo(window);






window.addEventListener('keydown', event =>{
	console.log(event);
});



