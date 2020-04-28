import React, { Component } from 'react';
import elephantqf from '@images/quickfacts/elephant.png';
import Image from 'react-bootstrap/Image'
import { Section, Container } from '@components/global';
import * as d3 from 'd3'
import '@styles/stylesheet.css';



class LineChart extends Component {
    componentDidMount() {
        const data = [    
            { 
            year: 1989, price: 206
            },
            {
                year: 2014, price:2100
            },
            {
                year: 2017, price: 730
            }];
        this.drawLineChart(data)
    }
    drawLineChart(data)  {
        var margin = {top: 20, right: 10, bottom: 60, left: 60};
        const canvasHeight = 400 + margin.top + margin.bottom
        const canvasWidth = 600 + margin.left + margin.right
        const yScale = d3.scaleLinear().range([400, 0]).domain([0, d3.max(data, dataPoint => dataPoint.price)]);
        let yaxis = d3.axisLeft().scale(yScale).tickFormat(d3.format("d"))


        const xScale = d3.scaleLinear().range([0, 600]).domain(d3.extent(data, dataPoint => dataPoint.year));
        let xaxis = d3.axisBottom().scale(xScale).tickFormat(d3.format("d"));


        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("background-color", "#ffffff");


        svgCanvas.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + margin.bottom + "," + 400 + ")")
        .call(xaxis);

        svgCanvas.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + margin.left + ", 0)")
        .call(yaxis);


        const line = d3.line().x(dataPoint => xScale(dataPoint.year)).y(dataPoint => yScale(dataPoint.price));

        svgCanvas.append("path")
        // .selectAll('.line').data(data).enter().append('path').attr("d", line).attr('class', 'line').style('stroke', '#000000')
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .xScale(function(d) { return xScale(d.year) })
          .yScale(function(d) { return yScale(d.price) })
          )
  
    }
    render() { return <div ref="canvas"></div> }
}
export default LineChart

// const draw = (props) => {
//     d3.select('.viz > *').remove();
//     const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//     const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     d3.select('.viz').append('svg')
//     .attr('height', h)
//     .attr('width', w)
//     .attr('id', 'svg-viz')

// const yScale = d3.scaleLinear().range([h, 0]).domain([0, d3.max(data, dataPoint => dataPoint.price)]);

// const xScale = d3.scaleLinear().range([0, w]).domain(d3.extent(data, dataPoint => dataPoint.year));

// const line = d3.line().x(dataPoint => xScale(dataPoint.year)).y(dataPoint => yScale(dataPoint.price));

// d3.select('#svg-viz').append("g").attr("class", "x axis").attr("transform", "translate(0," + h + ")").call(xScale);

// d3.select('#svg-viz').append("g").attr("class", "x axis").attr("transform", "translate(0," + h + ")").call(yScale);

// d3.select('#svg-viz').selectAll('.line').data(data).enter().append('path').attr('class', 'line').style('stroke', '#000000')
// }

// export default draw