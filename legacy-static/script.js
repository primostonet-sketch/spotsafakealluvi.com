const KNOWN_SEALS = {
  "13044031": [
    { date: "04/07/2026, 16:04:15", location: "—" },
    { date: "19/07/2026, 02:06:09", location: "—" },
    { date: "27/07/2026, 23:33:40", location: "—" },
  ],
};

const input = document.getElementById("seal-input");
const button = document.getElementById("verify-btn");
const result = document.getElementById("verify-result");
const tableWrap = document.getElementById("verify-table-wrap");
const tableBody = document.getElementById("verify-table-body");

function renderRows(rows) {
  tableBody.innerHTML = "";
  rows.forEach((row, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${i + 1}</td><td>${row.date}</td><td>${row.location}</td>`;
    tableBody.appendChild(tr);
  });
}

function verifySeal() {
  const seal = input.value.trim();

  if (!seal) {
    result.textContent = "Enter a seal number to verify.";
    result.classList.remove("fail");
    tableWrap.classList.remove("visible");
    return;
  }

  const history = KNOWN_SEALS[seal];

  if (history) {
    result.textContent = `Original Alluvi — seal #${seal} verified.`;
    result.classList.remove("fail");
    renderRows(history);
    tableWrap.classList.add("visible");
  } else {
    result.textContent = `Seal #${seal} not recognized. If your product shows this seal, stop use and contact Alluvi to verify.`;
    result.classList.add("fail");
    tableWrap.classList.remove("visible");
  }
}

button.addEventListener("click", verifySeal);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") verifySeal();
});
