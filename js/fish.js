fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "relative",
        "text-align": "center",
        top: 50,
        right: 0,
        left: 0,
        bottom: 50,
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        '<script src="https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>'
      ),
      this
    );
  }