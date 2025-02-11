document.addEventListener("DOMContentLoaded", () => {
    // Load the GuruBase widget
    const guruScript = document.createElement("script");
    guruScript.src = "https://87fd-31-223-44-215.ngrok-free.app/src/widget.js";
    guruScript.defer = true;
    guruScript.id = "guru-widget-id";
  
    // Configure widget settings
    const widgetSettings = {
      "data-widget-id": "YOUR_WIDGET_ID", // Replace with your widget ID
      "data-text": "Ask AI", // Optional - Button text
      "data-margins": JSON.stringify({ bottom: "20px", right: "20px" }), // Optional
      "data-light-mode": "true", // Optional - Force light mode
      "data-name": "YOUR_NAME", // Optional - Widget name
      "data-icon-url": "YOUR_ICON_URL", // Optional - Widget icon URL
      "data-bg-color": "#000000" // Optional - Widget background color
    };
  
    // Add widget settings as data attributes
    Object.entries(widgetSettings).forEach(([key, value]) => {
      guruScript.setAttribute(key, value);
    });
  
    document.body.appendChild(guruScript);
  });