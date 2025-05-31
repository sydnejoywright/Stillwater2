import React, { useState } from 'react';

const kids = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'];

export default function SelectKids() {
  const [checkedKids, setCheckedKids] = useState<string[]>([]);

  // Determine if all are selected
  const allChecked = checkedKids.length === kids.length;
  const isIndeterminate = checkedKids.length > 0 && !allChecked;

  const toggleKid = (kid: string) => {
    setCheckedKids((prev) =>
      prev.includes(kid) ? prev.filter((k) => k !== kid) : [...prev, kid]
    );
  };

  const toggleSelectAll = () => {
    if (allChecked) {
      setCheckedKids([]);
    } else {
      setCheckedKids([...kids]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Select Your Kids</h1>

      <div className="space-y-4 mb-8">
        {/* Select All */}
        <label className="flex items-center space-x-3 cursor-pointer font-semibold">
          <input
            type="checkbox"
            checked={allChecked}
            ref={(el) => {
              if (el) el.indeterminate = isIndeterminate;
            }}
            onChange={toggleSelectAll}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>Select All</span>
        </label>

        {/* Individual Checkboxes */}
        {kids.map((kid) => (
          <label
            key={kid}
            className="flex items-center space-x-3 cursor-pointer select-none"
          >
            <input
              type="checkbox"
              checked={checkedKids.includes(kid)}
              onChange={() => toggleKid(kid)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-lg">{kid}</span>
          </label>
        ))}
      </div>

      <button
        disabled={!allChecked}
        className={`px-6 py-3 rounded font-semibold text-white transition ${
          allChecked
            ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Start Session
      </button>
    </div>
  );
}
