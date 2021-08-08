
//alias
let Application = PIXI.Application;
// loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite;

let app = new Application(
  {
  width: 256,
  height: 256,
  antialias: true,
  resolution: 1
  
 }

);

document.body.appendChild(app.view);



PIXI.loader
  .add('../images/cat.png')
  .load(setup);


function setup() {
  //create sprite cat
  let cat = new Sprite(resources["../images/cat.png"].texture);


  //positionnement du sprite 1er methode
  // cat.x = 96;
  // cat.y = 96;

  // ou deuxieme methode
cat.position.set(96, 96);

// change la taille du sprite
cat.width = 80;
cat.height = 120;

//changer son echelle
cat.scale.set(0.5, 0.5);

//rotation sur le point xy (l'oreille)
//cat.rotation = 0.5;

//modification du point d'ancrage 
cat.anchor.set(0.5, 0.5);

cat.pivot.set(32,32);


app.stage.addChild(cat);

    // Object.keys(TextureCache).forEach(function(texture) {
    //   TextureCache[texture].destroy(true);
    // });

    // suppression de l'image
    //app.stage.removeChild(cat);
}