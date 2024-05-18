import kaboom from "kaboom";

const k = kaboom();

const SPEED = 320;

k.setBackground(0, 0, 0, 1);

k.loadBean();

// add character to screen, from a list of components
const player = k.add([
	k.sprite("bean"),  // renders as a sprite
	k.pos(k.center()),    // position in world
	k.area(),          // has a collider
	k.body(),          // responds to physics and gravity
]);

k.onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})

k.onKeyDown("right", () => {
	player.move(SPEED, 0)
})

k.onKeyDown("up", () => {
	player.move(0, -SPEED)
})

k.onKeyDown("down", () => {
	player.move(0, SPEED)
})