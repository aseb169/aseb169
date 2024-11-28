let nama_Depan, nama_Belakang, nama_Lengkap;

document.getElementById("boton-marge").onclick = function() {
    nama_Depan = document.getElementById("nama-Depan").value;
    nama_Belakang = document.getElementById("nama-BELAKANG").value;
    
    nama_Lengkap = nama_Depan + " " + nama_Belakang;
    document.getElementById("nama-lengkap").textContent = nama_Lengkap;

    console.log(nama_Lengkap);
    
    document.getElementById("nama-lengkap").textContent =  nama_Lengkap;
};