function generateCards() {
    const cardCount = document.getElementById('cardCount').value;
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    for (let i = 1; i <= cardCount; i++) {
        const card = generateBingoCard(i);
        container.appendChild(card);
    }
}

function generateBingoCard(cardNumber) {
    const card = document.createElement('div');
    card.className = 'bingo-card';

    const cardNumberDiv = document.createElement('div');
    cardNumberDiv.className = 'card-number';
    cardNumberDiv.textContent = `Cartón #${cardNumber}`;
    card.appendChild(cardNumberDiv);

    const table = document.createElement('table');

    const header = table.insertRow();
    ['B', 'I', 'N', 'G', 'O'].forEach(letter => {
        const th = document.createElement('th');
        th.textContent = letter;
        header.appendChild(th);
    });

    const numbers = generateBingoNumbers();

    for (let i = 0; i < 5; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            cell.textContent = numbers[j][i];
            if (i === 2 && j === 2) {
                cell.textContent = 'FREE';
            }
        }
    }

    card.appendChild(table);
    return card;
}

function generateBingoNumbers() {
    const numbers = [
        generateColumnNumbers(1, 15),
        generateColumnNumbers(16, 30),
        generateColumnNumbers(31, 45),
        generateColumnNumbers(46, 60),
        generateColumnNumbers(61, 75)
    ];
    return numbers;
}

function generateColumnNumbers(min, max) {
    const numbers = [];
    while (numbers.length < 5) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

function printCards() {
    window.print();
}