import React, { Component} from "react";
import * as d3 from "d3";

class Chart extends Component{
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    this.initializeD3();
  }

  componentWillMount() {
  }


  initializeD3 () {
    var width = 800,
    height = 250,
    radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal(d3.schemeCategory20);



var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.pie()
    .sort(null)
    .value(function (d) {
    return d.amount;
});

    var svg = d3.select("#d3").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var g = svg.selectAll(".arc")
      .data(pie(this.props.data))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function (d) {
      return color(d.data.category);
  });

  g.append("text")
      .attr("transform", function (d) {
      return "translate(" + arc.centroid(d) + ")";
  })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function (d) {
      return d.data.category;
  });
  }
  render(){
    console.log()

    return(
      <div >
      <h1> Where My Moniez Went </h1>  
     <div id="d3"></div>
      </div> 
    );
  }
}

export default Chart;
