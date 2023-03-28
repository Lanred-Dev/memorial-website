// Get all the area elements
const areas = document.querySelectorAll("area");

// get the image map
const mapArea = document.querySelector(`[data-id="image-map"]`);

// get the bounding box of the map area
const boundingBox = mapArea.getBoundingClientRect();

// Add mouseover and mouseout event listeners to each area
areas.forEach((area) => {
    area.addEventListener("mouseover", mouseOver);
    area.addEventListener("mouseout", mouseOut);
});

function mouseOver(e) {
    const target = e.target;
    const coords = target.getAttribute("coords").split(",").map(Number);

    //get the position and height based off of the coords
    const left = coords[0];
    const top = coords[1];
    const width = coords[2] - left;
    const height = coords[3] - top;

    const highlight = document.createElement("div");
    highlight.classList.add("highlight");

    // Set the position and size of the bounding box div
    highlight.style.position = "absolute";
    highlight.style.top = top + "px";
    highlight.style.left = left + "px";
    highlight.style.width = width + "px";
    highlight.style.height = height + "px";

    document.body.appendChild(highlight);
}

function mouseOut() {
    // Remove the SVG when the mouse is no longer hovering over the area
    const highlight = document.querySelector(".highlight");

    if (highlight === null) return;

    highlight.remove();
}
