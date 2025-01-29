// Ini File Javascript

function calculateBMI() {
    // Mengambil nilai dari form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm ke m
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Masukkan berat dan tinggi badan yang valid.");
        return;
    }

    // Menghitung BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Menentukan kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal (ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Kegemukan (Obesitas)';
    }

    // Menampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil BMI</h2>
        <p>BMI Anda: ${bmi}</p>
        <p>Kategori: ${category}</p>
        <p>Jenis Kelamin: ${gender === 'male' ? 'Laki-laki' : 'Wanita'}</p>
        <p>Penjelasan: ${getBMIDescription(category)}</p>
    `;
    resultDiv.style.display = 'block';
}

function getBMIDescription(category) {
    switch (category) {
        case 'Kekurangan berat badan':
            return 'Anda berada dalam kategori kekurangan berat badan. Disarankan untuk meningkatkan asupan kalori dan nutrisi.';
        case 'Normal (ideal)':
            return 'Anda berada dalam kategori berat badan normal. Pertahankan pola makan dan gaya hidup sehat.';
        case 'Kelebihan berat badan':
            return 'Anda berada dalam kategori kelebihan berat badan. Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
        case 'Kegemukan (Obesitas)':
            return 'Anda berada dalam kategori kegemukan (obesitas). Disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk rencana penurunan berat badan.';
        default:
            return '';
    }
}