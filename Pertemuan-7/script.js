$(document).ready(function () {

  $("#ajaxForm").on("submit", function (e) {
    e.preventDefault(); // ❌ stop page reload

    $.ajax({
      url: "process.php",
      method: "POST",
      data: $(this).serialize(),

      beforeSend: function () {
        $("#response")
          .removeClass("d-none alert-success alert-danger")
          .addClass("alert alert-info")
          .html("Mengirim data...");
      },

      success: function (res) {
        $("#response")
          .removeClass("alert-info")
          .addClass("alert-success")
          .html(res);

        $("#ajaxForm")[0].reset();
      },

      error: function () {
        $("#response")
          .removeClass("alert-info")
          .addClass("alert-danger")
          .html("Terjadi kesalahan pada server!");
      }
    });

  });

});
