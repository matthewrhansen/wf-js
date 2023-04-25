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
      setTimeout(function() {
        copyButton.text("Copy");
        copyButton.off("mouseleave"); // remove the mouseleave event listener
      }, 3000);
    });
    document.execCommand("copy");
    $(".copy-button").not(copyButton).on("mouseleave", function() {
      $(this).text("Copy"); // reset the text of all other copy buttons
    });
  });
});
