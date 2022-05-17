let gTSd = 60; // px dimension of (square) tile side
let gRows;
let gCols;
let gHMrgn;
let gVMrgn;
let gDrwLp;
let gBgColor;
//let gLnPrCnt = .2;
//let this.lnTh;
//let gTr;
let tiles = [];

function setup() {
	rectMode(CENTER);
	frameRate();
	noStroke();
	gBgColor = color(220, 220, 0);
	gCols = int(windowWidth / gTSd);
	gHMrgn = (windowWidth - gCols * gTSd) / 2;
	//	print("WWDTH", windowWidth, "CLS", gCols, "GHMRGN", gHMrgn);
	gRows = int(windowHeight / gTSd);
	gVMrgn = (windowHeight - gRows * gTSd) / 2;
	//	print("WHGHT", windowHeight, "RWS", gRows, "GVMRGN", gVMrgn);
	cv = createCanvas(windowWidth, windowHeight);
    cv.parent('sketch-holder');
	cv.background(gBgColor);
	//	print("WDTH", width, gCols * gTSd, "HGHT", height, gRows * gTSd);
	// cv.position(gHMrgn, gVMrgn);
	let i = 0;
	for (let r = 0; r < gRows; r++) {
		for (let c = 0; c < gCols; c++) {
			tiles[i] = new Tile(i, r, c, gTSd);
			i++;
		} // for c
	} // for r

} // fn setup

function draw() {

	let randRow = int(random(gRows));
	let randCol = int(random(gCols));
	//	print(randRow,randCol);	
	background(gBgColor);

	for (let t of tiles) {
		t.render();
		//	t.mOver(mouseX,mouseY);
		t.selectMe(randRow, randCol, gDrwLp);
	}
	gDrwLp++;
} // fn draw

function mousePressed() {
	for (let t of tiles) {
		t.clicked(mouseX, mouseY);
	}
} // function mousePressed

class Tile {
	constructor(i, r, c, z) {
		this.tId = i;
		this.row = r;
		this.col = c;
		this.wd = z;
		this.ht = z;
		this.posX = (this.col * this.wd) + (this.wd / 2);
		this.posY = (this.row * this.ht) + (this.ht / 2);
		this.angle = 0;
		this.lnPrCnt = 0.4;
		this.lnTh = this.wd * this.lnPrCnt;

		this.triLn = this.ht * 0.80;
		this.triWd = this.wd * 0.60;

		this.mouseOverMe = false;
		this.rttng = false;
		this.colCt = 80;
		this.curCol = color(this.colCt);
		print("COLCT", this.colCt, "CURCOL", this.curCol);

	} // fn Tile.constructor

	render() {
		let tlX = this.wd / 2;
		let tlY = this.ht / 2;
		let brX = -this.wd / 2;
		let brY = -this.ht / 2;
		push();
		translate(this.posX, this.posY);
		rotate(this.angle);
		// stroke("red");
		// strokeWeight(4);
		// fill(0, 100, 20);
		// rect(0, 0, this.wd, this.ht);
		// //print(this.posX, this.posY, this.wd, this.ht);
		// triangle( -this.triWd/2, this.triLn/2, 0, -this.triLn/2, this.triWd/2, this.triLn/2);
		// fill("red");
		// ellipse(0, 0, this.triWd/20);

		fill(this.curCol);
		arc(tlX, tlY, this.wd + this.lnTh, this.ht + this.lnTh, PI, 3 * PI / 2);
		arc(brX, brY, this.wd + this.lnTh, this.ht + this.lnTh, 0, PI / 2);
		// arc(this.gTSd, this.gTSd, this.gTSd + this.lnTh, this.gTSd + this.lnTh, PI/2,3*PI/2);
		fill(gBgColor);
		arc(tlX, tlY, this.wd - this.lnTh, this.ht - this.lnTh, PI, 3 * PI / 2);
		arc(brX, brY, this.wd - this.lnTh, this.ht - this.lnTh, 0, PI / 2);
		noFill();
		//	rect(0,0,this.wd,this.ht);
		pop();

	}

	selectMe(r, c, dl) {
		if (r == this.row && c == this.col) {
			this.mouseOverMe = true;
			//this.colCt +=1;

			this.curCol = color(this.colCt % 255);
			this.smoothRot();
		} else {
			this.mouseOverMe = false;
			this.rttng = false;
		}
	}

	mOver(mx, my) {
		if (mx > this.posX - this.wd / 2 && mx <= this.posX + this.wd / 2 && my > this.posY - this.ht / 2 && my <= this.posY + this.ht / 2) {
			this.mouseOverMe = true;
		} else {
			this.mouseOverMe = false;
			this.rttng = false;
		} // else 

		// print("CLICKED on", this.tId);
		// this.angle += PI/2;
	} // fn Tile.mOver

	smoothRot() {
		if (this.mouseOverMe && this.rttng === false) {
			this.angle += PI / 2;
			this.rttng = true;
		}
	}


	clicked(mx, my) {
		print(mx, my);
		if (this.mouseOverMe) {
			print("CLICKED on", this.tId);
			this.angle += PI / 2;
		} // if
	} // fn Tile.clicked

} // fn Tile