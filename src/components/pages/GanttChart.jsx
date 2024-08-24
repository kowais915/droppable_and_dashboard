import React from 'react';

const GanttChart = ({ tasks }) => {
  const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11'];
  const months = [
    { name: 'Jan', weeks: 4 },
    { name: 'Feb', weeks: 4 },
    { name: 'Mar', weeks: 3 }, 
  ];

  const getBarStyle = (start, duration, type) => {
    const left = `${(start - 1) * 100 / 11}%`;
    const width = `${duration * 100 / 11}%`;
    let backgroundColor;
    switch (type) {
      case 'planned':
        backgroundColor = 'blue';
        break;
      case 'actual':
        backgroundColor = 'green';
        break;
      case 'delay':
        backgroundColor = 'red';
        break;
    }
    return {
      position: 'absolute',
      top: '0',
      height: '100%',
      backgroundColor: backgroundColor,
      left: left,
      width: width,
      zIndex: type === 'delay' ? 30 : type === 'actual' ? 20 : 10,
    };
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border w-1/4"></th>
            {months.map((month, index) => (
              <th key={index} colSpan={month.weeks} className="p-2 border">
                {month.name}
              </th>
            ))}
          </tr>
          <tr className="bg-gray-100">
            <th className="p-2 border w-1/4">Task</th>
            {weeks.map((week, index) => (
              <th key={index} className="p-2 border w-1/12">{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{task.name}</td>
              <td colSpan="11" className="p-0 border relative h-8">
                {task.planned && (
                  <div style={getBarStyle(task.planned.start, task.planned.duration, 'planned')}></div>
                )}
                {task.actual && (
                  <div style={getBarStyle(task.actual.start, task.actual.duration, 'actual')}></div>
                )}
                {task.delay && (
                  <div style={getBarStyle(task.delay.start, task.delay.duration, 'delay')}></div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GanttChart;
