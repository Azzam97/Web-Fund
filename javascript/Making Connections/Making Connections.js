var requests = 2;
var contacts = 500;
function Todd() {
    hideTodd(); deductRequestsTodd(); addConnections();
}
function changeName() {
    var newName = document.querySelector(".name")
    newName.innerText = "Mary Sue";
}
function deductRequestsTodd() {
    var requestsNumber = document.querySelector(".number");
    requests--;
    requestsNumber.innerText = requests;
}
function deductRequestsPhil() {
    var requestsNumber = document.querySelector(".number");
    requests--;
    requestsNumber.innerText = requests;
}
function addConnections() {
    var connections = document.querySelector(".friends");
    contacts++;
    connections.innerText = contacts;
}
function hideTodd() {
    var user = document.querySelector(".todd")
    user.remove();
}
function hidePhil() {
    var user = document.querySelector(".phil")
    user.remove();
}