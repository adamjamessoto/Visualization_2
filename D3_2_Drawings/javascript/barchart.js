var svg = d3.select("svg");
var margin = {top: 20, right: 20, bottom: 75, left: 40};
var width =+ svg.attr("width") - margin.left - margin.right;
var height =+ svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("../data/nba_stat.csv", function(d) {
  d.W = +d.W;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.Team; }));
  y.domain([0, d3.max(data, function(d) { return d.W; })]);

  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y).ticks(10))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Frequency");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.Team); })
    .attr("y", function(d) { return y(d.W); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.W); });
});
