// * 아코디언 기능 

function togglePanel(panelId) {
    var panel = document.getElementById(panelId);
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}