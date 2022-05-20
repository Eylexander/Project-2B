// Very fun game from Eylexander

kaboom()
if (!isFocused()) { canvas.focus() }
loadSprite('Bot', "../Basics/sprites/tnt_side.png")


loop(0.25, () => {
    const item = add([
        pos(mousePos()),
        sprite('Bot'),
        origin("center"),
        scale(rand(2, 3)),
        area(),
        body({ solid: false, }),
        lifespan(1, { fade: 0.5 }),
        move(choose([LEFT, RIGHT]), rand(60, 240)),
    ])
    
    item.jump(rand(320, 640))
})
