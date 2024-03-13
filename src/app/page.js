"use client";
import React, { useState } from "react";
import DrawChart from "@/components/DrawChart";
import { sampleData1, sampleData2, sampleData3 } from "@/lib/sampleData";
import chartStyles from "@/styles/chart.module.css";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function Home() {
  const [jsonData, setJsonData] = useState(sampleData3);
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("line");

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

  return (
    <main className="page-content-container">
      <div className="input-container">
        <div className="chart-type-container">
          <label htmlFor="chartType">Chart Type:</label>
          <select id="chartType" name="chartType" value={chartType} onChange={handleChartTypeChange}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="area">Area</option>
          </select>
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
            }}
          />
        </div>
        <button onClick={handleAddData}>Draw Chart</button>
      </div>

      <div className="chart-container">
        {data.length > 0 && (
          <>
            <h2 className={chartStyles.title}>Title</h2>
            <p className={chartStyles.x_label}>Month</p>
            <p className={chartStyles.y_label}>Values</p>
            <DrawChart graphData={data} type={chartType} />
          </>
        )}
      </div>
    </main>
  );
}
