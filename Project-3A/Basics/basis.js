function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder');
}

function triangles(x, y, size, frame) {
  for (let i = 0; i <frame.width; i+= (frame.width/size)){
    for (let j = 0; j <frame.height; j+= (frame.width/size)){

      frame.fill(randList(col));
      frame.noStroke(255);
      frame.beginShape();
      frame.fill(randList(col))

      a = fxrand()
      if(a<0.2){
        print("Bottom right")
        frame.vertex(i+(frame.width/size),j+(frame.width/size));
        frame.vertex(i+(frame.width/size),j);
        frame.vertex(i,j+(frame.width/size));
        frame.endShape(CLOSE);
      }
      else if(a<0.4){
        print("Upper Left")
        frame.vertex(i,j+(frame.width/size));
        frame.vertex(i+(frame.width/size),j);
        frame.vertex(i+(frame.width/size),j+(frame.width/size));
        frame.endShape(CLOSE);
      }
      else if(a<0.6){
        print("Bottom Left")
        frame.vertex(i,j+(frame.width/size));
        frame.vertex(i+(frame.width/size),j+(frame.width/size));
        frame.vertex(i,j);
        frame.endShape(CLOSE);
      }
      else if(a<0.8){
        print("Upper Right")
        frame.vertex(i+(frame.width/size),j);
        frame.vertex(i+(frame.width/size),j+(frame.width/size));
        frame.vertex(i,j);
        frame.endShape(CLOSE);
      }
      else{
        frame.vertex(i,j+j);
        frame.vertex(i*2,j);
        frame.vertex(i,j);
        frame.endShape(CLOSE);
      }
    }
  }
}