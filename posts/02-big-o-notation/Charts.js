import React, { useEffect, useRef } from 'react';
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleLinear,
} from 'd3';

const Charts = props => {
  const svgRef = useRef();
  let margin = { top: 0, right: 0, bottom: 20, left: 50 };
  let width = 350 - margin.left - margin.right;
  let height = 150 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .append('svg')
      .attr('width', width + margin.left - margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    var yScale = scaleLinear()
      .domain([0, 800])
      .range([height, 0]);

    var yAxis = axisLeft(yScale).ticks(5);
    svg.call(yAxis);

    var xScale = scaleLinear()
      .domain([0, props.data.length * 5])
      .range([0, width]);

    var xAxis = axisBottom(xScale).ticks(5);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg
      .append('text')
      .attr('x', '120')
      .attr('y', '165')
      .attr('text-anchor', 'start')
      .style('fill', 'black')
      .text('Amount of items');

    svg
      .append('text')
      .attr('x', 0 - 80)
      .attr('y', 0 - 40)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'start')
      .style('fill', 'black')
      .text('Time');

    const myLine = line()
      .x((value, index) => xScale(index * 6))
      .y(value => yScale(value))
      .curve(curveCardinal);

    svg
      .selectAll('.line')
      .data([props.data])
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '40px 0',
      }}
    >
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default Charts;
