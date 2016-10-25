var stocks;
function preload() {
  //var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20symbol%20,%20Ask%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22NKE%22,%20%22GM%22,%20%22AAPL%22,%20%22MSFT%22)&env=store://datatables.org/alltableswithkeys&format=json';
  //stocks = loadJSON(url);
}

function setup() {
  var canvas = createCanvas(windowWidth*0.98, windowHeight*0.97);
  background(255);
  stroke(0);
  strokeWeight(5);

  // ********** an array with some stockPrices **********
  var stockPrices = [51.87, 32.98, 117.65, 61.00];
  var stockNames = ["NKE", "GM", "AAPL", "MSFT"];

  // ********** calculate a few sizes **********
  var width = (windowWidth * 0.7 * 0.98) / stockPrices.length;
  var spacer = (windowWidth * 0.3 * 0.98) / (stockPrices.length + 1);
  //var width = (windowWidth * 0.7 * 0.98) / stocks.query.results.quote.length;
  //var spacer = (windowWidth * 0.3 * 0.98) / (stocks.query.results.quote.length + 1);
  var halfHeight = (windowHeight*0.97) / 2;
  var scale = 100 / Math.max.apply(null, stockPrices);
  //var scale = 100 / Math.max.apply(null, stocks.query.results.quote);

  console.log(scale);

  // ********** create an instance of scribble and set a few parameters **********
  var scribble = new Scribble();
  scribble.bowing = 0.1;
  scribble.roughness = 1.5;

  // ********** draw a horizontal line across the center of the screen **********
  scribble.scribbleLine(0, halfHeight, windowWidth, halfHeight);

  // ********** draw every value as a filled rect in a bar graph **********
  for (var i = 0; i < stockPrices.length; i++) {
  //for (var i = 0; i < stocks.query.results.quote.length; i++) {

    // ********** calculate the x and y coordinates of the center of the rect and the height **********
    var h = halfHeight * 0.01 * stockPrices[i] * scale;
    //var h = halfHeight * 0.01 * stocks.query.results.quote[0].Ask[i] * scale;
    var x = (spacer + width) * ( i + 1 ) - (width / 2);
    var y = halfHeight - h / 2;

    // set the thikness of the rect lines
    strokeWeight(5);

    // set the color of the rect lines to black
    stroke(0);

    // draw a rect for the value
    scribble.scribbleRect( x, y, width, h );

    // ********** calculate the x and y coordinates for the border points of the hachure **********
    var xleft = x - width / 2 + 5;
    var xright = x + width / 2 - 5;
    var ytop = y - (halfHeight *  0.01 * stockPrices[i] * scale / 2);
    var ybottom = y + (halfHeight *  0.01 * stockPrices[i] * scale / 2);
    //var ytop = y - (halfHeight *  0.01 * stocks.query.results.quote[0].Ask[i] * scale / 2);
    //var ybottom = y + (halfHeight *  0.01 * stocks.query.results.quote[0].Ask[i] * scale / 2);

    // reduce the sizes to fit in the rect
    if (ytop > ybottom) {
      ytop -= 5;
      ybottom += 5;
    }
    else {
      ytop += 5;
      ybottom -= 5;
    }

    // the x coordinates of the border points of the hachure
    var xCoords = [ xleft, xright, xright, xleft ];

    // the y coordinates of the border points of the hachure
    var yCoords = [ ytop, ytop, ybottom, ybottom ];
    
    // the gap between two hachure lines
    var gap = 3.5;
    
    // the angle of the hachure in degrees
    var angle = 315;
    
    // set the thikness of our hachure lines
    strokeWeight( 3 );
    
    //set the color of the hachure to a nice blue
    stroke( 0, 50, 180 );
    
    // fill the rect with a hachure
    scribble.scribbleFilling( xCoords, yCoords , gap, angle );
    
    strokeWeight(1);
    stroke(2);
    text(stockNames[i], x - 20, ybottom + 30);
    //text(stocks.query.results.quote[i].symbol, x - 30, ybottom + 30);
  }
}

function draw(){

}








