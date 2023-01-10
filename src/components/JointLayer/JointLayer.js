import React, { useEffect, useRef, useState } from "react";
import { dia, shapes } from "jointjs";

import "./JointLayer.css";

const JointLayer = (props) => {
  const [interactive, setInteractive] = useState(false);

  const canvas = useRef(null);

  useEffect(() => {
    const graph = new dia.Graph();

    const paper = new dia.Paper({
      el: document.getElementsByClassName("leaflet-marker-pane"),
      model: graph,
      interactive: true,
      width: 1080,
      height: 920,
      gridSize: 1,
    });

    const rect = new shapes.standard.Rectangle();
    rect.position(600, 30);
    rect.resize(100, 40);
    rect.attr({
      root: {
        html: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6056 3.87217C11.9741 3.13512 13.0259 3.13512 13.3944 3.87217L21.1514 19.3861C21.4838 20.051 21.0003 20.8333 20.257 20.8333H4.74303C3.99965 20.8333 3.51616 20.051 3.84861 19.3861L11.6056 3.87217Z" fill="#F1B210"/>
      <path d="M13.0151 15.5884H11.9531L11.6357 9.375H13.3264L13.0151 15.5884ZM11.5625 17.5354C11.5625 17.2343 11.6418 17.0064 11.8005 16.8518C11.9592 16.6931 12.1851 16.6138 12.478 16.6138C12.7669 16.6138 12.9887 16.6951 13.1433 16.8579C13.2979 17.0207 13.3752 17.2465 13.3752 17.5354C13.3752 17.8243 13.2959 18.0542 13.1372 18.2251C12.9826 18.3919 12.7629 18.4753 12.478 18.4753C12.1891 18.4753 11.9633 18.394 11.8005 18.2312C11.6418 18.0684 11.5625 17.8365 11.5625 17.5354Z" fill="black"/>
      </svg>
      `,
      },
      body: {
        fill: "#7109AA",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    rect.addTo(graph);

    // const circle = new shapes.standard.Circle();
    // circle.position(600, 120);
    // circle.resize(100, 40);
    // circle.attr({
    //   body: {
    //     fill: "#7109AA",
    //   },
    //   label: {
    //     text: "Hello",
    //     fill: "white",
    //   },
    // });
    // circle.addTo(graph);

    const rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr("label/text", "World!");
    rect2.addTo(graph);

    const link = new shapes.standard.Link();
    link.target(rect);
    link.source(rect2);
    link.addTo(graph);
  }, [interactive]);

  const edit = () => {
    setInteractive(!interactive);
  };

  return (
    <>
      <div className="canvas-functional" ref={canvas} />
      <button className="button" onClick={edit}></button>
    </>
  );
};

export default JointLayer;
