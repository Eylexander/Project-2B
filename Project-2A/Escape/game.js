// Very fun game from Eylexander


kaboom({
    background: [
        Math.floor(Math.random()*255),
        Math.floor(Math.random()*255),
        Math.floor(Math.random()*255)
    ]
})
if (!isFocused()) { canvas.focus() }
loadSprite('bot', "../Basics/sprites/tnt_side.png")

function handleout() {
	return {
		id: "handleout",
		require: [ "pos" ],
		update() {
			const spos = this.screenPos()
			if (
				spos.x < 0 ||
				spos.x > width() ||
				spos.y < 0 ||
				spos.y > height()
			) {
				// triggers a custom event when out
				this.trigger("out")
			}
		},
	}
}

loop(0.25, () => {
    // const item = add([
    //     pos(mousePos()),
    //     sprite('Bot'),
    //     origin("center"),
    //     scale(rand(2, 3)),
    //     area(),
    //     body({ solid: false, }),
    //     lifespan(1, { fade: 0.5 }),
    //     move(choose([LEFT, RIGHT]), rand(60, 240)),
    // ])
    
    // item.jump(rand(320, 640))

    const center = vec2(width() / 2, height() / 2)
	const mpos = mousePos()
	add([
		pos(center),
		sprite("bot"),
		origin("center"),
        scale(rand(2,5)),
		// handleout(),
		"bot",
		{ dir: mpos.sub(center).unit(), },
	])
})

onUpdate("bot", (m) => {
    m.move(m.dir.scale(640))
})