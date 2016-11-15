var w = 800, h = 600;
// Generate dummy data in object form [ {"x" : val, "y" : val} ], domain 0-1.
// note: array of objects
var ptCount = 50;
var dataSet = [];
for(var i=0; i<ptCount; i++) {
  dataSet.push({"x" : Math.random(), "y" : Math.random()});
}

// define accessor functions to get coord data
var plotFunction = d3.svg.line()
  // manually multiply data to scale
  .x(function(d) { return d.x*w; }) 
  .y(function(d) { return d.y*h; })
  .interpolate("linear"); // we can change this for alternative plots

// set up svg
var svgContainer = d3
                    .select("body")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

// plot some data
var plot = svgContainer
              .append("path")
              .attr("d", plotFunction(dataSet)) // access data
              .attr("stroke", "orange")
              .attr("stroke-width", 4)
              .attr("fill", "none");

var totalLength = plot.node().getTotalLength();

plot
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(2000)
  .ease("linear")
  .attr("stroke-dashoffset", 0);
  