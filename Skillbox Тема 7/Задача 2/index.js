const heights = [164, 157, 160, 143, 170];

const heightList = document.querySelector('#heightList');
const addButton = document.querySelector('#addHeight');
const filterButton = document.querySelector('#filterHeight');

function renderHeights(list = heights) {
    heightList.innerHTML = '';

    list.forEach((height) => {
        const li = document.createElement('li');
        li.textContent = height;
        heightList.appendChild(li);
    });
}

function addHeight() {
    const height = prompt('Введите рост ученика');

    if (height === null || !height.trim()) {
        alert('Рост не введён!');
        return;
    }

    const value = Number(height);

    if (!Number.isFinite(value) || value <= 0) {
        alert('Введите корректный рост!');
        return;
    }

    heights.push(value);
    renderHeights();
}

function filterHeights() {
    const minHeight = prompt('Введите минимальный рост');

    if (minHeight === null || !minHeight.trim()) {
        renderHeights();
        return;
    }

    const value = Number(minHeight);

    if (!Number.isFinite(value)) {
        alert('Введите число!');
        return;
    }

    const filteredHeights = heights.filter(
        (height) => height >= value
    );

    renderHeights(filteredHeights);
}

addButton.addEventListener('click', addHeight);
filterButton.addEventListener('click', filterHeights);

renderHeights();