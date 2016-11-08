var jsonCircles = [
  { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
  { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
  { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];

var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 600)
                                    .attr("height", 600);

svgContainer.append("rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("fill", "black");

d3.json("../data/westbrookShots_15_16.json", function(error, shots) {
  if (error) throw error;

  var circles = svgContainer.selectAll("circle")
                            .data(shots)
                            .enter()
                            .append("circle");

  var circleAttributes = circles
                         .attr("cx", function (d) { return alterXCoord(d.x); })
                         .attr("cy", function (d) { return alterYCoord(d.y); })
                         .attr("r", function (d) { return 4; })
                         .style("fill", function(d) {
                            
                            if (d.shot_made_flag === 1)
                              return "green";
                            else 
                              return "red";
                         });
});

function alterXCoord (x){
  // change x coordinate (600, 600)
  return (300 + x);
};

function alterYCoord (y){
  // change x coordinate (600, 600)
  if (y <= 0)
    return (500 + y);

  else
    return (500 - y);
};