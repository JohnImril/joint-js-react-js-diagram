import React from "react";
import { useMap } from "react-leaflet";
import { dia, shapes } from "jointjs";

import L from "leaflet";

class Graph extends React.Component {
  helpDiv;

  createButtonControl() {
    const MapHelp = L.Control.extend({
      onAdd: (map) => {
        const helpDiv = L.DomUtil.create("button", "");
        this.helpDiv = helpDiv;
        helpDiv.innerHTML = this.props.title;

        helpDiv.addEventListener("click", () => {
          const marker = L.rectangle(this.props.bounds, {
            color: "#ff7800",
            weight: 1,
          }).addTo(map);

          marker.openPopup();
        });

        return helpDiv;
      },
    });
    return new MapHelp({ position: "bottomright" });
  }

  componentDidMount() {
    const { map } = this.props;
    const control = this.createButtonControl();
    control.addTo(map);
    const graph = new dia.Graph();

    const paper = new dia.Paper({
      el: document.getElementById("rectangle"),
      model: graph,
      width: 1920,
      height: 400,
      gridSize: 1,
    });

    const rect = new shapes.standard.Rectangle();
    rect.position(600, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: "#ee6d2e",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    rect.addTo(graph);

    const rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr("label/text", "World!");
    rect2.addTo(graph);

    const link = new shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);
  }

  componentWillUnmount() {
    this.helpDiv.remove();
  }
  render() {
    return <div id="canvas" />;
  }
}

function withMap(Component) {
  return function WrappedComponent(props) {
    const map = useMap();
    return <Component {...props} map={map} />;
  };
}

export default withMap(Graph);
