// Original game from Eylexander

kaboom({
    background: [0,0,0]
})
if (!isFocused()) { canvas.focus() }

scene("game", () => {
    add([
      rect(1, 400),
      pos(233, 100),
    ]);
  
    add([
      rect(1, 400),
      pos(366, 100),
    ]);
  
    add([
      rect(400, 1),
      pos(100, 233),
    ]);
  
    add([
      rect(400, 1),
      pos(100, 366),
    ]);
})