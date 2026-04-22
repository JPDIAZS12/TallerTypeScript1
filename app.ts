import { series } from "./data.js";

function renderSeries(): void {
    const tbody = document.getElementById("series-tbody");
    const averageCell = document.getElementById("average-cell");

    if (!tbody || !averageCell) return;

    // Construir filas de la tabla
    let rows = "";
    series.forEach(serie => {
        rows += `
            <tr>
                <th scope="row">${serie.id}</th>
                <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            </tr>
        `;
    });
    tbody.innerHTML = rows;

    // Calcular promedio de temporadas (Punto No. 2)
    const totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
    const average = Math.round(totalSeasons / series.length);
    averageCell.textContent = `Seasons average: ${average}`;
}

document.addEventListener("DOMContentLoaded", renderSeries);
