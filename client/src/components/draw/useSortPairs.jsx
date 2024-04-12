import "react-toastify/dist/ReactToastify.css";

function useSortPairs () {

    const sortPairs = (members, setPairs) => {
        const shuffledMembers = [...members];

        // Se a quantidade de membros for ímpar, duplicar um membro aleatório
        if (shuffledMembers.length % 2 !== 0) {
            const randomIndex = Math.floor(Math.random() * shuffledMembers.length);
            const randomMember = shuffledMembers[randomIndex];
            const duplicateMember = { ...randomMember };  // Duplicar o membro aleatório
            shuffledMembers.push(duplicateMember);
        }
        // Embaralhar os membros
        for (let i = shuffledMembers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
        }
        // Inicializa um array para armazenar os pares sorteados
        const shuffledPairs = [];
        for (let i = 0; i < shuffledMembers.length; i += 2) {
            const pair = [shuffledMembers[i], shuffledMembers[i + 1]];
            shuffledPairs.push(pair);
        }

        setPairs(shuffledPairs);

        console.log('Pares sorteados:');
        shuffledPairs.forEach(pair => {
            if (pair.length === 2) {
                console.log(`${pair[0].nome} e ${pair[1].nome}`);
            } else {
                console.log(`${pair[0].nome}`);
            }
        });
    };
    
  return ( sortPairs )
}

export default useSortPairs
