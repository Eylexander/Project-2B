const k = kaboom({
    // width: 420,
    // height: 340,
    scale: 1,
    startScene: "main",
    debug: true,
    fullscreen: false,
    background: [ 255, 127, 0],
});

if (!k.isFocused()) {
    k.focus()
}

k.loadSprite('bot', 'sprites/bookshelf.png');
k.loadSprite('ground', './sprites/jukebox_side.png');
k.loadSprite('enemy', './sprites/tnt_side.png');
var SPEED = 200;
var pv = 100;

// define a level
k.addLevel([
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

const char = k.add([
    k.sprite('bot'),
    k.pos(10, 10),
    k.scale(2),
    k.area(),
    k.body(),
]);

const score = k.add([
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
    char.jump()
})

char.collides('danger', () => {
    pv = pv-50;
    if (pv <= 0) {
        k.destroy(char)
    }
});