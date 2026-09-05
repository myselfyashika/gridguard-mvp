/* =========================================
   GRIDGUARD MVP - INTERACTIVE JAVASCRIPT
========================================= */


/* ---------- SIDEBAR NAVIGATION ---------- */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

    item.addEventListener("click", function () {

        // Remove active from all
        navItems.forEach((nav) => {
            nav.classList.remove("active");
        });

        // Add active to clicked item
        this.classList.add("active");

        const section = this.innerText.trim();

        showToast(
            "Section Selected",
            `${section} section is now active.`
        );

    });

});


/* ---------- TOAST FUNCTION ---------- */

function showToast(title, message) {

    const toast = document.getElementById("toast");
    const toastTitle = toast.querySelector("strong");
    const toastMessage = document.getElementById("toastMessage");

    toastTitle.innerText = title;
    toastMessage.innerText = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* ---------- CLOSE TOAST ---------- */

function closeToast() {

    const toast = document.getElementById("toast");

    toast.classList.remove("show");
}


/* ---------- REFRESH DASHBOARD ---------- */

function refreshData() {

    const supplied =
        Math.floor(12000 + Math.random() * 1500);

    const loss =
        Math.floor(700 + Math.random() * 600);

    const highRisk =
        Math.floor(12 + Math.random() * 12);

    const transformerInput = 1000;

    const consumerOutput =
        Math.floor(750 + Math.random() * 120);

    const difference =
        transformerInput - consumerOutput;

    const overallRisk =
        Math.floor(65 + Math.random() * 30);


    // Update dashboard numbers

    document.getElementById("suppliedEnergy").innerText =
        supplied.toLocaleString();

    document.getElementById("energyLoss").innerText =
        loss.toLocaleString();

    document.getElementById("highRisk").innerText =
        highRisk;

    document.getElementById("transformerInput").innerText =
        transformerInput.toLocaleString();

    document.getElementById("consumerOutput").innerText =
        consumerOutput.toLocaleString();

    document.getElementById("transformerDifference").innerText =
        difference.toLocaleString();

    document.getElementById("overallRisk").innerText =
        overallRisk;


    // Update progress bar

    const percentage =
        (consumerOutput / transformerInput) * 100;

    document.querySelector(".recorded-fill").style.width =
        `${percentage}%`;


    // Update risk circle

    const riskCircle =
        document.querySelector(".risk-circle");

    riskCircle.style.background =
        `radial-gradient(circle,
        #11161e 55%,
        transparent 56%),
        conic-gradient(
        #f59e0b 0 ${overallRisk}%,
        #27303b ${overallRisk}% 100%)`;


    showToast(
        "Dashboard Refreshed",
        "New simulated electricity data has been loaded."
    );
}


/* ---------- NOTIFY OFFICER ---------- */

function notifyOfficer(consumerId) {

    showToast(
        "Inspection Request Sent",
        `Officer notified for ${consumerId}. Status: Inspection Pending.`
    );

}


/* ---------- VIEW ALL CASES ---------- */

function showAllCases() {

    const table =
        document.getElementById("casesTable");

    // Add two more simulated cases

    table.innerHTML += `

        <tr>

            <td>
                <strong>GG-1241</strong>
            </td>

            <td>New Town</td>

            <td>T-10</td>

            <td>520 kWh</td>

            <td>250 kWh</td>

            <td>
                <span class="risk high">
                    88
                </span>
            </td>

            <td>
                Large consumption deviation
            </td>

            <td>
                <button
                    class="inspect-btn"
                    onclick="notifyOfficer('GG-1241')">
                    Notify Officer
                </button>
            </td>

        </tr>


        <tr>

            <td>
                <strong>GG-1277</strong>
            </td>

            <td>Rajarhat</td>

            <td>T-11</td>

            <td>390 kWh</td>

            <td>220 kWh</td>

            <td>
                <span class="risk medium">
                    72
                </span>
            </td>

            <td>
                Repeated anomaly
            </td>

            <td>
                <button
                    class="inspect-btn"
                    onclick="notifyOfficer('GG-1277')">
                    Notify Officer
                </button>
            </td>

        </tr>

    `;


    showToast(
        "Cases Updated",
        "Additional priority inspection cases are now visible."
    );

}


/* ---------- INITIALIZE ---------- */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "GridGuard MVP loaded successfully."
    );

});