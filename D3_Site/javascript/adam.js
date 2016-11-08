var bodySelection = d3.select("body");

// circleRadii = [40, 20, 10]
 
// var svgContainer = bodySelection.append("svg")
//                                 .attr("width", 600)
//                                 .attr("height", 100);
 
//  var circles = svgContainer.selectAll("circle")
//                             .data(circleRadii)
//                             .enter()
//                             .append("circle");

// var circleAttributes = circles
//                         .attr("cx", 50)
//                         .attr("cy", 50)
//                         .attr("r", function (d) { return d; })
//                         .style("fill", function(d) {
//                           var returnColor;
//                           if (d === 40) { returnColor = "green";}
//                           else if (d === 20) { returnColor = "purple";}
//                           else if (d === 10) { returnColor = "red"; }
//                           return returnColor;
                        // });





 var spaceCircles = [30, 70, 110];
 
 var svgContainer = bodySelection
                      .append("svg")
                      .attr("width", 200)
                      .attr("height", 200);
 
 var circles = svgContainer
                  .selectAll("circle")
                  .data(spaceCircles)
                  .enter()
                  .append("circle");

var circleAttributes = circles
                        .attr("cx", function (d) { return d; })
                        .attr("cy", function (d) { return d; })
                        .attr("r", 20 )
                        .style("fill", function(d) {
                          var returnColor;
                          if (d === 30) { returnColor = "green";}
                          else if (d === 70) { returnColor = "purple";}
                          else if (d === 110) { returnColor = "red"; }
                          return returnColor;
                        });