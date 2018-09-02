import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // d3.selectAll("#d3").remove();

    this.initializeD3();
  }
  componentDidUpdate() {
    d3.selectAll("#d3_piechart_container").remove();
    d3.selectAll("svg").remove();
    this.initializeD3();
  }

  initializeD3() {
    let width = 800;
    const height = 250;
    const radius = Math.min(width, height) / 2;

    let color = d3.scale
      .ordinal()
      .range([
        '#98abc5',
        '#8a89a6',
        '#7b6888',
        '#6b486b',
        '#a05d56',
        '#d0743c',
        '#ff8c00',
      ]);

    let arc = d3.svg
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);

    let pie = d3.layout
      .pie()
      .sort(null)
      .value((d) => {
        return d.amount;
      });

    let svg = d3
      .select('#d3')
      .append('svg')
      .attr("id", "d3_piechart_container")
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let g = svg
      .selectAll('.arc')
      .data(pie(this.props.data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .style('fill', (d) => {
        return color(d.data.category);
      });

    g.append('text')
      .attr('transform', (d) => {
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text((d) => {
        return d.data.category;
      });
  }

  render() {
    return (
      <div>
        <h1>
          Where My Moniez Went
        </h1>
        <div id="d3" />
      </div>
    );
  }
}
