import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js";
import { Box } from "@mui/system";
import { Card } from "@mui/material";

function Graph({ products }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!products || !products.length) return;
    // group products by type and count the number of each type
    const grouped = products.reduce((acc, curr) => {
      if (!acc[curr.type]) {
        acc[curr.type] = { type: curr.type, count: 0 };
      }
      acc[curr.type].count++;
      return acc;
    }, {});

    const data = Object.values(grouped);
    const ctx = document.getElementById("myChart");
    if (!ctx) return;
    if (chartRef.current) chartRef.current.destroy();
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((e) => e.type),
        datasets: [
          {
            label: "product",
            data: data.map((row) => row.count),
            backgroundColor: [
              "rgba(254, 229 ,229 ,0.8)",
              "rgba(241,236 ,215 ,0.8)",
              "rgba(216,225 ,239 ,0.8)",
            ],
            borderColor: "black",
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Product Type By Quantity",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    chartRef.current = myChart;
  }, [products]);

  return (
    <Card
      sx={{
        marginTop: "10%",
        width: 750,
        height: 380,
        marginLeft: "20rem",
        border: "3px solid black",
      }}
    >
      <div
        style={{
          width: 700,
          display: "flex",
          alignItems: "center",
          marginLeft: 20,
          justifyContent: "center",
        }}
      >
        <canvas id="myChart"></canvas>
      </div>
    </Card>
  );
}

export default Graph;