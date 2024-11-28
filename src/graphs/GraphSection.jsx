import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale);

const GraphSection = () => {
  const graphData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "#74a14e",
        borderColor: "#4c3a2c",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <section className="mt-10 py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Performance Metrics
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          An overview of our recent community performance
        </p>
      </div>

      {/* Graph Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Graph Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Graph 1</h3>
          <Bar data={graphData} options={{ maintainAspectRatio: true }} />
        </div>

        {/* Graph Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Graph 2</h3>
          <Bar data={graphData} options={{ maintainAspectRatio: true }} />
        </div>

        {/* Graph Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-90 transition duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Graph 3</h3>
          <Bar data={graphData} options={{ maintainAspectRatio: true }} />
        </div>
      </div>
    </section>
  );
};

export default GraphSection;
