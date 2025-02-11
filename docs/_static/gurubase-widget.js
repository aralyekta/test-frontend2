document.addEventListener('DOMContentLoaded', function() {
    // Customize widget settings
    const widgetSettings = {
        widgetId: "4xFPlyxyLkeHYhrm0KaGWlU7V1WFGJa0f6CDrmEPofk", // Replace with your widget ID
        text: "Ask AI", // Optional - Button text
        margins: { bottom: "20px", right: "20px" }, // Optional
        lightMode: false, // Optional - Force light mode
        // bgColor: "YOUR_BG_COLOR", // Optional - Widget background color
        iconUrl: "https://raw.githubusercontent.com/reagento/adaptix/refs/heads/main/docs/logo/adaptix-dark.svg", // Optional - Widget icon URL
        name: "adaptix" // Optional - Widget name
    };

    // Load the GuruBase widget
    const guruScript = document.createElement("script");
    guruScript.src = "https://87fd-31-223-44-215.ngrok-free.app/src/widget.js";
    guruScript.defer = true;
    guruScript.id = "guru-widget-id";

    // Add widget settings as data attributes
    Object.entries({
        "data-widget-id": widgetSettings.widgetId,
        "data-text": widgetSettings.text,
        "data-margins": JSON.stringify(widgetSettings.margins),
        "data-light-mode": widgetSettings.lightMode,
        "data-bg-color": widgetSettings.bgColor,
        "data-icon-url": widgetSettings.iconUrl,
        "data-name": widgetSettings.name
    }).forEach(([key, value]) => {
        guruScript.setAttribute(key, value);
    });

    // Append the script to the document
    document.body.appendChild(guruScript);
});
