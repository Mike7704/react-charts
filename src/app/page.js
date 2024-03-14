"use client";
import React, { useState } from "react";
import DrawChart from "@/components/DrawChart";
import { sampleData1, sampleData2, sampleData3 } from "@/lib/sampleData";
import chartStyles from "@/styles/chart.module.css";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function Home() {
  const [jsonData, setJsonData] = useState("");
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("line");

  const [chartTitle, setChartTitle] = useState("");
  const [chartXLabel, setChartXLabel] = useState("");
  const [chartYLabel, setChartYLabel] = useState("");

  const handleAddData = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      setData(parsedData);
    } catch (error) {
      alert("Error parsing JSON data: " + error.message);
    }
  };

  const handleJsonDataChange = (e) => {
    setJsonData(e.target.value);
  };

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const insertSampleData = (sampleData) => {
    if (sampleData === 1) {
      setJsonData(sampleData1);
      setChartTitle("Sales in 2024");
      setChartXLabel("Month");
      setChartYLabel("Sales");
    } else if (sampleData === 2) {
      setJsonData(sampleData2);
      setChartTitle("Male and Female Population");
      setChartXLabel("Year");
      setChartYLabel("Population");
    } else if (sampleData === 3) {
      setJsonData(sampleData3);
      setChartTitle("Weather");
      setChartXLabel("Month");
      setChartYLabel("Temp");
    } else {
      setJsonData("");
      setChartTitle("");
      setChartXLabel("");
      setChartYLabel("");
    }
  };

  return (
    <main className="page-content-container">
      <div className="input-container">
        <div className="input-row-container">
          <button onClick={() => insertSampleData(1)}>Sample Data 1</button>
          <button onClick={() => insertSampleData(2)}>Sample Data 2</button>
          <button onClick={() => insertSampleData(3)}>Sample Data 3</button>
          <button onClick={() => insertSampleData("")}>Clear</button>
        </div>
        <div className="code-editor-container">
          <CodeEditor
            data-color-mode="light"
            language="json"
            id="jsonData"
            value={jsonData}
            onChange={handleJsonDataChange}
            placeholder="Enter JSON data here"
            style={{
              fontSize: 18,
              backgroundColor: "white",
            }}
          />
        </div>
        <div className="input-row-container">
          <label htmlFor="chartTitle">Title:</label>
          <input
            id="chartTitle"
            name="chartTitle"
            type="text"
            placeholder="Title"
            value={chartTitle}
            onChange={(e) => setChartTitle(e.target.value)}
          ></input>

          <label htmlFor="chartXLabel">X-Label:</label>
          <input
            id="chartXLabel"
            name="chartXLabel"
            type="text"
            placeholder="X-Label"
            value={chartXLabel}
            onChange={(e) => setChartXLabel(e.target.value)}
          ></input>

          <label htmlFor="chartYLabel">Y-Label:</label>
          <input
            id="chartYLabel"
            name="chartYLabel"
            type="text"
            placeholder="Y-Label"
            value={chartYLabel}
            onChange={(e) => setChartYLabel(e.target.value)}
          ></input>
        </div>
        <div className="input-row-container">
          <label htmlFor="chartType">Chart Type:</label>
          <select id="chartType" name="chartType" value={chartType} onChange={handleChartTypeChange}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="area">Area</option>
          </select>
          <button onClick={handleAddData}>Draw Chart</button>
        </div>
      </div>

      <div className="chart-container">
        {data.length > 0 && (
          <>
            <h2 className={chartStyles.title}>{chartTitle}</h2>
            <p className={chartStyles.x_label}>{chartXLabel}</p>
            <p className={chartStyles.y_label}>{chartYLabel}</p>
            <DrawChart graphData={data} type={chartType} />
          </>
        )}
      </div>
    </main>
  );
}
