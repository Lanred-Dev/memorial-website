// Get all the area elements
const areas = document.querySelectorAll('area');

// Add mouseover and mouseout event listeners to each area
areas.forEach(area => {
    area.addEventListener('mouseover', handleMouseOver);
    area.addEventListener('mouseout', handleMouseOut);
});

function handleMouseOver(e) {
    const target = e.target;
    const coords = target.getAttribute('coords').split(',').map(Number);
    const shape = target.getAttribute('shape');

    // Create an SVG element to draw the highlight
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('class', 'highlight-svg');

    // Create a path element to draw the shape
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'highlight');
    path.setAttribute('fill', 'transparent');

    // Set the path data based on the shape
    if (shape === 'rect') {
        const [x, y, width, height] = coords;
        path.setAttribute('d', `M${x} ${y} h${width} v${height} h-${width} Z`);
    } else if (shape === 'circle') {
        const [cx, cy, r] = coords;
        path.setAttribute('d', `M${cx} ${cy} m-${r},0 a${r},${r} 0 1,0 ${2*r},0 a${r},${r} 0 1,0 -${2*r},0`);
    } else if (shape === 'poly') {
        path.setAttribute('d', `M${coords.slice(0, 2).join(' ')} ${coords.slice(2).join(' L')} Z`);
    }

    // Add the path to the SVG and the SVG to the page
    svg.appendChild(path);
    document.body.appendChild(svg);
}

function handleMouseOut() {
    // Remove the SVG when the mouse is no longer hovering over the area
    const svg = document.querySelector('.highlight-svg');
    if (svg) {
        svg.remove();
    }
}