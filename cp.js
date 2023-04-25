let selectedButton = null;

$(".copy-button").on("click", function() {
  const button = $(this);
  const snippet = button.closest(".code-snippet").find(".snippet").text().trim();
  const data = JSON.stringify(snippet);
  navigator.clipboard.writeText(data).then(function() {
    console.log("copied to clipboard", data);
    button.text("Copied!");
    if (selectedButton && selectedButton !== button) {
      selectedButton.text("Copy");
    }
    selectedButton = button;
    setTimeout(() => {
      button.text("Copy");
      if (selectedButton === button) {
        selectedButton = null;
      }
    }, 3000);
  }, function(error) {
    console.error("copy failed", error);
  });
});

$(".copy-button").on("mouseleave", function() {
  if (selectedButton !== $(this)) {
    $(this).text("Copy");
  }
});
