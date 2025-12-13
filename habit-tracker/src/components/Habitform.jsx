import React, { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            onAddHabit(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new habit"
            />
            <button type="submit">Add Habit</button>
        </form>
    );
};

export default HabitForm;