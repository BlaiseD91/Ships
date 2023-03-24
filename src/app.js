/*
* File: app.js
* Author: Székely Balázs Csaba
* Copyright: 2023, Székely Balázs Csaba
* Group: SZOFT I/1/E
* Date: 2023-03-24
* Github: https://github.com/BlaiseD91
* Licenc: GNU GPL
*/

const state = {
    ships: []
};

const doc = {
    shipsTableBody: null
}

window.addEventListener('load', () => {
    init();
    loadShips();
});

function init(){
    doc.shipsTableBody = document.querySelector('#shipsTableBody');
}

function loadShips(){
    let url = "http://localhost:8000/";
    let endpoint = "ships";
    let path = url + endpoint;
    fetch(path)
    .then(response => response.json())
    .then(result => {
        state.ships = result;
        console.log(result);
        render();
    });
}

function render(){
    let rows = "";
    state.ships.forEach(ship => {
        rows += `
            <tr class="hoverable">
                <td>${ship.name}</td>
                <td class="center">${ship.length}</td>
                <td class="center">${ship.price}</td>
                <td class="center">${ship.person}</td>
                <td class="end">${ship.trailer}</td>
            </tr>
        `;
    });
    doc.shipsTableBody.innerHTML = rows;
}