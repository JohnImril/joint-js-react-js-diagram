import React, { useEffect, useRef } from "react";
import { dia, shapes } from "jointjs";

function JointLayer() {
  const canvas = useRef(null);

  useEffect(() => {
    const graph = new dia.Graph();

    const paper = new dia.Paper({
      el: document.getElementsByClassName("canvas-functional"),
      model: graph,
      width: 1920,
      height: 500,
      gridSize: 1,
    });

    const rect = new shapes.standard.Rectangle();
    rect.position(600, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: "#7109AA",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    rect.addTo(graph);

    const circle = new shapes.standard.Circle();
    circle.position(600, 120);
    circle.resize(100, 40);
    circle.attr({
      body: {
        fill: "#7109AA",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    circle.addTo(graph);

    const rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr("label/text", "World!");
    rect2.addTo(graph);

    const link = new shapes.standard.Link();
    link.target(rect);
    link.source(rect2);
    link.addTo(graph);
  }, []);

  return <div className="canvas-functional" ref={canvas} />;
}

export default JointLayer;
