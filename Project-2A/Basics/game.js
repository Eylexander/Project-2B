// Original Game from Eylexander

// Params
kaboom({
    // width: 40*32,
    // height: 20*32,
    scale: 1,
    // startScene: "main",
    debug: true,
    fullscreen: true,
    // stretch: true,
    // letterbox: true,
    background: [ 255, 127, 0],
    // canvas: "sketch-holder",
});
if (!isFocused()) { canvas.focus() }
loadSprite("bot", "sprites/bookshelf.png");
loadSprite("ground", "sprites/jukebox_side.png");
loadSprite("enemy", "sprites/tnt_side.png");


scene("menu", () => {
    addButton("Start", vec2(700, 250), () => main())
    addButton("Lose", vec2(700, 350), () => lose())
    onUpdate(() => cursor("default"))
})

scene("lose", () => {
    const fail = add([
		text("You lose!"),
		pos(700, 300),
		area({ cursor: "pointer", }),
		scale(1),
		origin("center"),
	])
    fail.onUpdate(() => {
		const t = time() * 10
		fail.color = rgb(
			wave(0, 255, t),
			wave(0, 255, t + 2),
			wave(0, 255, t + 4),
		)
		fail.scale = vec2(1.2)
	})
	wait(2, () => {
        menu()
    })
})

scene("main", () => {

    gravity(2000);
    var SPEED = 200;
    var px = 4;
    let pv = 100;

    const level = addLevel([
        "xxxxxxxxx",
        "x       x",
        "x    a   ",
        "x p      ",
        "x       x",
        "xxxxxxxxx",
    ], {
        width: 64,
        height: 64,
        pos: vec2(100, 200),
        "p": () => [
            sprite('bot'),
            pos(10, 10),
            scale(px),
            area(),
            body(),
            health(pv),
            "char",
        ],
        "x": () => [
            sprite("ground"),
            solid(),
            area(),
            scale(px)
        ],
        "@": () => [
            sprite("enemy"),
            area(),
            scale(px),
            "danger",
        ],
        "a": () => [
            sprite("enemy"),
            scale(px),
            area(),
            body(),
            "danger"
        ]
    })

    const char = get("char")[0]

    onKeyDown('d' , () => {
        char.move(SPEED, 0)
    })
    onKeyDown('q' , () => {
        char.move(-SPEED, 0)
    })
    onKeyDown('z' , () => {
        if (char.isGrounded()) {
            char.jump()
        }
    })
    onKeyDown('space' , () => {
        if (char.isGrounded()) {
            char.jump()
        }
    })

    const score = add([
        text(pv),
        pos(12, 12),
        fixed(),
        { value: pv },
    ])
    
    char.onCollide('danger', () => {
        score.value -= 50;
        score.text = score.value;
        char.hurt(50)
    });
    
    char.on("death", () => {
        destroy(char)
        go("lose")
    })

    char.onUpdate(() => {
		if (char.pos.y >= 480) {
			go("lose")
		}
	})
})

function addButton(txt, p, f) {
	const btn = add([
		text(txt),
		pos(p),
		area({ cursor: "pointer", }),
		scale(1),
		origin("center"),
	])

	btn.onClick(f)

	btn.onUpdate(() => {
		if (btn.isHovering()) {
			const t = time() * 10
			btn.color = rgb(
				wave(0, 255, t),
				wave(0, 255, t + 2),
				wave(0, 255, t + 4),
			)
			btn.scale = vec2(1.2)
		} else {
			btn.scale = vec2(1)
			btn.color = rgb()
		}
	})
}

function menu() { go("menu") }
function lose() { go("lose") }
function main() { go("main") }

menu()