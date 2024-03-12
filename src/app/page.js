import DrawChart from "@/components/DrawChart";
import React from "react";

export default function Home() {
  // Test data
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 20 },
          { x: 3, y: 30 },
          { x: 4, y: 40 },
          { x: 5, y: 30 },
        ],
      },
      {
        label: "Series 2",
        data: [
          { x: 1, y: 5 },
          { x: 2, y: 20 },
          { x: 3, y: 35 },
          { x: 4, y: 45 },
          { x: 5, y: 50 },
        ],
      },
    ],
    []
  );

  return (
    <main className="page-content-container">
      <p className="pb-5">
        This application provides a demonstration of the{" "}
        <a href="https://react-charts.tanstack.com/" target="_blank">
          React Charts
        </a>{" "}
        component library. Enter some data below to see it displayed in an interactive chart.
      </p>
      <DrawChart graphData={data} type="line" />
    </main>
  );
}
