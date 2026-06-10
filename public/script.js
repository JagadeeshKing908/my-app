async function checkHealth() {
    const resultElement = document.getElementById("result");
    const button = document.getElementById("healthBtn");

    button.disabled = true;
    resultElement.innerText = "Checking API health...";

    try {
        const response = await fetch("/api/health");

        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }

        const data = await response.json();

        resultElement.innerText = `${data.status} - ${data.message}`;
    } catch (error) {
        resultElement.innerText = "Error connecting to API";
        console.error("API Error:", error);
    } finally {
        button.disabled = false;
    }
}
