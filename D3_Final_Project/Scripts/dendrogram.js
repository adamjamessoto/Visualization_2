var margin = {top: 20, right: 120, bottom: 20, left: 120};
var width = 960 - margin.right - margin.left;
var height = 800 - margin.top - margin.bottom;

var i = 0;
var duration = 750;
var root;

// Building our tree layout
var tree = d3.layout
              .tree()
              .size([height, width]);

// Helper to calculate branches
var diagonal = d3.svg
                  .diagonal()
                  .projection(
                    function(d)
                      { return [d.y, d.x]; }
                  );

// Creating our svg object
var svg = d3
          .select("body")
          .append("svg")
          .attr("width", width + margin.right + margin.left)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Loading our data file
d3.json("../data/nba.json", 
    function(error, NBA) {
      if (error) throw error;

      root = NBA;
      root.x0 = height / 2;
      root.y0 = 0;

      // function to hide child nodes
      function collapse(d) {
        if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
        }
      }

      // hiding the child nodes
      root.children.forEach(collapse);
      update(root);
    }
  );

d3.select(self.frameElement).style("height", "800px");

// Creating our update method
function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse();
  var  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(
          function(d) {
            d.y = d.depth * 180;
          }
        );

  // Update the nodes…
  var node = svg.selectAll("g.node")
                .data(nodes, 
                  function(d) {
                    return d.id || (d.id = ++i);
                  }
                );

  // Add children nodes from parent's previous position
  var nodeEnter = node.enter()
                      .append("g")
                      .attr("class", "node")
                      .attr("transform", 
                        function(d) {
                          return "translate(" + source.y0 + "," + source.x0 + ")"; 
                        }
                      )
                      .on("click", click);

  // Add image to the nodes
  nodeEnter.append("image")
              .attr("xlink:href", "../Images/basketball.png")
              .attr("x", "-8px")
              .attr("y", "-8px")
              .attr("width", "17px")
              .attr("height", "17px");

  // Add text to the nodes
  nodeEnter.append("text")
            .attr("x", 
              function(d) {
                return d.children || d._children ? -10 : 10;
              }
            )
            .attr("dy", ".35em")
            .attr("text-anchor", 
              function(d) {
                return d.children || d._children ? "end" : "start"; 
              }
            )
            .style("font-weight", "bold")
            .text(
              function(d) {
                return d.name;
              }
            );

  // Expand child nodes to new position
  var nodeUpdate = node.transition()
                        .duration(duration)
                        .attr("transform", 
                          function(d) {
                            return "translate(" + d.y + "," + d.x + ")"; 
                          }
                        );

  // Retract child nodes to the parent's position
  var nodeExit = node.exit()
                      .transition()
                      .duration(duration)
                      .attr("transform", 
                        function(d) {
                          return "translate(" + source.y + "," + source.x + ")";
                        }
                      )
                      .remove();

  // Update the links…
  var link = svg.selectAll("path.link")
                .data(links, 
                  function(d) {
                    return d.target.id;
                  }
                );

  // Enter any new links at the parent's previous position.
  link.enter()
      .insert("path", "g")
      .attr("class", "link")
      .attr("d", 
        function(d) {
          var o = {x: source.x0, y: source.y0};
          return diagonal({source: o, target: o});
        }
      );

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit()
      .transition()
      .duration(duration)
      .attr("d", 
        function(d) {
          var o = {x: source.x, y: source.y};
          return diagonal({source: o, target: o});
        }
      )
      .remove();

  // Store old position for transition
  nodes.forEach(
          function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
          }
        );
}

// Toggle on click
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  }
  else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}