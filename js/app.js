$(document).foundation();

/* TESTIMONIALS */
$(document).ready(function () {
  $("#testimonials").owlCarousel({
    // Enable thumbnails
    thumbs: true,
    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,
    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    thumbsPrerendered: true,
    // Class that will be used on the thumbnail container
    thumbContainerClass: "owl-thumbs",
    // Class that will be used on the thumbnail item's
    thumbItemClass: "owl-thumb-item",
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    loop: true,
  });
  $("#howWorks").owlCarousel({
    // Enable thumbnails
    thumbs: true,
    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,
    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    thumbsPrerendered: true,
    // Class that will be used on the thumbnail container
    thumbContainerClass: "owl-thumbs",
    // Class that will be used on the thumbnail item's
    thumbItemClass: "owl-thumb-item",
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    loop: true,
    animateIn: "animate__fadeInDown",
    animateOut: "animate__fadeOut",
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        mouseDrag: false,
        touchDrag: false,
      },
      // breakpoint from 480 up
      768: {
        items: 1,
      },
    },
  });
  $("#pricing").owlCarousel({
    dots: false,
    margin: 48,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        margin: 10,
        startPosition: 1,
      },
      360: {
        items: 1,
        margin: 12,
        startPosition: 1,
        stagePadding: 35,
      },
      // breakpoint from 480 up
      480: {
        items: 1,
        startPosition: 1,
        margin: 12,
        stagePadding: 60,
      },
      768: {
        items: 2,
        margin: 24,
        startPosition: 1,
        stagePadding: 35,
      },
      // breakpoint from 768 up
      1024: {
        items: 3,
        margin: 24,
      },
      1280: {
        items: 3,
      },
    },
  });
});

/* COUNTER STATS */
// number count for stats, using jQuery animate
function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;
  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}

$(window).scroll(function () {
  if (visible($(".counting"))) {
    if ($(".counting").hasClass("counter-loaded")) return;
    $(".counting").addClass("counter-loaded");
  }
  $(".counting").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        },
      }
    );
  });
});



// JS PARALLAX
class HoverButton {
  constructor(el) {
    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }

  attachEventsListener() {
    window.addEventListener("mousemove", (e) => this.onMouseMove(e));
    window.addEventListener("resize", (e) => this.calculatePosition(e));
  }

  calculatePosition() {
    TweenMax.set(this.el, {
      x: 0,
      y: 0,
      scale: 1,
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + box.width * 0.5;
    this.y = box.top + box.height * 0.5;
    this.width = box.width;
    this.height = box.height;
  }

  onMouseMove(e) {
    let hover = false;
    let hoverArea = this.hover ? 0.7 : 0.5;
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt(x * x + y * y);
    if (distance < this.width * hoverArea) {
      hover = true;
      if (!this.hover) {
        this.hover = true;
      }
      this.onHover(e.clientX, e.clientY);
    }

    if (!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }

  onHover(x, y) {
    TweenMax.to(this.el, 0.4, {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: Power2.easeOut,
    });
    this.el.style.zIndex = 10;
  }
  onLeave() {
    TweenMax.to(this.el, 0.7, {
      x: 0,
      y: 0,
      scale: 1,
      ease: Elastic.easeOut.config(1.2, 0.4),
    });
    this.el.style.zIndex = 1;
  }
}

const btn1 = document.querySelector(".bounce-effect img:nth-child(1)");
new HoverButton(btn1);

const btn2 = document.querySelector(".bounce-effect img:nth-child(2)");
new HoverButton(btn2);

const btn3 = document.querySelector(".bounce-effect img:nth-child(3)");
new HoverButton(btn3);

const btn4 = document.querySelector(".bounce-effect img:nth-child(4)");
new HoverButton(btn4);

const btn5 = document.querySelector(".bounce-effect img:nth-child(5)");
new HoverButton(btn5);

const btn6 = document.querySelector(".bounce-effect img:nth-child(6)");
new HoverButton(btn6);
