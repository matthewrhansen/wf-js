$(document).on("click", ".copy-button", function() {
  let codeSnippet = JSON.parse($(this).parent().find(".snippet").text());
  console.log("codeSnippet", codeSnippet);
  let copyButton = $(this);
  let data = JSON.stringify(codeSnippet);
  console.log("data", data);
  
  copyToClipboard(data, copyButton);
});

function copyToClipboard(data, copyButton) {
  // Reset text of all buttons to "Copy"
  $(".copy-button").text("Copy");
  
  document.addEventListener("copy", (event) => {
    event.clipboardData.setData("application/json", data);
    event.preventDefault();
    console.log("copied to cb", data);
    copyButton.text("Copied to clipboard");
    setTimeout(() => {
      copyButton.text("Copy");
    }, 3000);
  });
  document.execCommand("copy");
}
