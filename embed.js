(function () {
  function init() {
    var iframes = document.querySelectorAll('iframe[data-senedd-widget="true"]');
    if (!iframes.length) return;

    window.addEventListener("message", function (e) {
      if (!e || !e.data || e.data.type !== "SENEDD_WIDGET_HEIGHT") return;

      for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.height = (e.data.height + 2) + "px";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
