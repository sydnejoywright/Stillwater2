import React, { FC, useState } from 'react';
import { Link } from '@inertiajs/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home: FC = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-10">Welcome to the Stillwater App</h1>

            <div className="space-y-4 mb-10">
                <Link
                    href="/new"
                    className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Join a Session
                </Link>
                <Link
                    href="/history"
                    className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Session History
                </Link>
                <Link
                    href="/tracker"
                    className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                >
                    Accountability Tracker
                </Link>
            </div>

            {/* Calendar */}
            <div className="w-3/4 bg-white p-4 rounded shadow mt-10">
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>
    );
};

export default Home;
