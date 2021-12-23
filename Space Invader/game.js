const k = kaboom()

k.onKeyPress(() => k.add([sprite("../Basics/sprites/bot.png"), pos(onMouseMove, onMouseMove), body()]))
k.onMouseMove(() => k.add([sprite("../Basics/sprites/bot.png"), pos(onMouseMove, onMouseMove), body()]))