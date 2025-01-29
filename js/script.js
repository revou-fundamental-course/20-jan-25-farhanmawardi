// Ini File Javascript

function calculateBMI() {
    // Mengambil nilai dari form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm ke m
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);

    // Validasi input
    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age > 150) {
        alert("Masukkan berat, tinggi badan, dan usia yang valid.");
        return;
    }

    // Menghitung BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Menentukan kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'normal (ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'kelebihan berat badan';
    } else {
        category = 'kegemukan (Obesitas)';
    }

    // Menampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil BMI Anda</h2>
        <p><span class="bmi-value">${bmi}</span></p>
        <p>Masuk dalam kategori ${category}</p>
        <p>${gender === 'male' ? 'Laki-laki' : 'Wanita'}</p>
        <p>Usia ${age} tahun</p>
        <p>${getBMIDescription(category)}</p>
    `;
    resultDiv.style.display = 'block';
}

function getBMIDescription(category) {
    switch (category) {
        case 'kekurangan berat badan':
            return 'Anda berada dalam kategori kekurangan berat badan. Disarankan untuk meningkatkan asupan kalori dan nutrisi.';
        case 'normal (ideal)':
            return 'Anda berada dalam kategori berat badan normal. Pertahankan pola makan dan gaya hidup sehat.';
        case 'kelebihan berat badan':
            return 'Anda berada dalam kategori kelebihan berat badan. Disarankan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik.';
        case 'kegemukan (Obesitas)':
            return 'Anda berada dalam kategori kegemukan (obesitas). Disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk rencana penurunan berat badan.';
        default:
            return '';
    }
}

function resetForm() {
    // Reset form inputs
    document.getElementById('bmiForm').reset();
    
    // Sembunyikan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
    resultDiv.innerHTML = '';
}
