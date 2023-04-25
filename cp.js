$(".copy-button").on("click", function() {
  const snippet = $(this).closest(".code-snippet").find(".snippet").text().trim();
  const data = JSON.stringify(snippet);
  navigator.clipboard.writeText(data).then(function() {
    console.log("copied to clipboard", data);
    $(this).text("Copied!");
    setTimeout(() => {
      $(this).text("Copy");
    }, 3000);
  }, function(error) {
    console.error("copy failed", error);
  });
});

$(".copy-button").on("mouseleave", function() {
  $(this).text("Copy");
});
