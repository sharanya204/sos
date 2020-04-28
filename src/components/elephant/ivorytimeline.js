<div class="infobox" style="visibility: hidden;">
  <h3 class="title">Book Title</h3>
  <h4 class="author">Book Author</h4>
  <p>Published in: <strong class="published">year</strong></p>
  <p>Word count: <strong class="words">published</strong></p>
</div>
<svg></svg>

<script>
const timescale = d3.range(0, 2000, 100)
const years = timescale.map(function(d) {
    return d;
  })

const margin = ({ top: 50, right: 50, bottom: 50, left: 50 })
const width = window.innerWidth - margin.left - margin.right
const height = window.innerHeight - margin.top - margin.bottom

xScale = d3
  .scalePoint()
  .domain(years)
  .range([0, width])


var svgContainer = d3.select(DOM.svg(1200, 100));

var x_axis = d3.axisBottom().scale(xScale);

svgContainer.append("g").call(x_axis);


data_uses = [
    {
      key: "panels",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Nimrud_ivory_Egyptians.jpg",
      places: ["Egypt", "India", "China"],
      text: "Ivory was used to create panels"
    },
    {
      key: "statues",
      img:
        "https://raw.githubusercontent.com/sharanya204/sos/master/src/images/egypt_use1.jpg?token=AJ4TMRUEF647CEI6MTJJV6C6V4LIM",
      places: ["Egypt", "India", "China", "Europe"],
      text: "Ivory was used to carve statues"
    },
    {
      key: "weapons",
      img:
        "https://cdn2.picryl.com/photo/2017/05/22/arrowheads-needles-hooks-and-harpoons-039765-1024.jpg",
      places: ["Egypt", "India", "China", "Europe"],
      text: "Ivory was used to make weapons"
    }
  ]
  </script>