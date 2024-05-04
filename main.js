import "./style.css";

// Let's do an animation!
const expressYourselfHeader = document.querySelector(".express-yourself h2");

// First, we'll split the "You can express yourself" header into a bunch of little
// <span>s (one for each letter), so we can animate them individually.
const expressYourselfText = expressYourselfHeader.innerText;

expressYourselfHeader.innerHTML = "";
for (const character of Array.from(expressYourselfText)) {
  const span = document.createElement("span");
  span.appendChild(document.createTextNode(character));
  if (character != " ") {
    // Set the spans to inline-block, or else they won't animate.
    // Don't do this to the spaces or they'll collapse.
    span.style.display = "inline-block";
  }
  expressYourselfHeader.appendChild(span);
}

// Run an animation when the "express yourself" header enters the viewport
new IntersectionObserver((entries) => {
  if (!entries.every((entry) => entry.isIntersecting)) {
    // Don't run when the element exits
    return;
  }

  // Go up and back down
  const keyframes = [
    { transform: "translateY(0px)" },
    { transform: "translateY(-55px)" },
    { transform: "translateY(0px)" },
  ];

  for (let i = 0; i < expressYourselfHeader.childNodes.length; i++) {
    // Animate each letter with a little extra delay
    const child = expressYourselfHeader.childNodes[i];
    child.animate(keyframes, { delay: i * 20 + 1000, duration: 200 });
  }
}).observe(expressYourselfHeader);
