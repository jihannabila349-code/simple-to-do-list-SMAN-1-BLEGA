document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoTableBody = document.querySelector('#todo-table tbody');

    // Fungsi untuk menandai/menghilangkan tanda selesai pada kegiatan
    const toggleTaskCompletion = (checkbox) => {
        const row = checkbox.closest('tr'); // Dapatkan baris <tr> terdekat
        if (checkbox.checked) {
            row.classList.add('completed');
        } else {
            row.classList.remove('completed');
        }
    };

    // Tambahkan event listener untuk checkbox yang sudah ada (contoh)
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => toggleTaskCompletion(checkbox));
    });

    // Fungsi untuk menambah kegiatan baru
    const addTask = () => {
        const taskText = inputField.value.trim();

        if (taskText === '') {
            alert('Mohon masukkan nama kegiatan!');
            return;
        }

        // 1. Buat elemen baris baru (<tr>)
        const newRow = todoTableBody.insertRow();

        // 2. Buat sel Kegiatan (<td>)
        const taskCell = newRow.insertCell(0);
        taskCell.classList.add('task-name');
        taskCell.textContent = taskText;

        // 3. Buat sel Selesai (<td>)
        const actionCell = newRow.insertCell(1);
        actionCell.classList.add('task-action');

        // 4. Buat checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        
        // Tambahkan event listener untuk checkbox baru
        checkbox.addEventListener('change', () => toggleTaskCompletion(checkbox));

        // Masukkan checkbox ke sel aksi
        actionCell.appendChild(checkbox);

        // Bersihkan input
        inputField.value = '';
    };

    // Tambahkan event listener ke tombol 'Tambah'
    addButton.addEventListener('click', addTask);

    // Tambahkan event listener untuk input saat tombol 'Enter' ditekan
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
