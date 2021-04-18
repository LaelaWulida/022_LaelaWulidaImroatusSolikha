/** 
 * Kode Vanilla Javascript(Javascript Murni) Untuk menambahkan value
 * pada elemen html
 * */
 document.getElementById('nama').innerHTML = 'Laela Wulida Imroatus Solikha';

 /**
  * Kode Jquery untuk menambahkan value
  * pada elemen html
  */
 $('#nim').html('20190140022');
 
 /**
  * Jquery menggunakan selector sama seperti css
  * .Untuk class
  * untuk id
  * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
  * misal: <button></button maka tinggal tulis button
  * dalam kode berikut, kita akan menampilkan console.log saat document ready
  */
 $(function() {
     console.log("Hello");
 });
 
 //kode Jquery untuk menyembunyikan elemen
 $("#hide").on("click", function() {
     $("#nama").hide();
 });
 
 //kode Jquery untuk menampilkan kembali elemen
 $("show").on("click", function() {
     $("#nama").show();
 });
 
 //coba ini :)))
 $("#toggle").on("click", function() {
     $("#nama").toggle();
 });
 
 //kode Jquery untuk fade in elemen html
 $("#fadeIn").on("click", function() {
     $("#tanggal").fadeIn();
 });
 
 //kode Jquery untuk fade  Out elemen html
 $("#fadeOut").on("click", function() {
     $("#tanggal").fadeOut();
 });
 
 //coba ini
 $("#fadeToggle").on("click", function() {
     $("#tanggal").fadeToggle();
 });
 
 //kode Jquery untuk slide Up elemen html
 $("#slideUp").on("click", function() {
     $("#img").slideUp();
 });
 
 //kode Jquery untuk slide up elemen html
 $("#slideDown").on("click", function() {
     $("#img").slideDown();
 });
 
 //coba ini
 $("#slideToggle").on("click", function() {
     $("#img").slideToggle();
 });