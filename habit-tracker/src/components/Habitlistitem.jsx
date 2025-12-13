const HabitListItem = ({ habit, onIncrement, onDecrement }) => {
    return (
        <li>
            <span>{habit.name} - Progress: {habit.progress}/{habit.goal}</span>
            <button onClick={() => onIncrement(habit.name)}>+</button>
            <button onClick={() => onDecrement(habit.name)}>-</button>
        </li>
    );
};

export default HabitListItem;