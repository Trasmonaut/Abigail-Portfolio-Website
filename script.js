document.addEventListener('mousemove', function(e) {
  // Create a new heart element on every mouse move
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Set the position of the heart to the mouse coordinates
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';
  
  // Randomize the size of the hearts slightly
  const size = Math.random() * 15 + 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  
  document.body.appendChild(heart);
  
  // Remove the heart element after the animation finishes
  setTimeout(function() {
    heart.remove();
  }, 1000);
});

document.addEventListener('click', function(e) {
  // Create a new heart element on every click
  const heart = document.createElement('div');
  heart.classList.add('heart');
    // Set the position of the heart to the mouse coordinates
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
  
  // Randomize the size of the hearts slightly  
    const size = Math.random() * 15 + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    document.body.appendChild(heart);

    // Remove the heart element after the animation finishes
    setTimeout(function() {      heart.remove();
    }, 1000);
});
