const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<img src="./pictures/eggs2.png" id="egg-detection-image" />`)

// console.log(dom.window)

window = dom.window

const tracking = require('./node_modules/tracking/build/tracking')

// {/* <script src="./node_modules/tracking/build/tracking-min.js"></script> */}

// tracking.ColorTracker.registerColor('eggshell', function(r, g, b) {
//   if (r > 225 && g > 225 && b > 225) {
//     return true;
//   }
//   return false;
// })

// var colors = new tracking.ColorTracker(['eggshell'])

// var drawRect = function (x, y, w, h, color) {
//   var rect = document.createElement('div');
//   var img = document.getElementById('egg-detection-image');

//   rect.classList.add('rect');
//   rect.style.width = w + 'px';
//   rect.style.height = h + 'px';
//   rect.style.left = (img.offsetLeft + x) + 'px';
//   rect.style.top = (img.offsetTop + y) + 'px';
//   rect.style.border.color = color

//   container.appendChild(rect);
// };

// colors.on('track', function(event) {
//   console.time('color detection');
//   if (event.data.length === 0) {
//     // No colors were detected in this frame.
//     console.log('no colors detected')
//   } else {
//     event.data.forEach(function(rect) {
//       console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
//       event.data.forEach(function (rect) {
//         drawRect(rect.x, rect.y, rect.width, rect.height, rect.color);
//       });
//     });
//   }
//   console.timeEnd('color detection');
// });

// tracking.track('#egg-detection-image', colors);

