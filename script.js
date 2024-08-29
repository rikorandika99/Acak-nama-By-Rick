let names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name !== '') {
        names.push(name);
        updateNameList();
        nameInput.value = '';
    }
}

function updateNameList() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';

    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.textContent = name;

        // Membuat tombol hapus
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = () => removeName(index);

        li.appendChild(deleteButton);
        nameList.appendChild(li);
    });
}

function removeName(index) {
    names.splice(index, 1);
    updateNameList();
}

function pickRandomName() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];
        document.getElementById('result').textContent = `Nama yang terpilih: ${selectedName}`;
    } else {
        document.getElementById('result').textContent = 'Masukkan setidaknya satu nama terlebih dahulu!';
    }
}
