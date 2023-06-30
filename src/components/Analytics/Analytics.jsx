import React from "react";
import MainHeader from "../pop-ups/MainHeader";
import { Chart } from "./SalesChart";
import "./analytics.css";
import { StockChart } from "./StockChart";

const Analytics = () => {
  return (
    <div className="analytics dashboard">
      <MainHeader title="Analytics">
        Data visualization of this month
      </MainHeader>
      <main>
        <div className="chart-data">
          <div className="chart">
            <h3>Active hours details</h3>
            <div className="chart-view">
              <Chart />
            </div>
          </div>
          <div className="chart">
            <h3>Sale &amp; Income of this month</h3>
            <div className="chart-view">
              <StockChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
