// Original Game from Eylexander

// Params
let backx = 255;
let backy = 127;
let backz = 80;

const k = kaboom({
    // width: 40*32,
    // height: 20*32,
    scale: 1,
    startScene: "menu",
    debug: true,
    fullscreen: true,
    // stretch: true,
    // letterbox: true,
    background: [ backx, backy, backz],
    // canvas: document.querySelector("#sketch"),
});
if (!k.isFocused()) { canvas.focus() }
loadSprite("bot", "sprites/bookshelf.png");
loadSprite("ground", "sprites/jukebox_side.png");
loadSprite("enemy", "sprites/tnt_side.png");


k.scene("menu", () => {
    addButton("Start", vec2(window.innerWidth/2, window.innerHeight/2.5), () => main())
    addButton("Settings", vec2(window.innerWidth/2, window.innerHeight/1.9), () => params())
    addButton("Exit", vec2(window.innerWidth/2, window.innerHeight/1.5), () => exit())
    onUpdate(() => cursor("default"))
})

k.scene("params", () => {
    addButton("B", vec2(window.innerWidth/3, window.innerHeight/2), () => blue())
    addButton("G", vec2(window.innerWidth/2, window.innerHeight/2), () => green())
    addButton("O", vec2(window.innerWidth/1.5, window.innerHeight/2), () => orange())
    addButton("Play!", vec2(window.innerWidth/2, window.innerHeight/1.5), () => menu())
    onUpdate(() => cursor("default"))

    const t = time() * 10
    onKeyDown("space", () => {
        backx = rgb(
			wave(0, 255, t)
		);
        backy = rgb(
			wave(0, 255, t + 2)
		);
        backz = rgb(
			wave(0, 255, t + 4)
		);
    })

})

k.scene("exit", () => {
    const fail = add([
		text("You lose!"),
		pos(window.innerWidth/2, window.innerHeight/2),
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

    fail.onClick(() => menu())
    onKeyDown('space', () => {
        menu()
    })
    wait(2, () => {
        menu()
    })	
})

k.scene("main", () => {

    gravity(1000);
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
        "a": () => [
            sprite("enemy"),
            scale(px),
            area(),
            body({ jumpForce: 500}),
            "danger"
        ]
    })

    const char = get("char")[0]
    const enemy = get("danger")[0]

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
        go("exit")
    })

    char.onUpdate(() => {
		if (char.pos.y >= 480) {
			go("exit")
		}
	})

    loop(2, () => {
        if (enemy.isGrounded()) {
            enemy.jump()
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

function menu() { k.go("menu") }
function params() { k.go("params") }
function exit() { window.location.assign("../../docs/2a.html") }
function main() { k.go("main") }
function blue() {
    // k({background: [
    //     backx = 30,
    //     backy = 144,
    //     backz = 255,
    // ]})
    k.background = [30,144,255]
}
function green() {
    k({background: [
        backx = 50,
        backy = 205,
        backz = 50,
    ]})
}
function orange() {
    k({background: [
        backx = 255,
        backy = 127,
        backz = 80,
    ]})
}

menu()