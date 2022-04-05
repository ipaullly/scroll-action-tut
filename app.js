window.onload = function () {
  let path = document.querySelector('path')
  let pathLength = path.getTotalLength();

  path.style.strokeDasharray = pathLength + ' ' + pathLength;
  path.style.strokeDashoffset = pathLength;
  window.addEventListener('scroll', () => {
    // What % is it to the bottom of the page
    let scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    // length to offset the dashes
    let drawLength = pathLength * scrollPercentage;
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
  })
}