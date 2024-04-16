// import React, { useState, useEffect } from "react";
// import { isToday, addMonths, startOfMonth, endOfMonth, isFriday, isLeapYear } from "date-fns";

// function useCalendar() {
//   const DAYS_OF_THE_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
//   const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//   const today = new Date();
//   const [date, setDate] = useState(today);
//   const [day, setDay] = useState(date.getDate());
//   const [month, setMonth] = useState(date.getMonth());
//   const [year, setYear] = useState(date.getFullYear());
//   const [startDay, setStartDay] = useState(startOfMonth(date).getDay());
//   const [fridays, setFridays] = useState([]);

//   useEffect(() => {
//     setDay(date.getDate());
//     setMonth(date.getMonth());
//     setYear(date.getFullYear());
//     setStartDay(startOfMonth(date).getDay());
//     setFridays(findFridaysInYear(date.getFullYear()));
//   }, [date]);

//   function changeMonth(amount) {
//     setDate(prevDate => addMonths(prevDate, amount));
//   }

//   function findFridaysInYear(year) {
//     const fridays = [];
//     for (let month = 0; month < 12; month++) {
//       const daysInMonth = isLeapYear(year) ? endOfMonth(new Date(year, month, 1)).getDate() : endOfMonth(new Date(year, month, 1)).getDate();
//       for (let day = 1; day <= daysInMonth; day++) {
//         const currentDate = new Date(year, month, day);
//         if (isFriday(currentDate)) {
//           fridays.push(currentDate);
//         }
//       }
//     }
//     return fridays;
//   }

//   return {
//     DAYS_OF_THE_WEEK,
//     MONTHS,
//     date,
//     day,
//     month,
//     year,
//     startDay,
//     fridays,
//     changeMonth,
//     setDate,
//     setDay,
//     setMonth,
//     setYear,
//     setStartDay,
//     setFridays,
//     findFridaysInYear
// };
// }

// export default useCalendar;