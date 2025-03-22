document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");
    
    function logout() {
        console.log("Logout clicked");
        // Hier könnte eine tatsächliche Logout-Logik implementiert werden
        alert("Logout erfolgreich!");
    }
    
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
});
