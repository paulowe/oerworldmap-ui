import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
import Link from './Link'
import translate from './translate'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import '../styles/components/Statistics.pcss'

const color = d3.scaleOrdinal(["#ff8c00", "#ffb900", "#ffe600", "#d0d723", "#a0c846"])

const PieChart = ({name, buckets, emitter}) => {

  const el = ReactFauxDOM.createElement('svg')
  el.setAttribute("width", "300")
  el.setAttribute("height", "300")
  const svg = d3.select(el),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

  const pie = d3.pie()
    .sort(null)
    .value(d => d.doc_count)

  const path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50)

  const arc = g.selectAll(".arc")
    .data(pie(buckets))
    .enter().append("g")
    .attr("class", "arc")
    .append("a")
    .attr("xlink:href", function(d) { return `/resource/?filter.${name}=${d.data.key}`})
    .on('click', (d) => {d3.event.preventDefault(); emitter.emit('navigate', `/resource/?filter.${name}=${d.data.key}`)})

  arc.append("path")
    .attr("d", path)
    .attr("fill", d => color(d.data.key))

  return el.toReact()
}

const charts = [
  "about.@type",
  "about.secondarySector.@id",
  "about.isFundedBy.isAwardedBy.@id",
  "about.availableChannel.availableLanguage",
  "about.location.address.addressCountry",
  "about.license.@id",
  "about.about.@id",
  "about.keywords",
  "about.agent.location.address.addressCountry",
  "about.audience.@id",
  "about.primarySector.@id"
]

const Statistics = ({translate, aggregations, emitter}) => (
  <div className="Statistics">
    <FullModal>
      <h1 className="title">Global Statistics</h1>
      <div className="links">
        {charts.map(aggregation => (
          <Link key={aggregation} href={`#${aggregation}`}>
            {translate(`Statistics.${aggregation}`)}
          </Link>
        ))}
      </div>
      {charts.map(aggregation => (
        aggregations[aggregation] &&
          <div className="chartContainer" key={aggregation} id={aggregation}>
            <h2>{translate(`Statistics.${aggregation}`)}</h2>
            <div className="graph">
              <PieChart
                emitter={emitter}
                name={aggregation}
                buckets={aggregations[aggregation].buckets}
              />
            </div>
            <ul>
              {aggregations[aggregation].buckets.map(bucket => (
                <li key={bucket.key}>
                  <Link href={`/resource/?${aggregation}=${bucket.key}`}>
                    <span
                      className="color"
                      style={{backgroundColor: color(bucket.doc_count)}}
                    /> {`${translate(bucket.key)} (${bucket.doc_count})`}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
      ))}
    </FullModal>
  </div>
)

Statistics.propTypes = {
  translate: PropTypes.func.isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(translate(Statistics))