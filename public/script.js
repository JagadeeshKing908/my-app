function checkHealth() {
    fetch("/api/health")
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerText =
                data.status + " - " + data.message;
        });
}
