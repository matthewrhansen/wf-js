let selectedButton = null;

$(".copy-button").each(function() {
  $(this).on("click", function() {
    let codeSnippet = JSON.parse($(this).parent().find(".snippet").text());
    console.log("codeSnippet", codeSnippet);
    let copyButton = $(this);
    let data = JSON.stringify(codeSnippet);
    console.log("data", data);
    document.addEventListener("copy", function(event) {
      event.clipboardData.setData("application/json", data);
      event.preventDefault();
      console.log("copied to cb", data);
      copyButton.text("Copied to clipboard");
      if (selectedButton) {
        setTimeout(function() {
          selectedButton.text("Copy");
        }, 3000);
      }
      selectedButton = copyButton;
      setTimeout(function() {
        copyButton.text("Copy");
        if (selectedButton === copyButton) {
          selectedButton = null;
        }
        window.getSelection().removeAllRanges();
      }, 3000);
    });
    document.execCommand("copy");
  });
});
