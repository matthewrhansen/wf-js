let selectedButton = null; // initialize variable to keep track of the currently selected button

$(".copy-button").each(function() {
  $(this).on("click", function() {
    if (selectedButton !== null) {
      selectedButton.text("Copy"); // reset the previously selected button text
    }
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
      selectedButton = copyButton; // set the currently selected button
      setTimeout(function() {
        copyButton.text("Copy");
        selectedButton = null; // clear the currently selected button
        window.getSelection().removeAllRanges();
      }, 3000);
    });
    document.execCommand("copy");
  });
});
