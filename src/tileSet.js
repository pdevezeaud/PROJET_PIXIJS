
//alias
let Application = PIXI.Application,
// loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite,
Rectangle = PIXI.Rectangle,
TextureCache = PIXI.utils.TextureCache

let app = new Application(
  {
  width: 192,
  height: 192,
  antialias: true,
  resolution: 1
  
 }

);

document.body.appendChild(app.view);



PIXI.loader
  .add('../images/tileset.png')
  .load(setup);


function setup() {
  //create sprite cat
let texture = TextureCache['../images/tileset.png'];


let rectangle = new Rectangle(320,320,64,64);

texture.frame = rectangle;

let bombe = new Sprite(texture);

bombe.x = 64;
bombe.y = 64;


app.stage.addChild(bombe);

app.renderer.render(app.stage);


}