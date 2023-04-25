function copyToClipboard(button) {
  let codeSnippet = JSON.parse(button.closest('.code-snippet').querySelector('.snippet').textContent.trim());
  let data = JSON.stringify(codeSnippet);
  console.log("data", data);
  
  navigator.clipboard.writeText(data).then(function() {
    console.log("copied to clipboard", data);
    button.textContent = "Copied!";
    setTimeout(function() {
      button.textContent = "Copy";
    }, 3000);
  }, function(error) {
    console.error("copy failed", error);
  });
}

$(".copy-button").on("click", function() {
  copyToClipboard(this);
});

$(".copy-button").on("mouseleave", function() {
  $(this).text("Copy");
});
