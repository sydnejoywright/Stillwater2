import React, { FC } from 'react';

const randomNames = [
  "Alice", "Bob", "Charlie", "Diana", "Ethan",
  "Fiona", "George", "Hannah", "Ian", "Julia"
];

const New: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 space-y-6">
      <h1 className="text-xl font-bold mb-4 text-center">
        This is the Tracker Page
      </h1>

      <p className="max-w-md text-center text-gray-700">
        It looks like you're all caught up! Any notes you need to do will appear here.
      </p>

      <div className="max-w-md text-left text-green-600 font-mono space-y-4">
        <p>
          TO DO: based on who is logged in, I want to query the database and pull all places where the employee is missing their note. I want it to be displayed like:
        </p>

        {/* Row 1 */}
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-green-700 font-bold w-6 text-left">-</span>
          <span className="text-blue-500">Saturday May 31</span>
          <span className="text-purple-500">Morning</span>
          <span className="text-pink-500">Anna's Small Group</span>
          <span className="text-yellow-600">Evan:</span>
          <input
            type="text"
            placeholder="Write Note"
            className="border border-gray-400 rounded px-1 py-0.5"
          />
          <select className="border border-gray-400 rounded px-1 py-0.5 bg-white text-gray-700">
            <option disabled selected>Reassign</option>
            {randomNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <input type="checkbox" />
        </div>

        {/* Row 2 */}
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-green-700 font-bold w-6 text-left">-</span>
          <span className="text-blue-500">Sunday June 1</span>
          <span className="text-purple-500">Afternoon</span>
          <span className="text-pink-500">Big Group</span>
          <span className="text-yellow-600">Sarah:</span>
          <input
            type="text"
            placeholder="Write Note"
            className="border border-gray-400 rounded px-1 py-0.5"
          />
          <select className="border border-gray-400 rounded px-1 py-0.5 bg-white text-gray-700">
            <option disabled selected>Reassign</option>
            {randomNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <input type="checkbox" />
        </div>

        {/* Row 3 */}
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-green-700 font-bold w-6 text-left">-</span>
          <span className="text-blue-500">Monday June 2</span>
          <span className="text-purple-500">Evening</span>
          <span className="text-pink-500">Ranch</span>
          <span className="text-yellow-600">Mike:</span>
          <input
            type="text"
            placeholder="Write Note"
            className="border border-gray-400 rounded px-1 py-0.5"
          />
          <select className="border border-gray-400 rounded px-1 py-0.5 bg-white text-gray-700">
            <option disabled selected>Reassign</option>
            {randomNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default New;
