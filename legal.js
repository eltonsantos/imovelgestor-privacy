(function () {
  var now = new Date();
  var formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(now);
  var currentYear = String(now.getFullYear());

  document.querySelectorAll("#last-update, [data-last-update]").forEach(function (element) {
    element.textContent = formattedDate;
  });

  document.querySelectorAll("#copy-year, [data-copy-year]").forEach(function (element) {
    element.textContent = currentYear;
  });
})();
