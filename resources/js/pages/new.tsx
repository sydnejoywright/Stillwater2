import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function New() {
    const [timeOfDay, setTimeOfDay] = useState('');
    const [group, setGroup] = useState('');
    const [runBy, setRunBy] = useState('');

    const today = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const sessionData = {
            timeOfDay,
            group,
            ...(group === 'Small group' && { runBy }),
        };
        console.log(sessionData);
        Inertia.visit('/select-kids');;
    };

    const isFormComplete = timeOfDay && group && (group !== 'Small group' || runBy);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-2">Join a Session</h1>
            <p className="text-gray-600 mb-8">{today}</p>

            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                {/* Time of Day */}
                <div>
                    <label htmlFor="timeOfDay" className="block text-sm font-medium text-gray-700 mb-1">
                        Time of Day
                    </label>
                    <select
                        id="timeOfDay"
                        value={timeOfDay}
                        onChange={(e) => setTimeOfDay(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a time</option>
                        {['Morning', 'Afternoon', 'Evening'].map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Group */}
                <div>
                    <label htmlFor="group" className="block text-sm font-medium text-gray-700 mb-1">
                        Group
                    </label>
                    <select
                        id="group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a group</option>
                        {['All boys', 'All girls', 'Big group', 'Ranch', 'Small group'].map((grp) => (
                            <option key={grp} value={grp}>
                                {grp}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Run By - Only if Small group */}
                {group === 'Small group' && (
                    <div>
                        <label htmlFor="runBy" className="block text-sm font-medium text-gray-700 mb-1">
                            Run By
                        </label>
                        <select
                            id="runBy"
                            value={runBy}
                            onChange={(e) => setRunBy(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select a person</option>
                            {['Anna', 'Ryan', 'Sean', 'Stephanie'].map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Build Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={!isFormComplete}
                        className={`w-full px-6 py-3 rounded text-white font-semibold transition ${
                            isFormComplete
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                        JOIN
                    </button>
                </div>
            </form>
        </div>
    );
}
