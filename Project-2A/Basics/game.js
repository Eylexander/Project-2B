kaboom({
    // width: 420,
    // height: 340,
    scale: 1,
    // startScene: "main",
    debug: true,
    fullscreen: false,
    background: [ 255, 127, 0],
});

loadSprite("bot", "http://eylexanders.ddns.net/Project-2A/Basics/sprites/bookshelf.png")
loadSprite("ground", "/sprites/jukebox_side.png")
loadSprite("enemy", "/sprites/tnt_side.png")

var SPEED = 200;
gravity(2400)
var pv = 100;

if (!isFocused()) {
    focus()
}


// define a level
const level = addLevel([
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "x                                         x",
    "x                                         x",
    "x                                 @       x",
    "x             @                           x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                         @               x",
    "x                                         x",
    "x   @                                     x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                         x",
    "x                                       a x",
    "x                                         x",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    ], {
        width: 32,
        height: 32,
        pos: vec2(100, 200),
        "x": () => [
            k.sprite("ground"),
            k.solid(),
            k.area(),
            k.scale(2)
        ],
        "@": () => [
            k.sprite("enemy"),
            k.area(),
            k.scale(2),
            "danger",
        ],
        "a": () => [
            k.sprite("enemy"),
            k.scale(2),
            k.area(),
            k.body(),
            "danger"
        ]
    });

const char = add([
    sprite('bot'),
    pos(10, 10),
    scale(2),
    area(),
    body(),
]);

const score = add([
    text(pv),
    pos(12, 12),
    fixed(),
])

k.onKeyDown('d' , () => {
    char.move(SPEED, 0)
})

k.onKeyDown('q' , () => {
    char.move(-SPEED, 0)
})

k.onKeyDown('z' , () => {
    if (char.isGrounded()) {
		char.jump()
	}
})

char.onCollide('danger', () => {
    pv = pv-50;
    if (pv <= 0) {
        destroy(char)
    }
});