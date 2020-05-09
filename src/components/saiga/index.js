// SVG parameters
    const svg1 = d3.select('svg')
    .attr('width', 1000)
    .attr('height', 1000);

// Tooltips
const tooltip = d3.select("body")
    .append("div")
    .attr('class', 'tooltip');

const saigatooltip = d3.selectAll('#Saiga1, #Saiga2, #Saiga3')
    .on('mouseover', function () {
        return tooltip.style('visibility', 'visible')
            .text('The Saiga antelope is the center of the steppe ecosystem.');
    })
    .on("mousemove", function () {
        return tooltip.style("top", (event.pageY - 30) + "px").style("left", event.pageX + "px");
    })
    .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
    });

const predatortooltip = d3.selectAll('#Wolf1, #Wolf2, #Fox1, #Fox2')
    .on('mouseover', function () {
        return tooltip.style('visibility', 'visible')
            .text('Predators rely on Saiga antelope as a food source.');
    })
    .on("mousemove", function () {
        return tooltip.style("top", (event.pageY - 30) + "px").style("left", event.pageX + "px");
    })
    .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
    });

const planttooltip = d3.selectAll('#Plant1, #Plant2, #Plant3, #Plant4')
    .on('mouseover', function () {
        return tooltip.style('visibility', 'visible')
            .text('Native plants rely on Saiga antelope to maintain diversity.');
    })
    .on("mousemove", function () {
        return tooltip.style("top", (event.pageY - 30) + "px").style("left", event.pageX + "px");
    })
    .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
    });

//Selections
//#Saiga1, #Saiga2, #Saiga3, #Wolf1, #Wolf2, #Fox1, #Fox2, #Plant1, #Plant2, #Plant3, #Plant4
const remove1 = d3.selectAll('#Saiga1')
    .on('click', function () {
        d3.selectAll('#Saiga1, #Wolf1, #Fox1, #Plant1, #Plant2').style('fill-opacity', 0);
    });

const remove2 = d3.selectAll('#Saiga2')
    .on('click', function () {
        d3.selectAll('#Saiga2, #Wolf2, #Fox2, #Plant3').style('fill-opacity', 0);
    });

const remove3 = d3.selectAll('#Saiga3')
    .on('click', function () {
        d3.selectAll('#Saiga3, #Plant4').style('fill-opacity', 0);
    });

const addin = d3.selectAll('#Background1, #BackgroundLines')
    .on('click', function () {
        d3.selectAll('#Saiga1, #Saiga2, #Saiga3, #Wolf1, #Wolf2, #Fox1, #Fox2, #Plant1, #Plant2, #Plant3, #Plant4').style('fill-opacity', 1);
    });

// Button
var button = svg1.selectAll(".rect")
    .data([10])
    .enter()
    .append("g")
    .classed('rect', true)

button.append("rect")
    .attr("width", 130)
    .attr("height", 20)
    .attr("x", 265)
    .attr("y", 100)
    .attr("fill", "darkgrey")

button.append('text')
    .attr('x', 275)
    .attr('y', 115)
    .attr('fill', 'white')
    .attr('font-family', "Avenir")
    .text('Save the Saiga!');

button.on('click', function () {
    d3.selectAll('#Saiga1, #Saiga2, #Saiga3, #Wolf1, #Wolf2, #Fox1, #Fox2, #Plant1, #Plant2, #Plant3, #Plant4').style('fill-opacity', 1);})