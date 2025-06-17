import React from "react";
import Chart from "react-apexcharts";

const DoctorMountainChart = ({ doctors }) => {
  const series = doctors.map((doc) => ({
    name: doc.name,
    data: [0, doc.price], // create mountain shape (from 0 to price)
  }));

  const colors = [
    "#3B82F6",
    "#F59E0B",
    "#2563EB",
    "#10B981",
    "#F59E0B",
    "#F97316",
    "#6366F1",
    "#EC4899",
    "#22D3EE",
    "#8B5CF6",
  ];

  const options = {
    chart: {
      type: "area",
      stacked: false,
      toolbar: { show: false },
    },
    colors,
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: doctors.map((doc) => doc.name),
      labels: {
        rotate: -45,
        style: { fontSize: "12px" },
      },
    },
    yaxis: {
      title: { text: "Consultation Fee (BDT)" },
    },
    tooltip: {
      y: { formatter: (val) => `৳${val}` },
    },
    legend: { show: false },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-8">
      <h2 className="text-center font-bold text-lg mb-3">
        Doctor Price Comparison
      </h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default DoctorMountainChart;
