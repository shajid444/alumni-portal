import React, { useState } from 'react';

const EventSection = () => {
    const [view, setView] = useState('schedule');
    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Paris Olympic Opening Ceremony',
            date: '2024-12-20',
            time: '18:00',
            venue: 'Wankhede Stadium',
            status: 'Scheduled',
        },
        {
            id: 2,
            title: 'Swimming',
            date: '2024-12-22',
            time: '15:00',
            venue: 'Paris',
            status: 'Rescheduled',
        },
        {
            id: 3,
            title: 'Archer',
            date: '2025-01-15',
            time: '19:00',
            venue: 'Paris',
            status: 'Scheduled',
        },
    ]);

    const [reminders, setReminders] = useState([]);

    const addReminder = (event) => {
        if (!reminders.find((reminder) => reminder.id === event.id)) {
            setReminders([...reminders, event]);
            alert(`Reminder added for: ${event.title}`);
        } else {
            alert('Reminder already exists!');
        }
    };

    return (
        <div className="bg-gray-100 py-10">
            <div className="text-center bg-blue-600 text-white py-6">
                <h1 className="text-3xl font-bold">Event Section</h1>
                <p className="text-lg mt-2">View Event Schedule | Event Reminders | Notifications</p>
            </div>

            <div className="flex justify-center mt-4 space-x-4">
                <button
                    className={`px-4 py-2 rounded-md ${view === 'schedule' ? 'bg-black text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => setView('schedule')}
                >
                    View Schedule
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${view === 'reminders' ? 'bg-black text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => setView('reminders')}
                >
                    Event Reminders
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${view === 'notifications' ? 'bg-black text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => setView('notifications')}
                >
                    Notifications
                </button>
            </div>

            {view === 'schedule' && (
                <div className="mt-8 px-6">
                    <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-600">Date: {event.date}</p>
                                <p className="text-gray-600">Time: {event.time}</p>
                                <p className="text-gray-600">Venue: {event.venue}</p>
                                <p
                                    className={`font-bold mt-2 ${event.status === 'Rescheduled' ? 'text-red-500' : 'text-green-500'
                                        }`}
                                >
                                    {event.status}
                                </p>
                                <button
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                    onClick={() => addReminder(event)}
                                >
                                    Add Reminder
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {view === 'reminders' && (
                <div className="mt-8 px-6">
                    <h2 className="text-2xl font-bold mb-4">Event Reminders</h2>
                    {reminders.length > 0 ? (
                        <ul className="list-disc pl-6">
                            {reminders.map((reminder) => (
                                <li key={reminder.id} className="text-gray-700 mb-2">
                                    {reminder.title} - {reminder.date} at {reminder.time}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No reminders added yet.</p>
                    )}
                </div>
            )}

            {view === 'notifications' && (
                <div className="mt-8 px-6">
                    <h2 className="text-2xl font-bold mb-4">Notifications</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="text-gray-700">
                            Stay updated with event notifications. Any rescheduling or updates will appear here.
                        </p>
                        <ul className="list-disc pl-6 mt-4">
                            {events
                                .filter((event) => event.status === 'Rescheduled')
                                .map((event) => (
                                    <li key={event.id} className="text-red-500 mb-2">
                                        {event.title} has been rescheduled to {event.date} at {event.time}.
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventSection;


