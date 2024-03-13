"use client";
import React from "react";
import { Chart } from "react-charts";

export default function DrawChart({ graphData, type }) {
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (data) => data.x,
      //innerBandPadding: 0,
      //outerBandPadding: 0.1,
      //tickCount: 10,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (data) => data.y,
        elementType: type,
        showDatumElements: true,
      },
    ],
    [type]
  );

  return (
    <Chart
      className="bg-white"
      options={{
        data: graphData,
        primaryAxis,
        secondaryAxes,
        padding: 30,
      }}
    />
  );
}
