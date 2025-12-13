import React, { useState } from 'react';
import Header from './components/Header';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

const App = () => {
    const [habits, setHabits] = useState([]);

    const addHabit = (habit) => {
        setHabits([...habits, habit]);
    };

    return (
        <div>
            <Header />
            <HabitForm onAddHabit={addHabit} />
            <HabitList habits={habits} />
        </div>
    );
};

export default App;