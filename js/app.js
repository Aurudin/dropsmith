$(document).foundation();

// TYPING TEXT
// get the element
const text = document.querySelector(".typing-text");
// make a words array
const words = [
  "Aromatherapists,",
  "Professors,",
  "Students,",
  "Mom's,",
  "You.",
];
// start typing effect
setTyper(text, words);
function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 1500;
  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;
  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];
    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;
      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;
      if (letterIndex == 0) {
        nextWord();
      }
    }
    const textToType = word.substring(0, letterIndex);
    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;
    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}

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
