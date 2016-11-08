//manually writing the json files to incorporate color of green made red missed and data points.
//plotting 20 points


var jsonCircles = [
  //{ "x_axis": 0, "y_axis": 10, "radius": 10, "color" : "green" },
  //{ "x_axis": 7, "y_axis": 100, "radius": 10, "color" : "red"}];


  {
    "name": "Russell Westbrook",
    "team_name": "Oklahoma City Thunder",
    "color": "red",
    "x": 0,
    "y": 1,
    "radius": 10
   
  },
  {
    "name": "Russell Westbrook",
    "team_name": "Oklahoma City Thunder",
    "color": "green",
    "x": 10,
    "y": 7,
    "radius": 10
  },
  {
    "name": "Russell Westbrook",
    "team_name": "Oklahoma City Thunder",
    "color": "green",
    "x": 12,
    "y": 11,
    "radius": 10
  }];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; });
