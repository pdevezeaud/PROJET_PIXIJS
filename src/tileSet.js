
//alias
let Application = PIXI.Application;
// loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite;
Rectangle = PIXI.Rectangle

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


let rectangle = new Rectangle(192, 128, 64, 64);

texture.frame = rectangle;

let rocket = new Sprite(texture);

rocket.x = 32;
rocket.y = 32;


app.stage.addChild(rocket);

app.renderer.render(app.stage);


}