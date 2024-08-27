$(document).mousemove(function(e) {
    const x = (e.clientX / $(window).width()) * 100;
    const y = (e.clientY / $(window).height()) * 100;

    $('.circle').css('background', `
        radial-gradient(circle at ${x}% ${y}%, rgba(255, 96, 61, 0.8), transparent 60%),
        radial-gradient(circle at ${100 - x}% ${y}%, rgba(121, 160, 255, 0.8), transparent 60%),
        radial-gradient(circle at ${x}% ${100 - y}%, rgba(255, 147, 212, 0.8), transparent 60%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(1, 81, 114, 0.8), transparent 60%),
        radial-gradient(circle at ${x}% ${y}%, rgba(255, 144, 0, 0.6), transparent 70%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(0, 144, 255, 0.6), transparent 80%),
        radial-gradient(circle at ${x}% ${100 - y}%, rgba(255, 0, 144, 0.6), transparent 80%),
        radial-gradient(circle at ${100 - x}% ${y}%, rgba(255, 96, 61, 0.5), transparent 90%),
        radial-gradient(circle at ${x}% ${y}%, rgba(121, 160, 255, 0.5), transparent 95%),
        radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(255, 96, 61, 0.4), transparent 50%),
        radial-gradient(circle at ${x}% ${100 - y}%, rgba(121, 160, 255, 0.4), transparent 50%),
        radial-gradient(circle at ${100 - x}% ${y}%, rgba(255, 147, 212, 0.4), transparent 50%),
        radial-gradient(circle at ${x}% ${100 - y}%, rgba(1, 81, 114, 0.4), transparent 50%),
        radial-gradient(circle at ${100 - x}% ${y}%, rgba(255, 144, 0, 0.3), transparent 60%)
    `);
});