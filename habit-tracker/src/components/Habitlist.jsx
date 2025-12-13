import React from 'react';

const HabitList = ({ habits }) => {
    return (
        <ul>
            {habits.map((habit, index) => (
                <li key={index}>{habit}</li>
            ))}
        </ul>
    );
};

export default HabitList;