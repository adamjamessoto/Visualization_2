var width = 960,
    height = 500;

var projection = d3.geo.craig()
    .scale(200)
    .center([0, 14])
    .translate([width / 2, height / 2]);

var graticule = d3.geo.graticule()
    .step([5, 5])
    .extent([[-179, -90], [179, 90]])
    .precision(1);

var lines = graticule.lines(),
    xLines = lines.filter(function(d) { return d.coordinates[0][0] === d.coordinates[1][0]; }),
    yLines = lines.filter(function(d) { return d.coordinates[0][1] === d.coordinates[1][1]; });

var canvas = d3.select("body").append("canvas")
    .attr("width", width)
    .attr("height", height);

var context = canvas.node().getContext("2d");

var path = d3.geo.path()
    .projection(projection)
    .context(context);

context.lineWidth = 2;

d3.timer(function(elapsed) {
  projection.parallel(Math.sin((elapsed % 10000) / 10000 * Math.PI) * 25);
  context.clearRect(0, 0, width, height);

  yLines.forEach(function(line) {
    context.strokeStyle = d3.hsl(line.coordinates[0][1] - 90, 1, .5) + "";
    context.beginPath();
    path(line);
    context.stroke();
  });

  xLines.forEach(function(line) {
    context.strokeStyle = d3.hsl(line.coordinates[0][0] / 2 + 180, 1, .5) + "";
    context.beginPath();
    path(line);
    context.stroke();
  });
});