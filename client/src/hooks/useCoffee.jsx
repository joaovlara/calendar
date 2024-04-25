// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// function useCoffee() {
//   const [coffeeData, setCoffeeData] = useState({});

//   useEffect(() => {
//     getCafe();
//   }, []); // Chamado quando altera o funcionário do café

//   const getCafe = async () => {
//     try {
//       const res = await axios.get("http://192.168.18.32:8800/getCafe");
//       const groupedData = groupByDay(res.data);
//       setCoffeeData(groupedData);
//     } catch (error) {
//       console.error("Erro ao obter dados do cafe:", error);
//       toast.error("Erro ao obter dados do cafe");
//     }
//   };

//   const groupByDay = (data) => {
//     return data.reduce((acc, coffee) => {
//       const { dia_da_semana, ...rest } = coffee;
//       if (!acc[dia_da_semana]) {
//         acc[dia_da_semana] = [rest];
//       } else {
//         acc[dia_da_semana].push(rest);
//       }
//       return acc;
//     }, {});
//   };

//   return coffeeData;
// }

// export default useCoffee;
