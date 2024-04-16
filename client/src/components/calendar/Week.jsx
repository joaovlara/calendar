import React from 'react'
import { DayWeek, TextWeek, WeekContainer } from "..//../styles/styles.calendar";

const Week = () => {
    const DAYS_OF_THE_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    return (
        <WeekContainer>
            {DAYS_OF_THE_WEEK.map(w => (
                <DayWeek key={w}>
                    <TextWeek>{w}</TextWeek>
                </DayWeek>
            ))}
        </WeekContainer>
    )
}

export default Week