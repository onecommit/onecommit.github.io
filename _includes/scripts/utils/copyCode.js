var highlightBlocks = document.querySelectorAll('pre.highlight');

highlightBlocks.forEach(function (codeBlock) {
  var copyButton = document.createElement('button');
  copyButton.className = 'copy-code-button';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';

  codeBlock.prepend(copyButton);

  copyButton.addEventListener('click', function () {
    var code = codeBlock.querySelector('td.rouge-code').innerText.trim();
    window.navigator.clipboard.writeText(code);

    copyButton.classList.add('copied');

    setTimeout(function () {
      copyButton.classList.remove('copied');
    }, 2000);
  });
});