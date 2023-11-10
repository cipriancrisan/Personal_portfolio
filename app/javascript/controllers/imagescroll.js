document.addEventListener('turbolinks:load', function() {
  const imageTrack = document.getElementById('image-track');

  // Duplicating content for infinite scroll effect
  imageTrack.innerHTML += imageTrack.innerHTML;

  let scrollSpeed = 1; // Adjust speed as per your requirement
  let lastScrollTop = 0;
  let autoScroll = true;
  let isManualScrolling = false;

  function moveContent() {
      if (autoScroll && !isManualScrolling) {
          imageTrack.scrollTop += scrollSpeed;

          // Reset to top when reaching the halfway point
          if (imageTrack.scrollTop >= imageTrack.scrollHeight / 2) {
              imageTrack.scrollTop = 0;
          }
      }

      requestAnimationFrame(moveContent); // Continuously call moveContent for smooth animation
  }

  imageTrack.addEventListener('scroll', function() {
      // Determine the scroll direction
      let st = imageTrack.scrollTop;
      if (st > lastScrollTop || st === 0) {
          // Downwards or reset to top
          autoScroll = true;
      } else {
          // Upwards
          autoScroll = false;
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling correction

      // If the user is manually scrolling
      if (!autoScroll) {
          isManualScrolling = true;
          clearTimeout(window.scrollEnd);
          window.scrollEnd = setTimeout(function() {
              isManualScrolling = false;
          }, 1500);
      }
  });

  // Start the initial auto-scroll
  moveContent();
});
