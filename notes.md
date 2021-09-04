shapes.forEach((shape, index) => {
if (!shape.style.animation) {
shape.style.animationDelay = `animateShape 6s linear infinite forwards ${Math.floor( Math.random() * 1000 )}ms`;
} else {
shape.style.animation = '';
}
});
