import React, { useEffect } from "react";
import Gantt from "frappe-gantt";

const GanttChart = ({ allTasks }) => {
  useEffect(() => {
    const gantt = new Gantt("#gantt", allTasks, {
      header_height: 50,
      column_width: 30,
      step: 24,
      view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
      bar_height: 20,
      bar_corner_radius: 3,
      arrow_curve: 5,
      padding: 18,
      view_mode: "Week",
      date_format: "YYYY-MM-DD",
      language: "en", // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
      custom_popup_html: null,
    });
  }, [allTasks]);

  return (
    <div className="gantt-target">
      <svg id="gantt"></svg>
    </div>
  );
};

export default GanttChart;
