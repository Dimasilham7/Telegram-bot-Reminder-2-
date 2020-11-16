function reminder() {
  var token =''; //input tokennya
  var tg = new telegram.daftar(token);
  var chatid = '';//ID tujuan
  
  var now = new Date(); // setting ke waktu saat ini
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'hh:mm:ss'); //setting waktu dan penggunaan now untuk manggil fungsi now
  var teks = "Chatbot reminder" //teks biasa
  
  teks = teks  +"\n\n Reminder waktu saat ini";
  teks = teks +"\n saat ini pukul ' " + waktu + "' ";
  
  teks = teks + "\n selamat melanjutkan aktivitas";
  
  var ret = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(ret); //untuk return kirim pesan
}