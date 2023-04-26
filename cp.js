let lastClickedButton;

$(document).on("click", ".copy-button", function() {
  let codeSnippet = JSON.parse($(this).parent().find(".snippet").text());
  console.log("codeSnippet", codeSnippet);
  let copyButton = $(this);
  let data = JSON.stringify(codeSnippet);
  console.log("data", data);

  // Reset text of all buttons to "Copy"
  $(".copy-button").text("Copy");

  lastClickedButton = copyButton;

  copyToClipboard(data, copyButton);
});

function copyToClipboard(data, copyButton) {
  document.addEventListener("copy", (event) => {
    event.clipboardData.setData("application/json", data);
    event.preventDefault();
    console.log("copied to cb", data);
    copyButton.text("Copied to clipboard");

    // Reset text of all buttons other than the last clicked button to "Copy"
    $(".copy-button").not(lastClickedButton).text("Copy");

    setTimeout(() => {
      if (lastClickedButton === copyButton) {
        copyButton.text("Copy");
        lastClickedButton = undefined; // Reset the last clicked button after 3 seconds
      }
    }, 3000);
  });
  document.execCommand("copy");
}
