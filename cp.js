$(".copy-button").each(function() { // for each copy button
  $(this).on("click", function() {
    let codeSnippet = JSON.parse($(this).parent().find(".snippet").text()); // get the code snippet from the parent div
    console.log("codeSnippet", codeSnippet); // log the code snippet
    let copyButton = $(this); // get the copy button
    let data = JSON.stringify(codeSnippet); // stringify the code snippet
    console.log("data", data); // log the data
    document.addEventListener("copy", (event) => { // add the event listener
      event.clipboardData.setData("application/json", data); // set the data to be copied to the clipboard
      event.preventDefault(); // prevent the default copy behavior
      console.log("copied to cb", data); // log the data
      
      // Add a class to the most recently clicked button and remove it from all other buttons
      $(".copy-button").removeClass("recently-clicked");
      copyButton.addClass("recently-clicked");
      
      copyButton.text("Copied to clipboard"); // change the button text
      setTimeout(() => {
        // Only change the text back to the original if it is the most recently clicked button
        if (copyButton.hasClass("recently-clicked")) {
          copyButton.text("Copy");
        }
      }, 3000);
    });
    document.execCommand("copy"); // copy the data to the clipboard
  });
});
