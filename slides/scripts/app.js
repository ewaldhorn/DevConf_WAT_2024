/*
    So, this is the code for my DevConf 2024 talk slides.
    None of this is best-practice, but it works on my machine, sometimes!
*/

let headerDiv, contentDiv, statusDiv, currentPage, totalPages;
const images = [],
  pages = [],
  pageContent = [];

// ----------------------------------------------------------------------------
const findImageWithName = (name) => images.find((x) => x.name === name);
const findPageContentWithName = (name) =>
  pageContent.find((x) => x.name === name);

// ----------------------------------------------------------------------------
const createImageElementWithAttribution = (image) => {
  if (image != null) {
    return `<img src="${image.source}" height="350px"/><br>
    <span id="attribution">${image.attribution}</span>`;
  }

  return "";
};

// ---------------------------------------------------------------- Image class
class Image {
  constructor(name, source, attribution) {
    this.name = name;
    this.source = source;
    this.attribution = attribution;
  }
}

// ----------------------------------------------------------------- Page class
class Page {
  constructor(name, title) {
    this.name = name;
    this.title = title;
    this.coverImage = createImageElementWithAttribution(
      findImageWithName(name)
    );
  }
}

// ---------------------------------------------------------- PageContent class
class PageContent {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}

// ----------------------------------------------------------------------------
const refreshStatus = () => {
  statusDiv.innerHTML = `<p>${currentPage + 1} / ${totalPages}</p>`;
};

// ----------------------------------------------------------------------------
const initVariables = () => {
  // define page images
  images.push(
    new Image(
      "home",
      "./images/thomas-bennie-B21WLsX6a5c-unsplash.jpg",
      `Photo by <a href="https://unsplash.com/@thomasbennie?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Thomas Bennie</a> on <a href="https://unsplash.com/photos/brown-rocky-mountain-under-blue-sky-during-daytime-B21WLsX6a5c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>`
    )
  );
  images.push(
    new Image(
      "why",
      "./images/pexels-image-hunter-13092792.jpg",
      `Photo by <a href="https://www.pexels.com/photo/concept-image-with-a-question-on-a-sticky-note-against-green-hedge-13092792/" target="_blank">Image Hunter</a> on <a href="https://www.pexels.com" target="_blank">Pexels</a>`
    )
  );
  images.push(
    new Image(
      "onions",
      "./images/pexels-ylanite-koppens-872400.jpg",
      `Photo by <a href="https://www.pexels.com/photo/three-onions-872400/" target="_blank">Ylanite Koppens</a> on <a href="https://www.pexels.com" target="_blank">Pexels</a>`
    )
  );
  images.push(
    new Image(
      "easy",
      "./images/andre-hunter-5otlbgWJlLs-unsplash.jpg",
      `Photo by <a href="https://unsplash.com/@dre0316?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Andre Hunter</a> on <a href="https://unsplash.com/photos/angry-face-illustration-5otlbgWJlLs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>`
    )
  );
  images.push(
    new Image(
      "helpme",
      "./images/pexels-agung-pandit-wiguna-1128318.jpg",
      `Photo by <a href="https://www.pexels.com/photo/man-standing-beside-his-wife-teaching-their-child-how-to-ride-bicycle-1128318/" target="_blank">Agung Pandit Wiguna</a> on <a href="https://www.pexels.com" target="_blank">Pexels</a>`
    )
  );
  images.push(
    new Image(
      "love",
      "./images/joe-caione-qO-PIF84Vxg-unsplash.jpg",
      `Photo by <a href="https://unsplash.com/@joeyc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Joe Caione</a> on <a href="https://unsplash.com/photos/shallow-focus-photography-of-white-shih-tzu-puppy-running-on-the-grass-qO-PIF84Vxg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>`
    )
  );

  // QR Code to rate talks
  images.push(
    new Image(
      "parting",
      "./assets/RateCapeTown.png",
      `<a href="https://www.devconf.co.za/rate-capetown">https://www.devconf.co.za/rate-capetown</a>`
    )
  );

  // define page content
  pageContent.push(
    new PageContent(
      "home",
      `<h2>This is where the sweeties are</h2><em>Don't take sweeties from strangers<br><br>But you can trust me, because I live near this thing.</em><br><br><strong>There's also some code here, somewhere.</strong>`
    )
  );
  pageContent.push(
    new PageContent(
      "why",
      `<h2>Because I had a dream in 1997 and it's finally true-ish</h2><p>Ok, 1997 IS actually important. This is why: <audio controls class="audio_player"><source src="./assets/stayawhile.wav" type="audio/wav"></audio></p><p>C++ and <em>#WIN32_LEAN_AND_MEAN</em> and DJGPP on DOS.</p><p><strong>So where am I going with this?</strong></p>`
    )
  );
  pageContent.push(
    new PageContent(
      "onions",
      `<h2>Nothing is great for every problem</h2><p>Python is great for stats, C for speed, Zig for fun, Go for getting rich, JavaScript for, err, well, yeah.</p><p><em>&lt;Speaker note: Hit someone with a chocolate for bonus points.&gt;</em></p>`
    )
  );
  pageContent.push(
    new PageContent(
      "easy",
      `<h2>There is a way</h2><p>It's neither web, nor assembly. Byte code target FTW.</p><h3>WAT now?</h3><p>Ok... Yowsers, WAT?!</p>`
    )
  );
  pageContent.push(
    new PageContent(
      "helpme",
      `<h2>Screw it, I want training wheels</h2><p>WAT, byte code, bla bla.</p><p>Make it easier sheesh...</p><p>Oh ok, that's better!</p>`
    )
  );
  pageContent.push(
    new PageContent(
      "love",
      `<h2>WebAssembly is here, it's ready, use it.</h2><div style="margin:0; width: 460px; display:inline-block;"><ul style="text-align:left;"><li>Extend Kong Gateway with Wasm plugins</li><li>Use Wasm to develop serverless apps</li><li>Build microservices in Wasm</li><li>Mix different languages together as Wasm Components</li></ul></div>`
    )
  );
  pageContent.push(
    new PageContent(
      "parting",
      `<span style="font-size:200%;">Now remember:</span><br/><span style="font-size:400%; color:white;"><strong>Don't be kak. Be Wasm.</strong></span>`
    )
  );

  // place pages in the desired order
  pages.push(new Page("home", "DevConf 2024"));
  pages.push(new Page("why", "Why are we here"));
  pages.push(new Page("onions", "Adding some flavour"));
  pages.push(new Page("easy", "Hey, enough bad news!"));
  pages.push(new Page("helpme", "A little help please"));
  pages.push(new Page("love", "They all lived happily every after."));
  pages.push(new Page("parting", "Rate talks, win prizes."));

  // get a handle to our content containers
  headerDiv = document.getElementById("header");
  contentDiv = document.getElementById("content");
  statusDiv = document.getElementById("status");

  // set the initial state
  currentPage = 0;
  totalPages = pages.length;
};

// ----------------------------------------------------------------------------
/**
 * @param {number} idx
 */
const loadPage = (idx) => {
  const page = pages[idx];

  if (page != null) {
    const content = findPageContentWithName(page.name);

    headerDiv.innerHTML = `<h1>${page.title}</h1>${page.coverImage}`;
    contentDiv.innerHTML = `<hr>${content != null ? content.content : ""}<hr>`;
  }

  refreshStatus();
};

// ----------------------------------------------------------------------------
const performStartupProcess = () => {
  initVariables();
  loadPage(0);
};

// ----------------------------------------------------------------------------
const pageForward = () => {
  if (currentPage < totalPages - 1) {
    currentPage += 1;
  } else {
    currentPage = 0;
  }

  loadPage(currentPage);
};

// ----------------------------------------------------------------------------
const pageReverse = () => {
  if (currentPage > 0) {
    currentPage -= 1;
  } else {
    currentPage = totalPages - 1;
  }

  loadPage(currentPage);
};

// ----------------------------------------------------------------------------
/**
 * @param {KeyboardEvent} e
 */
const handleKeyboardEvent = (e) => {
  switch (e.code) {
    case "Escape": {
      currentPage = -1;
      loadPage(currentPage);
    }
    case "Enter":
    case "ArrowRight":
    case "Space": {
      pageForward();
      e.preventDefault();
      break;
    }
    case "ArrowLeft": {
      pageReverse();
      e.preventDefault();
      break;
    }
  }
};

// ============================================================ EVENT LISTENERS
window.addEventListener("DOMContentLoaded", performStartupProcess);
window.addEventListener("keydown", handleKeyboardEvent);
