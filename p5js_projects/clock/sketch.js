function setup() {
	createCanvas(400, 400);
	// we are working in degrees
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(200, 200);
	rotate(-90);
	//retreive the hour,minute and second
	let hr = hour();
	let min = minute();
	let sec = second();

	//draw seconds
	strokeWeight(8);
	stroke(255, 100, 150);
	// fill(255);
	noFill();
	let secondAngle = map(sec, 0, 60, 0, 360);
	arc(0, 0, 300, 300, 0, secondAngle);

	push();
	rotate(secondAngle);
	line(0, 0, 100, 0);
	pop();
	//draw minutes
	stroke(150, 11, 255);
	let minuteAngle = map(min, 0, 60, 0, 360);
	arc(0, 0, 280, 280, 0, minuteAngle);

	push();
	rotate(minuteAngle);
	line(0, 0, 75, 0);
	pop();
	//draw hours
	stroke(150, 255, 100);
	let houreAngle = map(hr % 12, 0, 12, 0, 360);
	arc(0, 0, 260, 260, 0, houreAngle);

	push();
	rotate(houreAngle);
	line(0, 0, 50, 0);
	pop();
	//draw center point
	stroke(255);
	point(0, 0);

	// fill(255);
	// textSize(64);
	// text(`${hr}:${min}:${sec}`, width / 2, height / 2);


}