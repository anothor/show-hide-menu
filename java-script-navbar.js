	document.addEventListener('DOMContentLoaded', function(){ 
	    // your code goes here
	}, false);

	//show-hide navbar
	const body = document.body;
	const triggerMenu = document.querySelector(".site-header .navbar-toggler");
	// const nav = document.querySelector(".site-header nav");
	// const menu = document.querySelector(".site-header .navbar");
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = 0;

	triggerMenu.addEventListener("click", () => {
	  body.classList.toggle("menu-open");
	});

	window.addEventListener("scroll", () => {
	  const currentScroll = window.pageYOffset;
	  if (currentScroll == 0) {
	    body.classList.remove(scrollUp);
	    return;
	  }
	  
	  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
	    // down
	    body.classList.remove(scrollUp);
	    body.classList.add(scrollDown);
	  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
	    // up
	    body.classList.remove(scrollDown);
	    body.classList.add(scrollUp);
	  }
	  lastScroll = currentScroll;
	});
