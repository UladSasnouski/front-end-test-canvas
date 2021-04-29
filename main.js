var canvas = document.getElementById('canvas-big');
var canvasSmall = document.getElementById('canvas-small');
var ctx = canvas.getContext('2d');
var ctxSmall = canvasSmall.getContext('2d');
var colors = [];
var img = [];
var stars = [
    {
        id: 0,
        name: 'Red',
        posX: 0,
        posY: 0,
    },
    {
        id: 1,
        name: 'Blue',
        posX: 400,
        posY: 0,
    },
    {
        id: 2,
        name: 'Green',
        posX: 200,
        posY: 200,
    },
    {
        id: 3,
        name: 'Yellow',
        posX: 0,
        posY: 400,
    },
    {
        id: 4,
        name: 'Black',
        posX: 400,
        posY: 400,
    },
];

function draw() {
    for (let i = 0; i < stars.length; i++) {
        img[i] = new Image();
        img[i].src = `data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' image-rendering='optimizeQuality' fill-rule='evenodd' clip-rule='evenodd'%3e%3cpath fill='${stars[i].name}' stroke='%23000' stroke-width='.756' stroke-miterlimit='22.926' d='M100 0l23.5 76.548 76.5-.155-61.976 47.155L161.803 200 100 152.596 38.197 200l23.779-76.452L0 76.393l76.5.155z'/%3e%3c/svg%3e`;
        img[i].onload = function () {
            ctx.drawImage(img[i], stars[i].posX, stars[i].posY);
        };
    };
};

canvas.addEventListener('click', (e) => {
    console.log(ctx.getImageData(e.offsetX, e.offsetY, 1, 1))
    colors = [];
    for (let i = 0; i < 4; i++) {
        color = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data[i];
        colors.push(color);
    };
    let endElement = colors.pop();
    if (endElement === 0) {
        ctxSmall.fillStyle = 'rgb(255,255,255)';
        ctxSmall.fillRect(0, 0, canvasSmall.width, canvasSmall.height);
    } else {
        let colorFill = colors.toString();
        ctxSmall.fillStyle = `rgb(${colorFill})`;
        ctxSmall.fillRect(0, 0, canvasSmall.width, canvasSmall.height);
    }

}, false);

draw();