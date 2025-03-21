"use strict";

/**
 * Constructs a search URL based on user input and the selected search engine.
 *
 * @param {string} input - The user's search query.
 * @returns {string} - Fully qualified URL.
 */
function search(input) {
    // Define allowed search engines
    const searchEngines = {
        "google": "https://www.google.com/search?q=%s",
        "bing": "https://www.bing.com/search?q=%s",
        "duckduckgo": "https://duckduckgo.com/?q=%s"
    };

    // Retrieve the selected search engine from localStorage
    const selectedEngine = localStorage.getItem("searchEngine") || "google";

    // Ensure the selected engine is valid, otherwise default to Google
    const template = searchEngines[selectedEngine] || searchEngines["google"];

    try {
        // Check if input is already a valid URL
        return new URL(input).toString();
    } catch (err) {
        // Not a valid URL, proceed to check if adding 'http://' makes it valid
    }

    try {
        // Check if input is a valid URL when prefixed with 'http://'
        const url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
        // Not a valid URL, treat as a search query
    }

    // If input is not a URL, perform a search with the selected engine
    return template.replace("%s", encodeURIComponent(input));
}
