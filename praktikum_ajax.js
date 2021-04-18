/**
 * AJAX
 * AJAX = Asynchronous JavaScript and XML
 * AJAX adalah teknik
 * yang digunakan untuk membuat website yang dinamis
 * artinya website mampu mengupdate data menampilkan 
 * data baru dari server tanpa perlu melakukan reload
 * 
 * pada praktikum ini kita akna menggunkana ajax jquery
 */

//fungsi ajax jquery untuk menoal isi file
$(function(){
    $("#nama").load("test.txt");
});

/**
 * berikut merupakan fungsi untuk fetch data dari internet menggunakan ajax jquery
 * kita menggunakan https://jsonplaceholder.typicode,com/photos sebagai urlnya
 * 
 */
$(function(){
    let url = "https://jsonplaceholder.typicode.com/photos";
    //mengambil button untuk fetch data
    //boleh hilangkan line 26 dan 46 
    //browser
    $("#getPost").on("click", function () {
        //memanggil jquery ajax
        $.ajax({
            //memanggil variable url
            url: url,
            //memanggil get request
            type: 'GET',
            //jika sukses
            success:function (data) {
                let data_html = '';
                //looping data (ambil satau persatu data)
                $.each(data, function(i, item) {

                    //mengkonversi hasil loop tadi ke html
                    data_html +=
                    '<br>' +
                    '<img src="' +item.thumbnailUrl + '" alt="">' +
                    '<br>' +
                    '<h1>' + item.id + '. ' + item.title + '</h1>'
                });

                //memasukkan hasil loop tadi ke div dengan id #data_hasil_dari_intenet
                $("#data_hasil_dari_internet").html(data_html);
            },
            //jika eror
            error: function(error) {
                //tampilkan Console.log
                console.log(error);
            }
        })
    });
});