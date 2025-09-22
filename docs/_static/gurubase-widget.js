console.log('gurubase-widget.js loaded');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    // Customize widget settings
    const widgetSettings = {
        widgetId: "mdYuaH1S-RP7H9skeWTdPsVtUc4hU4koj9gxrKy_Ffc", // Replace with your widget ID
        text: "Ask AI", // Optional - Button text
        margins: { bottom: "20px", right: "20px" }, // Optional
        lightMode: false, // Optional - Force light mode
        // bgColor: "YOUR_BG_COLOR", // Optional - Widget background color
        // iconUrl: "https://raw.githubusercontent.com/reagento/adaptix/refs/heads/main/docs/logo/adaptix-dark.svg", // Optional - Widget icon URL
        // name: "adaptix" // Optional - Widget name
    };

    console.log('Widget settings:', widgetSettings);

    // Load the GuruBase widget
    const guruScript = document.createElement("script");
    guruScript.src = "https://cdn.jsdelivr.net/gh/Gurubase/gurubase-widget@b37403b96759dff28b2acf63652e338a5b4f0f3a/src/widget.js"
    guruScript.defer = true;
    guruScript.id = "guru-widget-id";

    // Add error handling
    guruScript.onerror = function(error) {
        console.error('Failed to load GuruBase widget script:', error);
    };

    guruScript.onload = function() {
        console.log('GuruBase widget script loaded successfully');
    };

    // Add widget settings as data attributes
    const attributes = {
        "data-widget-id": widgetSettings.widgetId,
        "data-text": widgetSettings.text,
        "data-margins": JSON.stringify(widgetSettings.margins),
        "data-light-mode": widgetSettings.lightMode,
        "data-bg-color": widgetSettings.bgColor,
        "data-icon-url": widgetSettings.iconUrl,
        "data-name": widgetSettings.name
    };
    
    console.log('Setting attributes:', attributes);

    Object.entries(attributes).forEach(([key, value]) => {
        if (value !== undefined) {
            guruScript.setAttribute(key, value);
            console.log(`Set attribute ${key}:`, value);
        }
    });

    // Append the script to the document
    document.body.appendChild(guruScript);
    console.log('Script appended to document body');
});
