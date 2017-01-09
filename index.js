
var Xray = require('x-ray');
var driver = require('./vendor/driverXRay');
var x = Xray({
    filters: {
        trim: function (value) {
            return typeof value === 'string' ? value.trim() : value
        }
    }
}).driver(driver('Windows-1252'));

// x('http://www2.congreso.gob.pe/Sicr/TraDocEstProc/CLProLey2011.nsf/641842f7e5d631bd052578e20058a231/a74582a14f05085605257ff4007a0f56?OpenDocument', 'table table', {
//     key : ['td[width="112"]'],
//     value : ['td[width="472"]']
// })
//     .write('resultado.json');

x('http://www2.congreso.gob.pe/Sicr/TraDocEstProc/CLProLey2011.nsf/Local%20Por%20Numero%20Inverso?OpenView',
    'table:nth-last-child(2) tr',
    [{
        number : 'td:nth-child(1) a',
        lastDate : 'td:nth-child(2) font',
        publishDate : 'td:nth-child(3) font',
        state : 'td:nth-child(4) font',
        titleProject : 'td:nth-child(5) font'
    }]
)
    .write('resultado.json');