/* =====================================================
   AUDIT MANAGEMENT SYSTEM
   LOGIN + DASHBOARD + IMS AUDITOR ENTRY
===================================================== */


/* =====================================================
   LOGIN ELEMENTS
===================================================== */

const loginPage = document.getElementById("loginPage");
const appPage = document.getElementById("appPage");

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const loggedUser = document.getElementById("loggedUser");
const userAvatar = document.getElementById("userAvatar");

const logoutBtn = document.getElementById("logoutBtn");


/* =====================================================
   APPLICATION PAGES
===================================================== */

const dashboardPage =
    document.getElementById("dashboardPage");

const createPage =
    document.getElementById("createPage");

const recordsPage =
    document.getElementById("recordsPage");

const actionsPage =
    document.getElementById("actionsPage");

const reportsPage =
    document.getElementById("reportsPage");
const processRecordsPage =
    document.getElementById("processRecordsPage");
const auditRecordsHubPage =
    document.getElementById("auditRecordsHubPage");
const productRecordsPage =
    document.getElementById("productRecordsPage");
const productAuditorPage =
    document.getElementById("productAuditorPage");
const productAuditeePage =
    document.getElementById("productAuditeePage");
const productReviewPage =
    document.getElementById("productReviewPage");

const imsAuditorPage =
    document.getElementById("imsAuditorPage");
    const imsAuditeePage =
    document.getElementById("imsAuditeePage");
    const imsVerificationPage =
    document.getElementById("imsVerificationPage");


/* =====================================================
   LOGIN
===================================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value.trim();

    loginMessage.textContent = "";

    if (username === "" || password === "") {

        loginMessage.textContent =
            "Please enter username and password.";

        return;
    }


    /*
       DEMO LOGIN

       Any non-empty username/password
       will allow login for now.
    */

    loggedUser.textContent = username;

    userAvatar.textContent =
        username.charAt(0).toUpperCase();


    loginPage.classList.add("hidden");

    appPage.classList.remove("hidden");

    showPage("dashboard");

});


/* =====================================================
   LOGOUT
===================================================== */

logoutBtn.addEventListener("click", function () {

    appPage.classList.add("hidden");

    loginPage.classList.remove("hidden");

    usernameInput.value = "";
    passwordInput.value = "";

    loginMessage.textContent = "";

});


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageName) {


    /*
       Hide every page
    */

    dashboardPage.classList.add("hidden");

    createPage.classList.add("hidden");

    recordsPage.classList.add("hidden");

    actionsPage.classList.add("hidden");

    reportsPage.classList.add("hidden");
    processRecordsPage?.classList.add("hidden");
    auditRecordsHubPage?.classList.add("hidden");
    productRecordsPage?.classList.add("hidden");
    productAuditorPage?.classList.add("hidden");
    productAuditeePage?.classList.add("hidden");
    productReviewPage?.classList.add("hidden");

    imsAuditorPage.classList.add("hidden");
    imsAuditeePage.classList.add("hidden");
    imsVerificationPage.classList.add("hidden");
    processAuditorPage?.classList.add("hidden");
    processAuditeePage?.classList.add("hidden");
    processReviewPage?.classList.add("hidden");

    document
        .querySelectorAll(".page-section")
        .forEach(function (page) {
            page.style.display = "none";
        });

    document
        .querySelectorAll(".main-content > *")
        .forEach(function (page) {

            const isManagedPage = page.matches(
                "#dashboardPage, #createPage, #recordsPage, #actionsPage, #reportsPage, " +
                "#imsAuditorPage, #imsAuditeePage, #imsVerificationPage, #imsRecordsPage, " +
                "#processAuditorPage, #processAuditeePage, #processReviewPage, " +
                "#processRecordsPage, #auditRecordsHubPage, #productAuditorPage, " +
                "#productAuditeePage, #productReviewPage, #productRecordsPage"
            );

            if (!isManagedPage) {
                page.style.display = "none";
            }

        });


    /*
       Remove active sidebar state
    */

    document
        .querySelectorAll(".sidebar-item, .sidebar-link")
        .forEach(function (item) {

            item.classList.remove("active");

        });


    /*
       Dashboard
    */

    if (pageName === "dashboard") {

        dashboardPage.classList.remove("hidden");
        dashboardPage.style.display = "block";
        updateDashboard();

        document
            .querySelector('[data-page="dashboard"]')
            .classList.add("active");

    }


    /*
       Create Audit
    */

    else if (pageName === "create") {

        createPage.classList.remove("hidden");

        document
            .querySelector('[data-page="create"]')
            .classList.add("active");

    }


    /*
       Audit Records
    */

    else if (pageName === "records") {

        recordsPage.classList.remove("hidden");

        document
            .querySelector('[data-page="records"]')
            .classList.add("active");

    }


    /*
       Actions
    */

    else if (pageName === "actions") {

        actionsPage.classList.remove("hidden");

        document
            .querySelector('[data-page="actions"]')
            .classList.add("active");

    }


    /*
       Reports
    */

    else if (pageName === "reports") {

        reportsPage.classList.remove("hidden");

        document
            .querySelector('[data-page="reports"]')
            .classList.add("active");

    }


    /*
       IMS Auditor Entry

       No sidebar item is activated because
       this is a workflow screen.
    */

    else if (pageName === "imsAuditor") {

        imsAuditorPage.classList.remove("hidden");

    }
    else if (pageName === "imsAuditee") {

    imsAuditeePage.classList.remove("hidden");

}
else if (pageName === "imsVerification") {

    imsVerificationPage.classList.remove("hidden");

}
else if (pageName === "processAuditor") {

    processAuditorPage?.classList.remove("hidden");
    processAuditorPage.style.display = "block";

}
else if (pageName === "processAuditee") {

    processAuditeePage?.classList.remove("hidden");
    processAuditeePage.style.display = "block";

}
else if (pageName === "processReview") {

    processReviewPage?.classList.remove("hidden");
    processReviewPage.style.display = "block";

}
else if (pageName === "processRecords") {

    processRecordsPage?.classList.remove("hidden");
    processRecordsPage.style.display = "block";
    document
        .querySelector('[data-page="processRecords"]')
        ?.classList.add("active");
    displayProcessAuditRecords();

}
else if (pageName === "imsRecords") {

    imsRecordsPage?.classList.remove("hidden");
    imsRecordsPage.style.display = "block";
    document
        .querySelector('[data-page="auditRecords"]')
        ?.classList.add("active");
    displayIMSRecords();

}
else if (pageName === "auditRecordsHub") {

    auditRecordsHubPage?.classList.remove("hidden");
    auditRecordsHubPage.style.display = "block";
    document
        .querySelector('[data-page="auditRecords"]')
        ?.classList.add("active");

}
else if (pageName === "productRecords") {

    productRecordsPage?.classList.remove("hidden");
    productRecordsPage.style.display = "block";
    document
        .querySelector('[data-page="auditRecords"]')
        ?.classList.add("active");
    displayProductAuditRecords();

}
else if (pageName === "productAuditor") {

    productAuditorPage?.classList.remove("hidden");
    productAuditorPage.style.display = "block";

}
else if (pageName === "productAuditee") {

    productAuditeePage?.classList.remove("hidden");
    productAuditeePage.style.display = "block";

}
else if (pageName === "productReview") {

    productReviewPage?.classList.remove("hidden");
    productReviewPage.style.display = "block";

}

}


/* =====================================================
   SIDEBAR NAVIGATION
===================================================== */

document
    .querySelectorAll(".sidebar-item")
    .forEach(function (item) {

        item.addEventListener("click", function () {

            const page =
                item.dataset.page;

            showPage(page);

        });

    });


/* =====================================================
   CREATE AUDIT BUTTONS
===================================================== */

document
    .getElementById("createAuditTopBtn")
    .addEventListener("click", function () {

        showPage("create");

    });


document
    .getElementById("quickCreateAudit")
    .addEventListener("click", function () {

        showPage("create");

    });


/* =====================================================
   QUICK ACTIONS
===================================================== */

document
    .getElementById("quickRecords")
    .addEventListener("click", function () {

        showPage("records");

    });


document
    .getElementById("quickActions")
    .addEventListener("click", function () {

        showPage("actions");

    });


document
    .getElementById("viewRecordsBtn")
    .addEventListener("click", function () {

        showPage("records");

    });


/* =====================================================
   IMS AUDIT SELECTION
===================================================== */

document
    .querySelectorAll(".audit-selection-card")
    .forEach(function (card) {

        card.addEventListener("click", function () {

            const auditType =
                card.dataset.audit;


            /*
               IMS

               This now opens the actual
               IMS Auditor Entry page.
            */

            if (auditType === "ims") {

                prepareNewImsFinding();

                showPage("imsAuditor");

            }


            /*
               Process Audit remains separate.
            */

            else if (auditType === "process") {

                prepareNewProcessAudit();
                showPage("processAuditor");

            }


            /*
               Product Audit remains separate.
            */

            else if (auditType === "product") {

                prepareNewProductAudit();
                showPage("productAuditor");

            }

        });

    });


/* =====================================================
   IMS OBSERVATION NUMBER
===================================================== */

function generateObservationNumber() {

    const year =
        new Date().getFullYear();

    const storedNumber =
        Number(
            localStorage.getItem("imsObservationCounter") || "0"
        );

    const nextNumber =
        storedNumber + 1;

    localStorage.setItem(
        "imsObservationCounter",
        nextNumber
    );

    return (
        "IMS-" +
        year +
        "-" +
        String(nextNumber).padStart(3, "0")
    );

}


let pendingImsFindings = [];

/* =====================================================
   PREPARE NEW IMS FINDING
===================================================== */

function prepareNewImsFinding() {

    pendingImsFindings = [];

    document.getElementById(
        "imsObservationNumber"
    ).value = generateObservationNumber();


    document.getElementById(
        "imsAuditDate"
    ).value = "";


    document.getElementById(
        "imsDepartment"
    ).value = "";


    document.getElementById(
        "imsAuditee"
    ).value = "";


    /*
       Use logged-in username as default auditor.
    */

    document.getElementById(
        "imsAuditor"
    ).value = loggedUser.textContent;


    document.getElementById(
        "imsProcess"
    ).value = "";


    document.getElementById(
        "imsStatement"
    ).value = "";


    document.getElementById(
        "imsSubClause"
    ).value = "";


    document.getElementById(
        "imsClauseRequirement"
    ).value = "";


    document.getElementById(
        "imsEvidence"
    ).value = "";


    document.getElementById(
        "imsClassification"
    ).value = "";


    document.getElementById(
        "imsFormMessage"
    ).textContent = "";

}


/* =====================================================
   BACK TO CREATE AUDIT
===================================================== */

document
    .getElementById("backToCreateBtn")
    .addEventListener("click", function () {

        showPage("create");

    });


/* =====================================================
   GET IMS FORM DATA
===================================================== */

function getImsFormData() {

    return {

        observationNumber:
            document.getElementById(
                "imsObservationNumber"
            ).value,

        auditDate:
            document.getElementById(
                "imsAuditDate"
            ).value,

        department:
            document.getElementById(
                "imsDepartment"
            ).value,

        auditee:
            document.getElementById(
                "imsAuditee"
            ).value,

        auditor:
            document.getElementById(
                "imsAuditor"
            ).value,

        process:
            document.getElementById(
                "imsProcess"
            ).value,

        statement:
            document.getElementById(
                "imsStatement"
            ).value,

        subClause:
            document.getElementById(
                "imsSubClause"
            ).value,

        clauseRequirement:
            document.getElementById(
                "imsClauseRequirement"
            ).value,

        objectiveEvidence:
            document.getElementById(
                "imsEvidence"
            ).value,

        classification:
            document.getElementById(
                "imsClassification"
            ).value

    };

}


/* =====================================================
   VALIDATE IMS FORM
===================================================== */

function validateImsForm(data) {

    if (!data.auditDate) {
        return "Please select the Audit Date.";
    }

    if (!data.department) {
        return "Please select the Department.";
    }

    if (!data.auditee) {
        return "Please enter the Auditee.";
    }

    if (!data.auditor) {
        return "Please enter the Auditor.";
    }

    if (!data.process) {
        return "Please enter the Process Audited.";
    }

    if (!data.statement) {
        return "Please enter the Statement.";
    }

    if (!data.subClause) {
        return "Please enter the Applicable Sub-Clause.";
    }

    if (!data.clauseRequirement) {
        return "Please enter the Clause Requirements.";
    }

    if (!data.classification) {
        return "Please select the Classification.";
    }

    return "";

}


/* =====================================================
   ADD IMS FINDING TO QUEUE
===================================================== */

document
    .getElementById("addImsFindingBtn")
    ?.addEventListener("click", function () {

        const data = getImsFormData();
        const message = document.getElementById("imsFormMessage");
        const error = validateImsForm(data);

        if (error) {
            message.textContent = error;
            message.className = "form-message error";
            return;
        }

        pendingImsFindings.push(data);
        document.getElementById("imsFindingCount").textContent = pendingImsFindings.length;

        prepareNewImsFinding();

        message.textContent = `Finding ${pendingImsFindings.length} added. Add another finding or submit the audit.`;
        message.className = "form-message success";

    });


/* =====================================================
   SAVE IMS DRAFT
===================================================== */

document
    .getElementById("saveImsDraftBtn")
    .addEventListener("click", function () {

        const data =
            getImsFormData();


        localStorage.setItem(
            "imsAuditDraft",
            JSON.stringify(data)
        );


        const message =
            document.getElementById(
                "imsFormMessage"
            );


        message.textContent =
            "IMS Audit finding saved as draft.";

        message.className =
            "form-message success";

    });


/* =====================================================
   SUBMIT IMS FINDING
===================================================== */


document
    .getElementById("submitImsFindingBtn")
    .addEventListener("click", function () {

        const data =
            getImsFormData();

        const message =
            document.getElementById(
                "imsFormMessage"
            );

        const findings =
            pendingImsFindings.length > 0
                ? [...pendingImsFindings, data]
                : [data];

        const firstError =
            findings
                .map(item => validateImsForm(item))
                .find(error => error);

        if (firstError) {

            message.textContent =
                firstError;

            message.className =
                "form-message error";

            return;

        }


        /*
           Save the submitted finding(s).
        */

        const savedFindings = findings.map((item) => ({
            ...item,
            currentStage:
                "Awaiting Auditee Action",
            createdDate:
                new Date().toISOString(),
            immediateAction: "",
            rootCause: "",
            correctiveAction: "",
            targetDate: "",
            responsibility: "",
            actionCompletionDate: "",
            actionStatus: "",
            supportingEvidence: ""
        }));

        const finalFinding =
            savedFindings[savedFindings.length - 1];

        savedFindings.forEach((finding) => {
            saveIMSRecordToMaster(finding);
        });

        localStorage.setItem(
            "lastSubmittedImsFinding",
            JSON.stringify(finalFinding)
        );

        pendingImsFindings = [];
        document.getElementById("imsFindingCount").textContent = "0";

        /*
           Load finding into Auditee page.
        */

        loadFindingForAuditee(finalFinding);


        /*
           Move to Auditee Action stage.
        */

        showPage("imsAuditee");

    });

/* =====================================================
   DASHBOARD DATA
===================================================== */

const dashboardData = {

    totalAudits: 0,

    openFindings: 0,

    progressFindings: 0,

    closedFindings: 0,

    ims: 0,

    process: 0,

    product: 0

};

function readStoredRecords(key) {

    try {
        const records = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(records) ? records : [];
    } catch (error) {
        return [];
    }

}

function getAllAuditRecords() {

    const ims = readStoredRecords("imsAuditRecords").map(record => ({
        ...record,
        source: "IMS",
        auditId: record.observationNumber,
        date: record.auditDate || record.createdDate,
        auditor: record.auditor,
        status: record.ncStatus || record.currentStage
    }));

    const process = readStoredRecords("processAuditRecords").map(record => ({
        ...record,
        source: "Process",
        auditId: record.auditNumber,
        date: record.auditDate || record.createdDate,
        auditor: record.auditorName,
        status: record.finalStatus || record.status || record.currentStage
    }));

    const product = readStoredRecords("productAuditRecords").map(record => ({
        ...record,
        source: "Product",
        auditId: record.auditNumber,
        date: record.auditDate || record.createdDate,
        auditor: record.auditorName,
        status: record.finalStatus || record.status || record.currentStage
    }));

    return [...ims, ...process, ...product];

}

function dashboardStatus(record) {

    const status = String(record.status || "").toLowerCase();

    if (status.includes("closed")) return "Closed";
    if (status.includes("progress")) return "In Progress";
    return "Open";

}

function renderDashboardBars(elementId, entries, emptyText) {

    const element = document.getElementById(elementId);
    if (!element) return;

    const values = Object.entries(entries);
    const maximum = Math.max(...values.map(([, value]) => value), 1);

    element.innerHTML = values.length
        ? `<div class="analysis-chart" role="img" aria-label="${values.map(([label, value]) => `${label}: ${value}`).join(", ")}">
            ${values.map(([label, value]) => `
                <div class="analysis-column">
                    <strong>${value}</strong>
                    <div class="analysis-column-track"><i style="height:${Math.max((value / maximum) * 100, value ? 8 : 0)}%"></i></div>
                    <span>${label}</span>
                </div>
            `).join("")}
        </div>`
        : `<span class="analysis-empty">${emptyText}</span>`;

}

function updateDashboardAnalysis(records) {

    const monthly = {};
    const ageing = { "0-7 days": 0, "8-15 days": 0, "16-30 days": 0, "31-60 days": 0, ">60 days": 0 };
    const fourM = {};
    const shopStation = {};
    const totalNc = {};
    const agencyDistribution = {};
    const agencyClosure = {};
    const agencyAgeing = {};

    records.forEach(record => {
        const date = new Date(record.date);
        const month = isNaN(date.getTime()) ? "Unknown" : date.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
        monthly[month] = (monthly[month] || 0) + 1;
        totalNc[record.source] = (totalNc[record.source] || 0) + 1;

        if (record.agency) {
            agencyDistribution[record.agency] = (agencyDistribution[record.agency] || 0) + 1;
            if (dashboardStatus(record) === "Closed") {
                agencyClosure[record.agency] = (agencyClosure[record.agency] || 0) + 1;
            }
        }

        if (record.source === "Process" && record.category) {
            fourM[record.category] = (fourM[record.category] || 0) + 1;
        }

        const shopKey = record.shop || record.department || "Unassigned";
        const stationKey = record.station ? `${shopKey} / ${record.station}` : shopKey;
        shopStation[stationKey] = (shopStation[stationKey] || 0) + 1;

        if (dashboardStatus(record) === "Open") {
            const age = Math.max(0, Math.floor((Date.now() - date.getTime()) / 86400000));
            const bucket = age <= 7 ? "0-7 days" : age <= 15 ? "8-15 days" : age <= 30 ? "16-30 days" : age <= 60 ? "31-60 days" : ">60 days";
            ageing[bucket] += 1;
            if (record.agency) {
                agencyAgeing[record.agency] = (agencyAgeing[record.agency] || 0) + 1;
            }
        }
    });

    renderDashboardBars("ncTrendBars", monthly, "No audit data yet");
    renderDashboardBars("monthlyAnalysisBars", monthly, "No monthly data yet");
    renderDashboardBars("totalNcBars", totalNc, "No audit data yet");
    renderDashboardBars("agencyDistributionBars", agencyDistribution, "Agency data not available");
    renderDashboardBars("agencyClosureBars", agencyClosure, "Agency data not available");
    renderDashboardBars("agencyAgeingBars", agencyAgeing, "Agency data not available");
    renderDashboardBars("ageingBars", ageing, "No open findings");
    renderDashboardBars("fourMBars", fourM, "No process categories yet");
    renderDashboardBars("shopStationBars", shopStation, "No shop or station data yet");

}


/* =====================================================
   UPDATE DASHBOARD
===================================================== */

function updateDashboard() {

    const records = getAllAuditRecords();
    const statuses = records.map(dashboardStatus);

    dashboardData.totalAudits = records.length;
    dashboardData.openFindings = statuses.filter(status => status === "Open").length;
    dashboardData.progressFindings = statuses.filter(status => status === "In Progress").length;
    dashboardData.closedFindings = statuses.filter(status => status === "Closed").length;
    dashboardData.ims = records.filter(record => record.source === "IMS").length;
    dashboardData.process = records.filter(record => record.source === "Process").length;
    dashboardData.product = records.filter(record => record.source === "Product").length;

    document.getElementById(
        "totalAudits"
    ).textContent =
        dashboardData.totalAudits;


    document.getElementById(
        "openFindings"
    ).textContent =
        dashboardData.openFindings;


    document.getElementById(
        "progressFindings"
    ).textContent =
        dashboardData.progressFindings;


    document.getElementById(
        "closedFindings"
    ).textContent =
        dashboardData.closedFindings;


    document.getElementById(
        "imsCount"
    ).textContent =
        dashboardData.ims;


    document.getElementById(
        "processCount"
    ).textContent =
        dashboardData.process;


    document.getElementById(
        "productCount"
    ).textContent =
        dashboardData.product;

    const recentTable = document.getElementById("recentAuditsTable");
    if (recentTable) {
        const recent = [...records]
            .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
            .slice(0, 5);
        recentTable.innerHTML = recent.length
            ? recent.map(record => `
                <tr>
                    <td>${record.auditId || "-"}</td>
                    <td>${record.source} Audit</td>
                    <td>${record.date || "-"}</td>
                    <td>${record.auditor || "-"}</td>
                    <td>${dashboardStatus(record)}</td>
                </tr>
            `).join("")
            : `<tr><td colspan="5" class="empty-state">No audit records available</td></tr>`;
    }

    updateDashboardAnalysis(records);

}


/* =====================================================
   INITIALIZE
===================================================== */

updateDashboard();
/* =====================================================
   LOAD FINDING FOR AUDITEE
===================================================== */

function loadFindingForAuditee(finding) {

    document.getElementById(
        "auditeeObservationNumber"
    ).value =
        finding.observationNumber || "";


    document.getElementById(
        "auditeeAuditDate"
    ).value =
        finding.auditDate || "";


    document.getElementById(
        "auditeeDepartment"
    ).value =
        finding.department || "";


    document.getElementById(
        "auditeeName"
    ).value =
        finding.auditee || "";


    document.getElementById(
        "auditeeAuditor"
    ).value =
        finding.auditor || "";


    document.getElementById(
        "auditeeProcess"
    ).value =
        finding.process || "";


    document.getElementById(
        "auditeeStatement"
    ).value =
        finding.statement || "";


    document.getElementById(
        "auditeeSubClause"
    ).value =
        finding.subClause || "";


    document.getElementById(
        "auditeeClauseRequirement"
    ).value =
        finding.clauseRequirement || "";


    document.getElementById(
        "auditeeClassification"
    ).value =
        finding.classification || "";


    document.getElementById(
        "auditeeEvidence"
    ).value =
        finding.objectiveEvidence || "";


    /*
       Clear auditee inputs for a new action.
    */

    document.getElementById(
        "immediateAction"
    ).value = "";


    document.getElementById(
        "rootCause"
    ).value = "";


    document.getElementById(
        "correctiveAction"
    ).value = "";


    document.getElementById(
        "targetDate"
    ).value = "";


    document.getElementById(
        "responsibility"
    ).value = "";


    document.getElementById(
        "actionCompletionDate"
    ).value = "";


    document.getElementById(
        "actionStatus"
    ).value = "";


    document.getElementById(
        "supportingEvidence"
    ).value = "";


    document.getElementById(
        "auditeeFormMessage"
    ).textContent = "";

}


/* =====================================================
   GET AUDITEE ACTION DATA
===================================================== */

function getAuditeeActionData() {

    return {

        immediateAction:
            document.getElementById(
                "immediateAction"
            ).value.trim(),

        rootCause:
            document.getElementById(
                "rootCause"
            ).value.trim(),

        correctiveAction:
            document.getElementById(
                "correctiveAction"
            ).value.trim(),

        targetDate:
            document.getElementById(
                "targetDate"
            ).value,

        responsibility:
            document.getElementById(
                "responsibility"
            ).value.trim(),

        actionCompletionDate:
            document.getElementById(
                "actionCompletionDate"
            ).value,

        actionStatus:
            document.getElementById(
                "actionStatus"
            ).value

    };

}


/* =====================================================
   VALIDATE AUDITEE ACTION
===================================================== */

function validateAuditeeAction(data) {

    if (!data.immediateAction) {

        return "Please enter Immediate Action / Correction.";

    }

    if (!data.rootCause) {

        return "Please enter Root Cause Analysis.";

    }

    if (!data.correctiveAction) {

        return "Please enter Corrective Action.";

    }

    if (!data.targetDate) {

        return "Please select the Target Date.";

    }

    if (!data.responsibility) {

        return "Please enter Responsibility.";

    }

    if (!data.actionStatus) {

        return "Please select the Action Status.";

    }

    return "";

}


/* =====================================================
   SAVE AUDITEE DRAFT
===================================================== */

document
    .getElementById("saveAuditeeActionBtn")
    .addEventListener("click", function () {

        const actionData =
            getAuditeeActionData();


        const existingFinding =
            JSON.parse(
                localStorage.getItem(
                    "lastSubmittedImsFinding"
                ) || "{}"
            );


        const updatedFinding = {

            ...existingFinding,

            ...actionData,

            currentStage:
                "Awaiting Auditee Action"

        };


        localStorage.setItem(
            "lastSubmittedImsFinding",
            JSON.stringify(updatedFinding)
        );
        saveIMSRecordToMaster(updatedFinding);


        const message =
            document.getElementById(
                "auditeeFormMessage"
            );


        message.textContent =
            "Auditee action saved as draft.";

        message.className =
            "form-message success";

    });
    /* =====================================================
   SUBMIT AUDITEE ACTION
===================================================== */

document
    .getElementById("submitAuditeeActionBtn")
    .addEventListener("click", function () {

        const actionData =
            getAuditeeActionData();


        const error =
            validateAuditeeAction(actionData);


        const message =
            document.getElementById(
                "auditeeFormMessage"
            );


        if (error) {

            message.textContent =
                error;

            message.className =
                "form-message error";

            return;

        }


        const existingFinding =
            JSON.parse(
                localStorage.getItem(
                    "lastSubmittedImsFinding"
                ) || "{}"
            );


        const updatedFinding = {

            ...existingFinding,

            ...actionData,

            currentStage:
                "Awaiting Auditor Verification",

            actionSubmittedDate:
                new Date().toISOString()

        };


        localStorage.setItem(
            "lastSubmittedImsFinding",
            JSON.stringify(updatedFinding)
        );


        /*
           Load the complete finding into
           Auditor Verification.
        */

        loadFindingForVerification(
            updatedFinding
        );


        /*
           Move to Auditor Verification.
        */

        showPage("imsVerification");

    });
    /* =====================================================
   LOAD FINDING FOR AUDITOR VERIFICATION
===================================================== */

function loadFindingForVerification(finding) {

    document.getElementById(
        "verifyObservationNumber"
    ).value =
        finding.observationNumber || "";


    document.getElementById(
        "verifyAuditDate"
    ).value =
        finding.auditDate || "";


    document.getElementById(
        "verifyDepartment"
    ).value =
        finding.department || "";


    document.getElementById(
        "verifyAuditee"
    ).value =
        finding.auditee || "";


    document.getElementById(
        "verifyAuditor"
    ).value =
        finding.auditor || "";


    document.getElementById(
        "verifyProcess"
    ).value =
        finding.process || "";


    document.getElementById(
        "verifyStatement"
    ).value =
        finding.statement || "";


    document.getElementById(
        "verifySubClause"
    ).value =
        finding.subClause || "";


    document.getElementById(
        "verifyClassification"
    ).value =
        finding.classification || "";


    /*
       Auditee Response
    */

    document.getElementById(
        "verifyImmediateAction"
    ).value =
        finding.immediateAction || "";


    document.getElementById(
        "verifyRootCause"
    ).value =
        finding.rootCause || "";


    document.getElementById(
        "verifyCorrectiveAction"
    ).value =
        finding.correctiveAction || "";


    document.getElementById(
        "verifyTargetDate"
    ).value =
        finding.targetDate || "";


    document.getElementById(
        "verifyResponsibility"
    ).value =
        finding.responsibility || "";


    document.getElementById(
        "verifyCompletionDate"
    ).value =
        finding.actionCompletionDate || "";


    document.getElementById(
        "verifyActionStatus"
    ).value =
        finding.actionStatus || "";


    /*
       Auditor verification fields
    */

    document.getElementById(
        "verificationDate"
    ).value = "";


    document.getElementById(
        "verificationStatus"
    ).value = "";


    document.getElementById(
        "verificationRemarks"
    ).value = "";


    document.getElementById(
        "auditorSignOff"
    ).value =
        finding.auditor || "";


    document.getElementById(
        "verificationMessage"
    ).textContent = "";

}


/* =====================================================
   COMPLETE AUDITOR VERIFICATION
===================================================== */

document
    .getElementById("completeVerificationBtn")
    .addEventListener("click", function () {

        const verificationDate =
            document.getElementById(
                "verificationDate"
            ).value;


        const status =
            document.getElementById(
                "verificationStatus"
            ).value;


        const remarks =
            document.getElementById(
                "verificationRemarks"
            ).value.trim();


        const signOff =
            document.getElementById(
                "auditorSignOff"
            ).value.trim();


        const message =
            document.getElementById(
                "verificationMessage"
            );


        /*
           Validation
        */

        if (!verificationDate) {

            message.textContent =
                "Please select the Effectiveness Check Date.";

            message.className =
                "form-message error";

            return;

        }


        if (!status) {

            message.textContent =
                "Please select the NC Status.";

            message.className =
                "form-message error";

            return;

        }


        if (!remarks) {

            message.textContent =
                "Please enter the Effectiveness Result / Remarks.";

            message.className =
                "form-message error";

            return;

        }


        if (!signOff) {

            message.textContent =
                "Please enter the Auditor Sign-off.";

            message.className =
                "form-message error";

            return;

        }


        /*
           Get existing finding.
        */

        const existingFinding =
            JSON.parse(
                localStorage.getItem(
                    "lastSubmittedImsFinding"
                ) || "{}"
            );


        /*
           Update final verification data.
        */

        const updatedFinding = {

            ...existingFinding,

            effectivenessCheckDate:
                verificationDate,

            effectivenessRemarks:
                remarks,

            ncStatus:
                status,

            auditorSignOff:
                signOff,

            currentStage:
                status === "Closed"
                    ? "Closed"
                    : status === "In Progress"
                        ? "In Progress"
                        : "Returned to Auditee",

            lastUpdatedDate:
                new Date().toISOString()

        };


        localStorage.setItem(
            "lastSubmittedImsFinding",
            JSON.stringify(updatedFinding)
        );
        saveIMSRecordToMaster(updatedFinding);s


        /*
           CLOSED
        */

        if (status === "Closed") {

            message.textContent =
                "Finding verified and closed successfully.";

            message.className =
                "form-message success";


            alert(
                "IMS Finding " +
                updatedFinding.observationNumber +
                " has been CLOSED."
            );

        }


        /*
           OPEN OR IN PROGRESS
        */

        else {

            message.textContent =
                status === "In Progress"
                    ? "Finding marked In Progress and returned to Auditee for corrective-action follow-up."
                    : "Finding returned to Auditee for corrective-action rework.";

            message.className =
                "form-message success";


            alert(
                "IMS Finding " +
                updatedFinding.observationNumber +
                (status === "In Progress"
                    ? " is IN PROGRESS.\n\n"
                    : " remains OPEN.\n\n") +
                "It will be returned to the Auditee for follow-up."
            );

        }

    });


/* =====================================================
   RETURN TO AUDITEE
===================================================== */

document
    .getElementById("returnToAuditeeBtn")
    .addEventListener("click", function () {

        const finding =
            JSON.parse(
                localStorage.getItem(
                    "lastSubmittedImsFinding"
                ) || "{}"
            );


        if (Object.keys(finding).length === 0) {

            showPage("imsAuditee");

            return;

        }


        /*
           Load existing action data
           so auditee can continue/rework.
        */

        document.getElementById(
            "auditeeObservationNumber"
        ).value =
            finding.observationNumber || "";


        document.getElementById(
            "auditeeAuditDate"
        ).value =
            finding.auditDate || "";


        document.getElementById(
            "auditeeDepartment"
        ).value =
            finding.department || "";


        document.getElementById(
            "auditeeName"
        ).value =
            finding.auditee || "";


        document.getElementById(
            "auditeeAuditor"
        ).value =
            finding.auditor || "";


        document.getElementById(
            "auditeeProcess"
        ).value =
            finding.process || "";


        document.getElementById(
            "auditeeStatement"
        ).value =
            finding.statement || "";


        document.getElementById(
            "auditeeSubClause"
        ).value =
            finding.subClause || "";


        document.getElementById(
            "auditeeClauseRequirement"
        ).value =
            finding.clauseRequirement || "";


        document.getElementById(
            "auditeeClassification"
        ).value =
            finding.classification || "";


        document.getElementById(
            "auditeeEvidence"
        ).value =
            finding.objectiveEvidence || "";


        /*
           Restore auditee action fields.
        */

        document.getElementById(
            "immediateAction"
        ).value =
            finding.immediateAction || "";


        document.getElementById(
            "rootCause"
        ).value =
            finding.rootCause || "";


        document.getElementById(
            "correctiveAction"
        ).value =
            finding.correctiveAction || "";


        document.getElementById(
            "targetDate"
        ).value =
            finding.targetDate || "";


        document.getElementById(
            "responsibility"
        ).value =
            finding.responsibility || "";


        document.getElementById(
            "actionCompletionDate"
        ).value =
            finding.actionCompletionDate || "";


        document.getElementById(
            "actionStatus"
        ).value =
            finding.actionStatus || "";


        document.getElementById(
            "auditeeFormMessage"
        ).textContent = "";


        showPage("imsAuditee");

    });
    // ============================================================
// IMS AUDIT RECORDS / MASTER SHEET
// ============================================================

const imsRecordsPage = document.getElementById("imsRecordsPage");

// Keep records independent from the hidden verification workflow page.
imsVerificationPage.parentElement.insertBefore(
    imsRecordsPage,
    imsVerificationPage
);

const recordsSearch = document.getElementById("recordsSearch");
const recordsDepartment = document.getElementById("recordsDepartment");
const recordsClassification = document.getElementById("recordsClassification");
const recordsActionStatus = document.getElementById("recordsActionStatus");
const recordsNCStatus = document.getElementById("recordsNCStatus");
const resetRecordsFilters = document.getElementById("resetRecordsFilters");

const imsRecordsTableBody =
    document.getElementById("imsRecordsTableBody");

const recordsCount =
    document.getElementById("recordsCount");

const recordDetailsPanel =
    document.getElementById("recordDetailsPanel");

const closeRecordDetails =
    document.getElementById("closeRecordDetails");


// ------------------------------------------------------------
// LOAD IMS RECORDS
// ------------------------------------------------------------

function getIMSRecords() {

    const records = [];

    // Current / latest finding
    const latestFinding =
        localStorage.getItem("lastSubmittedImsFinding");

    if (latestFinding) {

        try {

            const finding = JSON.parse(latestFinding);

            if (finding && finding.observationNumber) {
                records.push(finding);
            }

        } catch (error) {

            console.error(
                "Error reading IMS finding:",
                error
            );

        }

    }

    // Previously saved IMS records
    const savedRecords =
        localStorage.getItem("imsAuditRecords");

    if (savedRecords) {

        try {

            const parsedRecords =
                JSON.parse(savedRecords);

            if (Array.isArray(parsedRecords)) {

                parsedRecords.forEach(record => {

                    if (
                        record &&
                        record.observationNumber &&
                        !records.some(
                            r =>
                                r.observationNumber ===
                                record.observationNumber
                        )
                    ) {

                        records.push(record);

                    }

                });

            }

        } catch (error) {

            console.error(
                "Error reading IMS records:",
                error
            );

        }

    }

    return records;

}


// ------------------------------------------------------------
// SAVE CURRENT FINDING INTO MASTER RECORDS
// ------------------------------------------------------------

function saveIMSRecordToMaster(finding) {

    if (
        !finding ||
        !finding.observationNumber
    ) {
        return;
    }

    let records = [];

    const stored =
        localStorage.getItem("imsAuditRecords");

    if (stored) {

        try {

            records = JSON.parse(stored);

            if (!Array.isArray(records)) {
                records = [];
            }

        } catch (error) {

            records = [];

        }

    }

    const existingIndex =
        records.findIndex(
            record =>
                record.observationNumber ===
                finding.observationNumber
        );

    if (existingIndex >= 0) {

        records[existingIndex] = finding;

    } else {

        records.push(finding);

    }

    localStorage.setItem(
        "imsAuditRecords",
        JSON.stringify(records)
    );

}


// ------------------------------------------------------------
// FORMAT DATE
// ------------------------------------------------------------

function formatRecordDate(dateValue) {

    if (!dateValue) {
        return "—";
    }

    const date =
        new Date(dateValue);

    if (isNaN(date.getTime())) {
        return dateValue;
    }

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


// ------------------------------------------------------------
// CHECK OVERDUE
// ------------------------------------------------------------

function isRecordOverdue(record) {

    if (
        !record.targetDate ||
        record.ncStatus === "Closed" ||
        record.actionStatus === "Completed"
    ) {
        return false;
    }

    const target =
        new Date(record.targetDate);

    const today =
        new Date();

    target.setHours(23, 59, 59, 999);
    today.setHours(0, 0, 0, 0);

    return target < today;

}


// ------------------------------------------------------------
// DISPLAY IMS RECORDS
// ------------------------------------------------------------

function displayIMSRecords() {

    if (!imsRecordsTableBody) {
        return;
    }

    let records =
        getIMSRecords();

    const searchValue =
        (recordsSearch?.value || "")
            .trim()
            .toLowerCase();

    const departmentValue =
        recordsDepartment?.value || "";

    const classificationValue =
        recordsClassification?.value || "";

    const actionStatusValue =
        recordsActionStatus?.value || "";

    const ncStatusValue =
        recordsNCStatus?.value || "";


    // SEARCH
    if (searchValue) {

        records =
            records.filter(record => {

                const searchableText = [

                    record.observationNumber,
                    record.department,
                    record.auditee,
                    record.auditor,
                    record.process,
                    record.statement,
                    record.classification,
                    record.actionStatus,
                    record.ncStatus,
                    record.currentStage

                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(
                    searchValue
                );

            });

    }


    // DEPARTMENT
    if (departmentValue) {

        records =
            records.filter(
                record =>
                    record.department ===
                    departmentValue
            );

    }


    // CLASSIFICATION
    if (classificationValue) {

        records =
            records.filter(
                record =>
                    record.classification ===
                    classificationValue
            );

    }


    // ACTION STATUS
    if (actionStatusValue) {

        records =
            records.filter(
                record =>
                    record.actionStatus ===
                    actionStatusValue
            );

    }


    // NC STATUS
    if (ncStatusValue) {

        records =
            records.filter(
                record =>
                    record.ncStatus ===
                    ncStatusValue
            );

    }


    // CLEAR TABLE
    imsRecordsTableBody.innerHTML = "";


    // NO RECORDS
    if (records.length === 0) {

        imsRecordsTableBody.innerHTML = `
            <tr>
                <td colspan="13" class="no-records">
                    No IMS audit records found.
                </td>
            </tr>
        `;

        if (recordsCount) {
            recordsCount.textContent =
                "0 Records";
        }

        return;

    }


    // RECORD COUNT
    if (recordsCount) {

        recordsCount.textContent =
            `${records.length} Record${records.length === 1 ? "" : "s"}`;

    }


    // CREATE ROWS
    records.forEach(record => {

        const row =
            document.createElement("tr");

        const overdue =
            isRecordOverdue(record);


        row.innerHTML = `

            <td>
                <strong>
                    ${record.observationNumber || "—"}
                </strong>
            </td>

            <td>
                ${formatRecordDate(record.auditDate)}
            </td>

            <td>
                ${record.department || "—"}
            </td>

            <td>
                ${record.auditee || "—"}
            </td>

            <td>
                ${record.auditor || "—"}
            </td>

            <td>
                ${record.process || "—"}
            </td>

            <td>
                ${record.classification || "—"}
            </td>

            <td>
                ${record.actionStatus || "Not Started"}
            </td>

            <td class="${overdue ? "overdue-date" : ""}">
                ${formatRecordDate(record.targetDate)}

                ${
                    overdue
                    ? `<span class="overdue-label">
                        OVERDUE
                       </span>`
                    : ""
                }

            </td>

            <td>
                ${
                    record.ncStatus
                    ? record.ncStatus
                    : "—"
                }
            </td>

            <td>
                ${record.currentStage || "—"}
            </td>

            <td>
                ${formatRecordDate(record.lastUpdatedDate)}
            </td>

            <td>

                <button
                    class="view-record-btn"
                    data-observation="${record.observationNumber}"
                >
                    VIEW
                </button>

            </td>

        `;


        imsRecordsTableBody.appendChild(row);

    });


    // VIEW BUTTONS
    document
        .querySelectorAll(".view-record-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const observationNumber =
                        this.dataset.observation;

                    const record =
                        getIMSRecords().find(
                            item =>
                                item.observationNumber ===
                                observationNumber
                        );

                    if (record) {

                        showIMSRecordDetails(record);

                    }

                }
            );

        });

}


// ------------------------------------------------------------
// SHOW COMPLETE RECORD
// ------------------------------------------------------------

function showIMSRecordDetails(record) {

    if (!recordDetailsPanel) {
        return;
    }


    document.getElementById(
        "detailObservationNumber"
    ).value =
        record.observationNumber || "";


    document.getElementById(
        "detailAuditDate"
    ).value =
        formatRecordDate(record.auditDate);


    document.getElementById(
        "detailDepartment"
    ).value =
        record.department || "";


    document.getElementById(
        "detailAuditee"
    ).value =
        record.auditee || "";


    document.getElementById(
        "detailAuditor"
    ).value =
        record.auditor || "";


    document.getElementById(
        "detailProcess"
    ).value =
        record.process || "";


    document.getElementById(
        "detailStatement"
    ).value =
        record.statement || "";


    document.getElementById(
        "detailSubClause"
    ).value =
        record.subClause || "";


    document.getElementById(
        "detailClassification"
    ).value =
        record.classification || "";


    document.getElementById(
        "detailClauseRequirement"
    ).value =
        record.clauseRequirement || "";


    document.getElementById(
        "detailEvidence"
    ).value =
        record.evidence || "";


    document.getElementById(
        "detailImmediateAction"
    ).value =
        record.immediateAction || "";


    document.getElementById(
        "detailRootCause"
    ).value =
        record.rootCause || "";


    document.getElementById(
        "detailCorrectiveAction"
    ).value =
        record.correctiveAction || "";


    document.getElementById(
        "detailTargetDate"
    ).value =
        formatRecordDate(record.targetDate);


    document.getElementById(
        "detailResponsibility"
    ).value =
        record.responsibility || "";


    document.getElementById(
        "detailCompletionDate"
    ).value =
        formatRecordDate(
            record.actionCompletionDate
        );


    document.getElementById(
        "detailActionStatus"
    ).value =
        record.actionStatus || "";


    document.getElementById(
        "detailSupportingEvidence"
    ).value =
        record.supportingEvidence || "";


    document.getElementById(
        "detailEffectivenessDate"
    ).value =
        formatRecordDate(
            record.effectivenessCheckDate
        );


    document.getElementById(
        "detailNCStatus"
    ).value =
        record.ncStatus || "";


    document.getElementById(
        "detailEffectivenessRemarks"
    ).value =
        record.effectivenessRemarks || "";


    document.getElementById(
        "detailAuditorSignOff"
    ).value =
        record.auditorSignOff || "";


    document.getElementById(
        "detailCurrentStage"
    ).value =
        record.currentStage || "";


    document.getElementById(
        "detailLastUpdated"
    ).value =
        formatRecordDate(
            record.lastUpdatedDate
        );


    document.getElementById(
        "recordDetailsObservation"
    ).textContent =
        record.observationNumber || "";


    recordDetailsPanel.style.display =
        "block";


    recordDetailsPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ------------------------------------------------------------
// CLOSE DETAILS
// ------------------------------------------------------------

if (closeRecordDetails) {

    closeRecordDetails.addEventListener(
        "click",
        function () {

            recordDetailsPanel.style.display =
                "none";

        }
    );

}


// ------------------------------------------------------------
// FILTER EVENTS
// ------------------------------------------------------------

[
    recordsSearch,
    recordsDepartment,
    recordsClassification,
    recordsActionStatus,
    recordsNCStatus
]
    .filter(Boolean)
    .forEach(element => {

        element.addEventListener(
            "input",
            displayIMSRecords
        );

        element.addEventListener(
            "change",
            displayIMSRecords
        );

    });


// ------------------------------------------------------------
// RESET FILTERS
// ------------------------------------------------------------

if (resetRecordsFilters) {

    resetRecordsFilters.addEventListener(
        "click",
        function () {

            recordsSearch.value = "";
            recordsDepartment.value = "";
            recordsClassification.value = "";
            recordsActionStatus.value = "";
            recordsNCStatus.value = "";

            displayIMSRecords();

        }
    );

}


// ------------------------------------------------------------
// MAKE MASTER RECORD UPDATE WHEN FINDING IS SUBMITTED
// ------------------------------------------------------------

function refreshIMSRecordsFromLatestFinding() {

    const latestFinding =
        localStorage.getItem(
            "lastSubmittedImsFinding"
        );

    if (!latestFinding) {
        return;
    }

    try {

        const finding =
            JSON.parse(latestFinding);

        saveIMSRecordToMaster(finding);

    } catch (error) {

        console.error(
            "Could not update IMS Master Sheet:",
            error
        );

    }

}


// ------------------------------------------------------------
// INITIAL LOAD
// ------------------------------------------------------------

refreshIMSRecordsFromLatestFinding();
displayIMSRecords();
// ============================================================
// AUDIT RECORDS NAVIGATION
// ============================================================

const auditRecordsMenu = document.querySelector(
    '[data-page="auditRecords"]'
);

if (auditRecordsMenu) {

    auditRecordsMenu.addEventListener("click", function (event) {

        event.preventDefault();

        document
            .querySelectorAll(".sidebar-item, .sidebar-link")
            .forEach(function (item) {
                item.classList.remove("active");
            });

        auditRecordsMenu.classList.add("active");

        document.querySelectorAll(".content-page").forEach(page => {
            page.classList.add("hidden");
        });

        document.querySelectorAll(".page-section").forEach(page => {
            page.style.display = "none";
        });

        showPage("auditRecordsHub");

    });

}

document
    .querySelectorAll("[data-record-page]")
    .forEach(function (card) {

        card.addEventListener("click", function () {

            showPage(card.dataset.recordPage);

        });

    });

const processRecordsMenu = document.querySelector(
    '[data-page="processRecords"]'
);

if (processRecordsMenu) {

    processRecordsMenu.addEventListener("click", function (event) {

        event.preventDefault();
        showPage("processRecords");

    });

}
/* =========================================================
   PROCESS AUDIT - AUDITOR ENTRY
   ========================================================= */

const processAuditorPage = document.getElementById("processAuditorPage");
const processAuditeePage = document.getElementById("processAuditeePage");
const processReviewPage = document.getElementById("processReviewPage");

document.querySelectorAll("#processReviewPage").forEach(function (page, index) {

    if (index > 0) {
        page.remove();
    }

});


// ---------------------------------------------------------
// SEVERITY SELECTION
// ---------------------------------------------------------

const processSeverityButtons = document.querySelectorAll(
    "#processAuditorPage .severity-option"
);

const processSeverityInput = document.getElementById("processSeverity");

processSeverityButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove selection from all severity buttons
        processSeverityButtons.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Select clicked severity
        button.classList.add("selected");

        // Store selected severity
        processSeverityInput.value = button.dataset.severity;
    });

});


// ---------------------------------------------------------
// OPEN PROCESS AUDIT FROM CREATE NEW AUDIT
// ---------------------------------------------------------

// ---------------------------------------------------------
// PREPARE NEW PROCESS AUDIT
// ---------------------------------------------------------

function prepareNewProcessAudit() {

    const fields = [
        "processAuditorName",
        "processAuditDate",
        "processAuditType",
        "processShop",
        "processLine",
        "processSystem",
        "processAuditee",
        "processFinding",
        "processEvidence",
        "processCategory",
        "processResponsibleDepartment",
        "processResponsiblePerson",
        "processTargetDate"
    ];

    fields.forEach(function (id) {

        const field = document.getElementById(id);

        if (field) {
            field.value = "";
        }

    });


    // Clear severity
    if (processSeverityInput) {
        processSeverityInput.value = "";
    }

    processSeverityButtons.forEach(function (button) {
        button.classList.remove("selected");
    });


    // Automatically use logged-in user if available
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {

        const auditorField = document.getElementById(
            "processAuditorName"
        );

        if (auditorField) {
            auditorField.value = storedUser;
        }

    }

}


// ---------------------------------------------------------
// SAVE PROCESS AUDIT DRAFT
// ---------------------------------------------------------

const processSaveDraftBtn = document.getElementById(
    "processSaveDraftBtn"
);

if (processSaveDraftBtn) {

    processSaveDraftBtn.addEventListener("click", function () {

        const draft = getProcessAuditData();

        localStorage.setItem(
            "processAuditDraft",
            JSON.stringify(draft)
        );

        alert("Process Audit has been saved as draft.");

    });

}


// ---------------------------------------------------------
// GET PROCESS AUDIT DATA
// ---------------------------------------------------------

function getProcessAuditData() {

    const evidenceField = document.getElementById(
        "processEvidence"
    );

    let evidenceName = "";

    if (
        evidenceField &&
        evidenceField.files &&
        evidenceField.files.length > 0
    ) {
        evidenceName = evidenceField.files[0].name;
    }


    return {

        auditType: "Process Audit",

        auditorName:
            document.getElementById("processAuditorName")?.value || "",

        auditDate:
            document.getElementById("processAuditDate")?.value || "",

        processAuditType:
            document.getElementById("processAuditType")?.value || "",

        shop:
            document.getElementById("processShop")?.value || "",

        line:
            document.getElementById("processLine")?.value || "",

        system:
            document.getElementById("processSystem")?.value || "",

        auditee:
            document.getElementById("processAuditee")?.value || "",

        finding:
            document.getElementById("processFinding")?.value || "",

        evidence:
            evidenceName,

        category:
            document.getElementById("processCategory")?.value || "",

        severity:
            document.getElementById("processSeverity")?.value || "",

        responsibleDepartment:
            document.getElementById(
                "processResponsibleDepartment"
            )?.value || "",

        responsiblePerson:
            document.getElementById(
                "processResponsiblePerson"
            )?.value || "",

        targetDate:
            document.getElementById("processTargetDate")?.value || "",

        currentStage: "Auditor Entry",

        finalStatus: "",

        createdDate: new Date().toISOString(),

        lastUpdatedDate: new Date().toISOString()

    };

}


// ---------------------------------------------------------
// SUBMIT PROCESS AUDIT FINDING
// ---------------------------------------------------------

const processSubmitFindingBtn = document.getElementById(
    "processSubmitFindingBtn"
);

if (processSubmitFindingBtn) {

    processSubmitFindingBtn.addEventListener(
        "click",
        function () {

            const audit = getProcessAuditData();


            // ---------------------------------------------
            // VALIDATION
            // ---------------------------------------------

            if (!audit.auditorName) {
                alert("Please enter Auditor Name.");
                return;
            }

            if (!audit.auditDate) {
                alert("Please select Audit Date.");
                return;
            }

            if (!audit.processAuditType) {
                alert("Please select Process Audit Type.");
                return;
            }

            if (!audit.shop) {
                alert("Please select Shop.");
                return;
            }

            if (!audit.line) {
                alert("Please select Line.");
                return;
            }

            if (!audit.system) {
                alert("Please select System.");
                return;
            }

            if (!audit.auditee) {
                alert("Please enter Auditee.");
                return;
            }

            if (!audit.finding) {
                alert("Please enter Finding / NC.");
                return;
            }

            if (!audit.category) {
                alert("Please select Category.");
                return;
            }

            if (!audit.severity) {
                alert("Please select Severity.");
                return;
            }

            if (!audit.responsibleDepartment) {
                alert("Please select Responsible Department.");
                return;
            }

            if (!audit.responsiblePerson) {
                alert("Please enter Responsible Person.");
                return;
            }

            if (!audit.targetDate) {
                alert("Please select Target Date.");
                return;
            }


            // ---------------------------------------------
            // CREATE AUDIT NUMBER
            // ---------------------------------------------

            let processAuditCounter =
                parseInt(
                    localStorage.getItem(
                        "processAuditCounter"
                    ) || "0"
                );

            processAuditCounter++;

            localStorage.setItem(
                "processAuditCounter",
                processAuditCounter
            );


            const auditNumber =
                "PA-" +
                new Date().getFullYear() +
                "-" +
                String(processAuditCounter).padStart(3, "0");


            audit.auditNumber = auditNumber;


            // ---------------------------------------------
            // INITIAL WORKFLOW STATE
            // ---------------------------------------------

            audit.currentStage =
                "Awaiting Auditee Action";

            audit.actionStatus =
                "Not Started";

            audit.ica = "";

            audit.actionCompletionDate = "";

            audit.actionEvidence = "";

            audit.auditorReview = "";

            audit.reviewDate = "";

            audit.finalStatus = "";


            // ---------------------------------------------
            // SAVE
            // ---------------------------------------------

            localStorage.setItem(
                "lastSubmittedProcessAudit",
                JSON.stringify(audit)
            );


            // Master records
            let processAuditRecords =
                JSON.parse(
                    localStorage.getItem(
                        "processAuditRecords"
                    ) || "[]"
                );


            processAuditRecords.push(audit);


            localStorage.setItem(
                "processAuditRecords",
                JSON.stringify(
                    processAuditRecords
                )
            );


            // ---------------------------------------------
            // SUCCESS
            // ---------------------------------------------

            alert(
                "Process Audit Finding " +
                audit.auditNumber +
                " has been submitted successfully."
            );

            loadProcessAuditForAuditee(audit);


            // Next page will be Process Auditee Action
            showPage("processAuditee");

        }
    );

}


// ---------------------------------------------------------
// LOAD PROCESS AUDIT DRAFT
// ---------------------------------------------------------

function loadProcessAuditDraft() {

    const savedDraft =
        localStorage.getItem(
            "processAuditDraft"
        );

    if (!savedDraft) {
        return;
    }


    const audit =
        JSON.parse(savedDraft);


    document.getElementById(
        "processAuditorName"
    ).value =
        audit.auditorName || "";

    document.getElementById(
        "processAuditDate"
    ).value =
        audit.auditDate || "";

    document.getElementById(
        "processAuditType"
    ).value =
        audit.processAuditType || "";

    document.getElementById(
        "processShop"
    ).value =
        audit.shop || "";

    document.getElementById(
        "processLine"
    ).value =
        audit.line || "";

    document.getElementById(
        "processSystem"
    ).value =
        audit.system || "";

    document.getElementById(
        "processAuditee"
    ).value =
        audit.auditee || "";

    document.getElementById(
        "processFinding"
    ).value =
        audit.finding || "";

    document.getElementById(
        "processCategory"
    ).value =
        audit.category || "";

    document.getElementById(
        "processResponsibleDepartment"
    ).value =
        audit.responsibleDepartment || "";

    document.getElementById(
        "processResponsiblePerson"
    ).value =
        audit.responsiblePerson || "";

    document.getElementById(
        "processTargetDate"
    ).value =
        audit.targetDate || "";


    // Restore severity
    if (audit.severity) {

        processSeverityInput.value =
            audit.severity;

        processSeverityButtons.forEach(
            function (button) {

                if (
                    button.dataset.severity ===
                    audit.severity
                ) {
                    button.classList.add("selected");
                }

            }
        );

    }

}


// ---------------------------------------------------------
// PROCESS AUDIT - AUDITEE ACTION
// ---------------------------------------------------------

function loadProcessAuditee(audit) {

    document.getElementById("processActionAuditNumber").value = audit.auditNumber || "";
    document.getElementById("processActionAuditee").value = audit.auditee || "";
    document.getElementById("processActionFinding").value = audit.finding || "";
    document.getElementById("processActionSeverity").value = audit.severity || "";
    document.getElementById("processActionOriginalTargetDate").value = audit.targetDate || "";
    document.getElementById("processImmediateCorrection").value = audit.immediateCorrection || "";
    document.getElementById("processCorrectiveAction").value = audit.correctiveAction || "";
    document.getElementById("processActionCompletionDate").value = audit.actionCompletionDate || "";
    document.getElementById("processActionStatus").value = audit.actionStatus || "";
    document.getElementById("processActionEvidence").value = audit.actionEvidence || "";
    document.getElementById("processAuditeeMessage").textContent = "";

}

function getProcessActionData() {

    return {
        immediateCorrection: document.getElementById("processImmediateCorrection").value.trim(),
        correctiveAction: document.getElementById("processCorrectiveAction").value.trim(),
        actionCompletionDate: document.getElementById("processActionCompletionDate").value,
        actionStatus: document.getElementById("processActionStatus").value,
        actionEvidence: document.getElementById("processActionEvidence").value.trim()
    };

}

function updateProcessAudit(actionData, stage) {

    const audit = JSON.parse(localStorage.getItem("lastSubmittedProcessAudit") || "{}");
    const updatedAudit = {
        ...audit,
        ...actionData,
        currentStage: stage,
        lastUpdatedDate: new Date().toISOString()
    };

    localStorage.setItem("lastSubmittedProcessAudit", JSON.stringify(updatedAudit));

    const records = JSON.parse(localStorage.getItem("processAuditRecords") || "[]");
    const index = records.findIndex(record => record.auditNumber === updatedAudit.auditNumber);

    if (index >= 0) {
        records[index] = updatedAudit;
        localStorage.setItem("processAuditRecords", JSON.stringify(records));
    }

    return updatedAudit;

}

document.getElementById("saveProcessActionBtn")?.addEventListener("click", function () {

    const actionData = getProcessActionData();
    updateProcessAudit(actionData, "Awaiting Auditee Action");

    const message = document.getElementById("processAuditeeMessage");
    message.textContent = "Process audit action saved as draft.";
    message.className = "form-message success";

});

document.getElementById("submitProcessActionBtn")?.addEventListener("click", function () {

    const actionData = getProcessActionData();
    const message = document.getElementById("processAuditeeMessage");

    if (!actionData.immediateCorrection || !actionData.correctiveAction || !actionData.actionCompletionDate || !actionData.actionStatus) {
        message.textContent = "Please complete the required corrective-action fields.";
        message.className = "form-message error";
        return;
    }

    const updatedAudit = updateProcessAudit(actionData, "Awaiting Auditor Verification");
    message.textContent = "Process audit action submitted for auditor verification.";
    message.className = "form-message success";

    alert("Process Audit Finding " + updatedAudit.auditNumber + " has been submitted for verification.");

});

document.getElementById("backToProcessAuditorBtn")?.addEventListener("click", function () {
    showPage("processAuditor");
    
});
   
/* =========================================================
   PROCESS AUDIT - AUDITEE ACTION
   ========================================================= */

// ---------------------------------------------------------
// LOAD FINDING INTO AUDITEE ACTION PAGE
// ---------------------------------------------------------

function loadProcessAuditForAuditee(audit) {

    if (!audit) {
        return;
    }

    const setValue = function (id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.value = value || "";
        }
    };


    setValue(
        "processActionAuditNumber",
        audit.auditNumber
    );

    setValue(
        "processActionAuditDate",
        audit.auditDate
    );

    setValue(
        "processActionAuditor",
        audit.auditorName
    );

    setValue(
        "processActionAuditee",
        audit.auditee
    );

    setValue(
        "processActionShop",
        audit.shop
    );

    setValue(
        "processActionLine",
        audit.line
    );

    setValue(
        "processActionSystem",
        audit.system
    );

    setValue(
        "processActionCategory",
        audit.category
    );

    setValue(
        "processActionSeverity",
        audit.severity
    );

    setValue(
        "processActionFinding",
        audit.finding
    );


    // Restore previously entered action details
    setValue(
        "processICA",
        audit.ica
    );

    setValue(
        "processActionStatus",
        audit.actionStatus
    );

    setValue(
        "processActionCompletionDate",
        audit.actionCompletionDate
    );

}


// ---------------------------------------------------------
// GET CURRENT AUDITEE ACTION DATA
// ---------------------------------------------------------

function getProcessAuditeeActionData() {

    const currentAudit =
        JSON.parse(
            localStorage.getItem(
                "lastSubmittedProcessAudit"
            ) || "null"
        );


    if (!currentAudit) {
        return null;
    }


    const evidenceField =
        document.getElementById(
            "processActionEvidence"
        );


    let evidenceName =
        currentAudit.actionEvidence || "";


    if (
        evidenceField &&
        evidenceField.files &&
        evidenceField.files.length > 0
    ) {

        evidenceName =
            evidenceField.files[0].name;

    }


    return {

        ...currentAudit,

        ica:
            document.getElementById(
                "processICA"
            )?.value || "",

        actionStatus:
            document.getElementById(
                "processActionStatus"
            )?.value || "",

        actionCompletionDate:
            document.getElementById(
                "processActionCompletionDate"
            )?.value || "",

        actionEvidence:
            evidenceName,

        currentStage:
            "Auditee Action",

        lastUpdatedDate:
            new Date().toISOString()

    };

}


// ---------------------------------------------------------
// SAVE AUDITEE ACTION DRAFT
// ---------------------------------------------------------

const processActionSaveDraftBtn =
    document.getElementById(
        "processActionSaveDraftBtn"
    );


if (processActionSaveDraftBtn) {

    processActionSaveDraftBtn.addEventListener(
        "click",
        function () {

            const audit =
                getProcessAuditeeActionData();


            if (!audit) {

                alert(
                    "No Process Audit finding is available."
                );

                return;

            }


            localStorage.setItem(
                "lastSubmittedProcessAudit",
                JSON.stringify(audit)
            );


            updateProcessAuditRecord(audit);


            alert(
                "Auditee action has been saved as draft."
            );

        }
    );

}


// ---------------------------------------------------------
// SUBMIT FOR AUDITOR REVIEW
// ---------------------------------------------------------

const processSubmitReviewBtn =
    document.getElementById(
        "processSubmitReviewBtn"
    );


if (processSubmitReviewBtn) {

    processSubmitReviewBtn.addEventListener(
        "click",
        function () {

            const audit =
                getProcessAuditeeActionData();


            if (!audit) {

                alert(
                    "No Process Audit finding is available."
                );

                return;

            }


            // ---------------------------------------------
            // VALIDATION
            // ---------------------------------------------

            if (!audit.ica) {

                alert(
                    "Please enter ICA / Immediate Corrective Action."
                );

                return;

            }


            if (!audit.actionStatus) {

                alert(
                    "Please select Action Status."
                );

                return;

            }


            if (
                audit.actionStatus === "Completed" &&
                !audit.actionCompletionDate
            ) {

                alert(
                    "Please select Completion Date."
                );

                return;

            }


            // ---------------------------------------------
            // UPDATE WORKFLOW STAGE
            // ---------------------------------------------

            audit.currentStage =
                "Awaiting Auditor Review";


            audit.finalStatus =
                "";


            audit.reviewDate =
                "";


            audit.auditorReview =
                "";


            audit.lastUpdatedDate =
                new Date().toISOString();


            // ---------------------------------------------
            // SAVE
            // ---------------------------------------------

            localStorage.setItem(
                "lastSubmittedProcessAudit",
                JSON.stringify(audit)
            );


            updateProcessAuditRecord(audit);


            // ---------------------------------------------
            // SUCCESS
            // ---------------------------------------------

            alert(
                "Process Audit " +
                audit.auditNumber +
                " has been submitted for Auditor Review."
            );


            // Next page
            loadProcessAuditForReview(audit);
            showPage("processReview");

        }
    );

}


// ---------------------------------------------------------
// UPDATE PROCESS AUDIT MASTER RECORD
// ---------------------------------------------------------

function updateProcessAuditRecord(audit) {

    let records =
        JSON.parse(
            localStorage.getItem(
                "processAuditRecords"
            ) || "[]"
        );


    const index =
        records.findIndex(
            function (record) {

                return (
                    record.auditNumber ===
                    audit.auditNumber
                );

            }
        );


    if (index !== -1) {

        records[index] = {
            ...records[index],
            ...audit
        };

    } else {

        records.push(audit);

    }


    localStorage.setItem(
        "processAuditRecords",
        JSON.stringify(records)
    );

}


// ---------------------------------------------------------
// NAVIGATION SUPPORT
// ---------------------------------------------------------

const processAuditMenu =
    document.querySelector(
        '[data-page="processAudit"]'
    );


if (processAuditMenu) {

    processAuditMenu.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showPage("processAuditor");

            prepareNewProcessAudit();

        }
    );

}
/* =========================================================
   PROCESS AUDIT — AUDITOR REVIEW & STATUS CHECK
========================================================= */

// Load Process Audit into Auditor Review page
function loadProcessAuditForReview(audit) {
  if (!audit) return;

  document.getElementById("reviewAuditNumber").value = audit.auditNumber || "";
  document.getElementById("reviewAuditDate").value = audit.auditDate || "";
  document.getElementById("reviewAuditor").value = audit.auditorName || "";
  document.getElementById("reviewAuditee").value = audit.auditee || "";
  document.getElementById("reviewShop").value = audit.shop || "";
  document.getElementById("reviewLine").value = audit.line || "";
  document.getElementById("reviewSystem").value = audit.system || "";
  document.getElementById("reviewCategory").value = audit.category || "";
  document.getElementById("reviewSeverity").value = audit.severity || "";
  document.getElementById("reviewFinding").value = audit.finding || "";

  // Auditee response
  document.getElementById("reviewICA").value = audit.ica || "";
  document.getElementById("reviewActionStatus").value =
    audit.actionStatus || "Not Started";
  document.getElementById("reviewCompletionDate").value =
    audit.actionCompletionDate || "";

  document.getElementById("reviewActionEvidence").value =
    audit.actionEvidence || "";

  // Review fields
  document.getElementById("processReviewDate").value =
    audit.reviewDate || new Date().toISOString().split("T")[0];

  document.getElementById("processReviewSignOff").value =
    audit.auditorSignOff || "";

  document.getElementById("processReviewRemarks").value =
    audit.reviewRemarks || "";

  // Restore final status circle
  document.querySelectorAll(
    "#processReviewPage .status-option"
  ).forEach((option) => {
    option.classList.remove("selected");
  });

  if (audit.finalStatus) {
    const selectedStatus = document.querySelector(
      `#processReviewPage .status-option[data-status="${audit.finalStatus}"]`
    );

    if (selectedStatus) {
      selectedStatus.classList.add("selected");
      document.getElementById("processFinalStatus").value =
        audit.finalStatus;
    }
  } else {
    document.getElementById("processFinalStatus").value = "";
  }
}


/* =========================================================
   STATUS CIRCLE SELECTION
========================================================= */

document.querySelectorAll(
  "#processReviewPage .status-option"
).forEach((option) => {

  option.addEventListener("click", function () {

    document.querySelectorAll(
      "#processReviewPage .status-option"
    ).forEach((item) => {
      item.classList.remove("selected");
    });

    this.classList.add("selected");

    document.getElementById("processFinalStatus").value =
      this.dataset.status;
  });
});


/* =========================================================
   COMPLETE PROCESS AUDITOR REVIEW
========================================================= */

const processCompleteReviewBtn =
  document.getElementById("processCompleteReviewBtn");

if (processCompleteReviewBtn) {

  processCompleteReviewBtn.addEventListener("click", function () {

    const reviewDate =
      document.getElementById("processReviewDate").value;

    const signOff =
      document.getElementById("processReviewSignOff").value.trim();

    const remarks =
      document.getElementById("processReviewRemarks").value.trim();

    const finalStatus =
      document.getElementById("processFinalStatus").value;

    // Validation
    if (!reviewDate) {
      alert("Please enter Review Date.");
      return;
    }

    if (!signOff) {
      alert("Please enter Auditor Sign-off.");
      return;
    }

    if (!remarks) {
      alert("Please enter Review Remarks.");
      return;
    }

    if (!finalStatus) {
      alert("Please select the final status.");
      return;
    }

    const existingAudit =
      JSON.parse(localStorage.getItem("lastSubmittedProcessAudit"));

    if (!existingAudit) {
      alert("No Process Audit finding is available for review.");
      return;
    }

    // Determine stage
    let currentStage = "";

    if (finalStatus === "Closed") {
      currentStage = "Closed";
    } else if (finalStatus === "Open") {
      currentStage = "Returned to Auditee";
    } else {
      currentStage = "In Progress";
    }

    const updatedAudit = {
      ...existingAudit,

      reviewDate: reviewDate,

      reviewRemarks: remarks,

      auditorReview: remarks,

      auditorSignOff: signOff,

      finalStatus: finalStatus,

      currentStage: currentStage,

      closureDate:
        finalStatus === "Closed"
          ? new Date().toISOString().split("T")[0]
          : "",

      lastUpdatedDate: new Date().toISOString()
    };

    // Save latest audit
    localStorage.setItem(
      "lastSubmittedProcessAudit",
      JSON.stringify(updatedAudit)
    );

    // Update master records
    updateProcessAuditRecord(updatedAudit);

    if (finalStatus === "Closed") {

      alert(
        "Process Audit " +
        updatedAudit.auditNumber +
        " has been CLOSED successfully."
      );

    } else if (finalStatus === "Open") {

      alert(
        "Process Audit " +
        updatedAudit.auditNumber +
        " remains OPEN and has been returned to the Auditee."
      );

    } else {

      alert(
        "Process Audit " +
        updatedAudit.auditNumber +
        " is now IN PROGRESS."
      );
    }

    // Go back to dashboard
    showPage("dashboard");
  });
}


/* =========================================================
   RETURN PROCESS AUDIT TO AUDITEE
========================================================= */

const processReturnToAuditeeBtn =
  document.getElementById("processReturnToAuditeeBtn");

if (processReturnToAuditeeBtn) {

  processReturnToAuditeeBtn.addEventListener("click", function () {

    const existingAudit =
      JSON.parse(localStorage.getItem("lastSubmittedProcessAudit"));

    if (!existingAudit) {
      alert("No Process Audit finding is available.");
      return;
    }

    loadProcessAuditForAuditee(existingAudit);

    showPage("processAuditee");
  });
}


/* =========================================================
   OPEN PROCESS REVIEW PAGE
========================================================= */

function openProcessAuditReview() {

  const audit =
    JSON.parse(localStorage.getItem("lastSubmittedProcessAudit"));

  if (!audit) {
    alert("No Process Audit is available for review.");
    return;
  }

  loadProcessAuditForReview(audit);

  showPage("processReview");
}
/* =========================================================
   PROCESS AUDIT — MASTER SHEET / RECORDS
========================================================= */


/* ---------------------------------------------------------
   GET ALL PROCESS AUDIT RECORDS
--------------------------------------------------------- */

function getProcessAuditRecords() {

  return JSON.parse(
    localStorage.getItem("processAuditRecords") || "[]"
  );

}


/* ---------------------------------------------------------
   SAVE / UPDATE PROCESS AUDIT MASTER RECORD
--------------------------------------------------------- */

function updateProcessAuditRecord(audit) {

  if (!audit) return;

  let records = getProcessAuditRecords();

  const index = records.findIndex(
    record => record.auditNumber === audit.auditNumber
  );

  if (index >= 0) {

    records[index] = audit;

  } else {

    records.push(audit);

  }

  localStorage.setItem(
    "processAuditRecords",
    JSON.stringify(records)
  );

}


/* ---------------------------------------------------------
   FORMAT DATE
--------------------------------------------------------- */

function formatProcessRecordDate(value) {

  if (!value) return "-";

  if (value.includes("T")) {
    return value.split("T")[0];
  }

  return value;

}


/* ---------------------------------------------------------
   DISPLAY PROCESS MASTER SHEET
--------------------------------------------------------- */

function displayProcessAuditRecords() {

  const tableBody =
    document.getElementById("processRecordsTableBody");

  if (!tableBody) return;

  let records = getProcessAuditRecords();

  const search =
    document.getElementById("processRecordSearch")
      ?.value
      .toLowerCase()
      .trim() || "";

  const auditType =
    document.getElementById("processRecordAuditType")
      ?.value || "";

  const shop =
    document.getElementById("processRecordShop")
      ?.value || "";

  const category =
    document.getElementById("processRecordCategory")
      ?.value || "";

  const severity =
    document.getElementById("processRecordSeverity")
      ?.value || "";

  const finalStatus =
    document.getElementById("processRecordFinalStatus")
      ?.value || "";


  records = records.filter(record => {

    const searchMatch =
      !search ||
      JSON.stringify(record)
        .toLowerCase()
        .includes(search);

    const auditTypeMatch =
      !auditType ||
      record.auditType === auditType;

    const shopMatch =
      !shop ||
      record.shop === shop;

    const categoryMatch =
      !category ||
      record.category === category;

    const severityMatch =
      !severity ||
      record.severity === severity;

    const finalStatusMatch =
      !finalStatus ||
      record.finalStatus === finalStatus;

    return (
      searchMatch &&
      auditTypeMatch &&
      shopMatch &&
      categoryMatch &&
      severityMatch &&
      finalStatusMatch
    );

  });


  tableBody.innerHTML = "";


  if (records.length === 0) {

    tableBody.innerHTML = `
      <tr>
        <td colspan="26" style="text-align:center;padding:30px;">
          No Process Audit records found.
        </td>
      </tr>
    `;

    return;
  }


  records.forEach(record => {

    const row = document.createElement("tr");

    row.innerHTML = `

      <td>${record.auditNumber || "-"}</td>

      <td>${formatProcessRecordDate(record.auditDate)}</td>

      <td>${record.auditType || "-"}</td>

      <td>${record.auditorName || "-"}</td>

      <td>${record.shop || "-"}</td>

      <td>${record.line || "-"}</td>

      <td>${record.system || "-"}</td>

      <td>${record.auditee || "-"}</td>

      <td>${record.finding || "-"}</td>

      <td>${record.category || "-"}</td>

      <td>${record.severity || "-"}</td>

      <td>${record.responsibleDepartment || "-"}</td>

      <td>${record.responsiblePerson || "-"}</td>

      <td>${formatProcessRecordDate(record.targetDate)}</td>

      <td>${record.ica || "-"}</td>

      <td>${record.actionStatus || "-"}</td>

      <td>
        ${formatProcessRecordDate(record.actionCompletionDate)}
      </td>

      <td>${record.actionEvidence || "-"}</td>

      <td>${formatProcessRecordDate(record.reviewDate)}</td>

      <td>${record.reviewRemarks || "-"}</td>

      <td>${record.auditorSignOff || "-"}</td>

      <td>${record.finalStatus || "-"}</td>

      <td>${formatProcessRecordDate(record.closureDate)}</td>

      <td>${record.currentStage || "-"}</td>

      <td>
        ${formatProcessRecordDate(record.lastUpdatedDate)}
      </td>

      <td>
        <button
          type="button"
          onclick="showProcessAuditRecordDetails('${record.auditNumber}')"
        >
          View
        </button>
      </td>

    `;

    tableBody.appendChild(row);

  });

}


/* ---------------------------------------------------------
   SHOW COMPLETE RECORD DETAILS
--------------------------------------------------------- */

function showProcessAuditRecordDetails(auditNumber) {

  const records = getProcessAuditRecords();

  const record = records.find(
    item => item.auditNumber === auditNumber
  );

  if (!record) {

    alert("Process Audit record not found.");

    return;
  }


  document.getElementById("detailProcessAuditNumber").value =
    record.auditNumber || "";

  document.getElementById("detailProcessAuditDate").value =
    record.auditDate || "";

  document.getElementById("detailProcessAuditor").value =
    record.auditorName || "";

  document.getElementById("detailProcessAuditType").value =
    record.auditType || "";

  document.getElementById("detailProcessShop").value =
    record.shop || "";

  document.getElementById("detailProcessLine").value =
    record.line || "";

  document.getElementById("detailProcessSystem").value =
    record.system || "";

  document.getElementById("detailProcessAuditee").value =
    record.auditee || "";


  document.getElementById("detailProcessFinding").value =
    record.finding || "";

  document.getElementById("detailProcessCategory").value =
    record.category || "";

  document.getElementById("detailProcessSeverity").value =
    record.severity || "";

  document.getElementById(
    "detailProcessResponsibleDepartment"
  ).value =
    record.responsibleDepartment || "";

  document.getElementById(
    "detailProcessResponsiblePerson"
  ).value =
    record.responsiblePerson || "";

  document.getElementById("detailProcessTargetDate").value =
    record.targetDate || "";

  document.getElementById("detailProcessEvidence").value =
    record.evidence || "";


  document.getElementById("detailProcessICA").value =
    record.ica || "";

  document.getElementById(
    "detailProcessActionStatus"
  ).value =
    record.actionStatus || "";

  document.getElementById(
    "detailProcessCompletionDate"
  ).value =
    record.actionCompletionDate || "";

  document.getElementById(
    "detailProcessActionEvidence"
  ).value =
    record.actionEvidence || "";


  document.getElementById(
    "detailProcessReviewDate"
  ).value =
    record.reviewDate || "";

  document.getElementById(
    "detailProcessFinalStatus"
  ).value =
    record.finalStatus || "";

  document.getElementById(
    "detailProcessSignOff"
  ).value =
    record.auditorSignOff || "";

  document.getElementById(
    "detailProcessReviewRemarks"
  ).value =
    record.reviewRemarks || "";

  document.getElementById(
    "detailProcessClosureDate"
  ).value =
    record.closureDate || "";

  document.getElementById(
    "detailProcessCurrentStage"
  ).value =
    record.currentStage || "";

  document.getElementById(
    "detailProcessLastUpdated"
  ).value =
    record.lastUpdatedDate || "";


  document.getElementById(
    "processRecordDetails"
  ).style.display = "block";

  document.getElementById(
    "processRecordDetails"
  ).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* ---------------------------------------------------------
   CLOSE DETAILS
--------------------------------------------------------- */

const closeProcessRecordDetailsBtn =
  document.getElementById(
    "closeProcessRecordDetailsBtn"
  );

if (closeProcessRecordDetailsBtn) {

  closeProcessRecordDetailsBtn.addEventListener(
    "click",
    function () {

      document.getElementById(
        "processRecordDetails"
      ).style.display = "none";

    }
  );

}


/* ---------------------------------------------------------
   FILTER EVENTS
--------------------------------------------------------- */

[
  "processRecordSearch",
  "processRecordAuditType",
  "processRecordShop",
  "processRecordCategory",
  "processRecordSeverity",
  "processRecordFinalStatus"
].forEach(id => {

  const element = document.getElementById(id);

  if (element) {

    element.addEventListener(
      "input",
      displayProcessAuditRecords
    );

    element.addEventListener(
      "change",
      displayProcessAuditRecords
    );

  }

});


/* ---------------------------------------------------------
   RESET FILTERS
--------------------------------------------------------- */

const processRecordResetBtn =
  document.getElementById(
    "processRecordResetBtn"
  );

if (processRecordResetBtn) {

  processRecordResetBtn.addEventListener(
    "click",
    function () {

      document.getElementById(
        "processRecordSearch"
      ).value = "";

      document.getElementById(
        "processRecordAuditType"
      ).value = "";

      document.getElementById(
        "processRecordShop"
      ).value = "";

      document.getElementById(
        "processRecordCategory"
      ).value = "";

      document.getElementById(
        "processRecordSeverity"
      ).value = "";

      document.getElementById(
        "processRecordFinalStatus"
      ).value = "";

      displayProcessAuditRecords();

    }
  );

}


/* =========================================================
   PRODUCT AUDIT - INDEPENDENT WORKFLOW
========================================================= */

const productCategoryMap = {
    Appearance: ["ISD", "Fitment", "Missing", "Paint"],
    "Static Functional": ["Inoperative", "Intermittent", "Failure", "Alignment"],
    VLO: ["Contact/Rubbing", "Clamping/Clipping", "Routing", "Others"]
};

let pendingProductFindings = [];

function prepareNewProductAudit() {

    pendingProductFindings = [];

    [
        "productAuditorName",
        "productAuditDate",
        "productSeverity",
        "productType",
        "productSystem",
        "productStation",
        "productShop",
        "productLine",
        "productFinding",
        "productResponsiblePerson",
        "productTargetDate"
    ].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = "";
    });

    ["productAuditType", "productResponsibleDepartment"].forEach(id => {
        const field = document.getElementById(id);
        if (field) field.value = "";
    });

    const category = document.getElementById("productCategory");
    category.innerHTML = "<option value=\"\">Select Type first</option>";
    category.disabled = true;
    document.getElementById("productAuditorMessage").textContent = "";
    document.getElementById("productFindingCount").textContent = "0";

}

function updateProductCategories() {

    const type = document.getElementById("productType").value;
    const category = document.getElementById("productCategory");
    const categories = productCategoryMap[type] || [];

    category.innerHTML = "";

    if (!type) {
        category.innerHTML = "<option value=\"\">Select Type first</option>";
        category.disabled = true;
        return;
    }

    if (categories.length === 0) {
        category.innerHTML = "<option value=\"\">No category mapping provided</option>";
        category.disabled = true;
        return;
    }

    category.innerHTML = "<option value=\"\">Select Category</option>";
    categories.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        category.appendChild(option);
    });
    category.disabled = false;

}

function getProductAuditData() {

    const evidence = document.getElementById("productEvidence");

    return {
        auditType: "Product Audit",
        auditorName: document.getElementById("productAuditorName").value.trim(),
        auditDate: document.getElementById("productAuditDate").value,
        productAuditType: document.getElementById("productAuditType").value,
        productType: document.getElementById("productType").value,
        category: document.getElementById("productCategory").value,
        severity: document.getElementById("productSeverity").value,
        system: document.getElementById("productSystem").value.trim(),
        station: document.getElementById("productStation").value.trim(),
        shop: document.getElementById("productShop").value.trim(),
        line: document.getElementById("productLine").value.trim(),
        finding: document.getElementById("productFinding").value.trim(),
        evidence: evidence?.files?.length ? evidence.files[0].name : "",
        responsibleDepartment: document.getElementById("productResponsibleDepartment").value,
        responsiblePerson: document.getElementById("productResponsiblePerson").value.trim(),
        targetDate: document.getElementById("productTargetDate").value
    };

}

function getProductRecords() {
    return JSON.parse(localStorage.getItem("productAuditRecords") || "[]");
}

function saveProductRecord(audit) {

    const records = getProductRecords();
    const index = records.findIndex(record =>
        record.observationId === audit.observationId
    );

    if (index >= 0) records[index] = audit;
    else records.push(audit);

    localStorage.setItem("productAuditRecords", JSON.stringify(records));
    localStorage.setItem("lastSubmittedProductAudit", JSON.stringify(audit));

}

function getProductEntryError(data) {

    const required = [
        [data.auditorName, "Please enter Auditor Name."],
        [data.auditDate, "Please select Audit Date."],
        [data.productAuditType, "Please select Audit Type."],
        [data.category, "Please select a Category. No mapping is configured for this Type yet."],
        [data.severity, "Please select Severity."],
        [data.productType, "Please select Type."],
        [data.system, "Please enter System."],
        [data.station, "Please enter Station."],
        [data.shop, "Please enter Shop."],
        [data.line, "Please enter Line."],
        [data.finding, "Please enter Finding / Observation."],
        [data.responsibleDepartment, "Please select Responsible Department."],
        [data.responsiblePerson, "Please enter Responsible Person."],
        [data.targetDate, "Please select Target Date."]
    ];

    const missing = required.find(item => !item[0]);
    return missing ? missing[1] : "";

}

function loadProductAuditee(audit) {

    const values = {
        productActionAuditNumber: audit.auditNumber,
        productActionAuditDate: audit.auditDate,
        productActionAuditor: audit.auditorName,
        productActionAuditType: audit.productAuditType,
        productActionCategory: audit.category,
        productActionSeverity: audit.severity,
        productActionProductType: audit.productType,
        productActionSystem: audit.system,
        productActionStation: audit.station,
        productActionShop: audit.shop,
        productActionLine: audit.line,
        productActionFinding: audit.finding,
        productICA: audit.ica,
        productRootCause: audit.rootCause,
        productCorrectiveAction: audit.correctiveAction,
        productActionTargetDate: audit.actionTargetDate || audit.targetDate,
        productActionResponsiblePerson: audit.actionResponsiblePerson || audit.responsiblePerson,
        productActionCompletionDate: audit.actionCompletionDate,
        productActionStatus: audit.actionStatus
    };

    Object.entries(values).forEach(([id, value]) => {
        const field = document.getElementById(id);
        if (field) field.value = value || "";
    });

    document.getElementById("productAuditeeMessage").textContent = "";

}

function getProductActionData() {

    const current = JSON.parse(localStorage.getItem("lastSubmittedProductAudit") || "{}");
    const evidence = document.getElementById("productActionEvidence");

    return {
        ...current,
        ica: document.getElementById("productICA").value.trim(),
        rootCause: document.getElementById("productRootCause").value.trim(),
        correctiveAction: document.getElementById("productCorrectiveAction").value.trim(),
        actionTargetDate: document.getElementById("productActionTargetDate").value,
        actionResponsiblePerson: document.getElementById("productActionResponsiblePerson").value.trim(),
        actionCompletionDate: document.getElementById("productActionCompletionDate").value,
        actionStatus: document.getElementById("productActionStatus").value,
        actionEvidence: evidence?.files?.length ? evidence.files[0].name : current.actionEvidence || ""
    };

}

function loadProductReview(audit) {

    const values = {
        productReviewAuditNumber: audit.auditNumber,
        productReviewAuditor: audit.auditorName,
        productReviewAuditType: audit.productAuditType,
        productReviewCategory: audit.category,
        productReviewSeverity: audit.severity,
        productReviewProductType: audit.productType,
        productReviewSystem: audit.system,
        productReviewStation: audit.station,
        productReviewShop: audit.shop,
        productReviewLine: audit.line,
        productReviewFinding: audit.finding,
        productReviewICA: audit.ica,
        productReviewRootCause: audit.rootCause,
        productReviewCorrectiveAction: audit.correctiveAction,
        productReviewActionStatus: audit.actionStatus,
        productReviewCompletionDate: audit.actionCompletionDate,
        productReviewDate: audit.reviewDate || new Date().toISOString().split("T")[0],
        productReviewSignOff: audit.auditorSignOff || "",
        productReviewRemarks: audit.reviewRemarks || ""
    };

    Object.entries(values).forEach(([id, value]) => {
        const field = document.getElementById(id);
        if (field) field.value = value || "";
    });

    document.querySelectorAll(".product-status-option").forEach(option => {
        option.classList.toggle("selected", option.dataset.status === audit.finalStatus);
    });
    document.getElementById("productFinalStatus").value = audit.finalStatus || "";

}

function displayProductAuditRecords() {

    const tableBody = document.getElementById("productRecordsTableBody");
    if (!tableBody) return;

    const search = document.getElementById("productRecordSearch")?.value.toLowerCase().trim() || "";
    const auditType = document.getElementById("productRecordType")?.value || "";
    const type = document.getElementById("productRecordInspectionType")?.value || "";
    const category = document.getElementById("productRecordCategory")?.value || "";
    const status = document.getElementById("productRecordStatus")?.value || "";

    const records = getProductRecords().filter(record => {
        const text = JSON.stringify(record).toLowerCase();
        return (!search || text.includes(search)) &&
            (!auditType || record.productAuditType === auditType) &&
            (!type || record.productType === type) &&
            (!category || record.category === category) &&
            (!status || record.finalStatus === status);
    });

    tableBody.innerHTML = records.length ? records.map(record => `
        <tr>
            <td>${record.auditNumber || "-"}</td>
            <td>${record.observationNumber || "-"}</td>
            <td>${record.auditDate || "-"}</td>
            <td>${record.productAuditType || "-"}</td>
            <td>${record.productType || "-"}</td>
            <td>${record.category || "-"}</td>
            <td>${record.severity || "-"}</td>
            <td>${record.system || "-"}</td>
            <td>${record.station || "-"}</td>
            <td>${record.shop || "-"}</td>
            <td>${record.line || "-"}</td>
            <td>${record.auditorName || "-"}</td>
            <td>${record.finding || "-"}</td>
            <td>${record.actionResponsiblePerson || record.responsiblePerson || "-"}</td>
            <td>${record.actionTargetDate || record.targetDate || "-"}</td>
            <td>${record.actionStatus || "-"}</td>
            <td>${record.finalStatus || "-"}</td>
            <td>${record.currentStage || "-"}</td>
            <td>${record.lastUpdatedDate || "-"}</td>
        </tr>
    `).join("") : "<tr><td colspan=\"19\" class=\"no-records\">No Product Audit records found.</td></tr>";

}

document.getElementById("productType")?.addEventListener("change", updateProductCategories);

document.querySelectorAll(".product-status-option").forEach(option => {
    option.addEventListener("click", function () {
        document.querySelectorAll(".product-status-option").forEach(item => item.classList.remove("selected"));
        this.classList.add("selected");
        document.getElementById("productFinalStatus").value = this.dataset.status;
    });
});

document.getElementById("saveProductDraftBtn")?.addEventListener("click", function () {
    const data = getProductAuditData();
    localStorage.setItem("productAuditDraft", JSON.stringify(data));
    const message = document.getElementById("productAuditorMessage");
    message.textContent = "Product Audit saved as draft.";
    message.className = "form-message success";
});

document.getElementById("addProductFindingBtn")?.addEventListener("click", function () {

    const data = getProductAuditData();
    const message = document.getElementById("productAuditorMessage");
    const error = getProductEntryError(data);

    if (error) {
        message.textContent = error;
        message.className = "form-message error";
        return;
    }

    pendingProductFindings.push(data);
    document.getElementById("productFindingCount").textContent = pendingProductFindings.length;

    ["productType", "productSeverity", "productFinding"].forEach(id => {
        document.getElementById(id).value = "";
    });
    document.getElementById("productCategory").innerHTML = "<option value=\"\">Select Type first</option>";
    document.getElementById("productCategory").disabled = true;

    message.textContent = `Finding ${pendingProductFindings.length} added. Add another finding or submit the audit.`;
    message.className = "form-message success";

});

document.getElementById("submitProductAuditBtn")?.addEventListener("click", function () {
    const data = getProductAuditData();
    const message = document.getElementById("productAuditorMessage");
    const error = getProductEntryError(data);

    if (error) {
        message.textContent = error;
        message.className = "form-message error";
        return;
    }

    const counter = Number(localStorage.getItem("productAuditCounter") || "0") + 1;
    localStorage.setItem("productAuditCounter", counter);
    const auditNumber = `PDA-${new Date().getFullYear()}-${String(counter).padStart(3, "0")}`;
    const findings = [...pendingProductFindings, data];
    const audits = findings.map((finding, index) => ({
        ...finding,
        auditNumber,
        observationId: `${auditNumber}-${String(index + 1).padStart(2, "0")}`,
        observationNumber: index + 1,
        currentStage: "Awaiting Auditee Action",
        actionStatus: "Not Started",
        createdDate: new Date().toISOString(),
        lastUpdatedDate: new Date().toISOString()
    }));

    audits.forEach(saveProductRecord);
    pendingProductFindings = [];
    document.getElementById("productFindingCount").textContent = "0";
    const audit = audits[0];
    loadProductAuditee(audit);
    showPage("productAuditee");
});

document.getElementById("saveProductActionBtn")?.addEventListener("click", function () {
    const audit = getProductActionData();
    audit.currentStage = "Awaiting Auditee Action";
    audit.lastUpdatedDate = new Date().toISOString();
    saveProductRecord(audit);
    const message = document.getElementById("productAuditeeMessage");
    message.textContent = "Product Audit action saved as draft.";
    message.className = "form-message success";
});

document.getElementById("submitProductActionBtn")?.addEventListener("click", function () {
    const audit = getProductActionData();
    const message = document.getElementById("productAuditeeMessage");
    if (!audit.ica || !audit.rootCause || !audit.correctiveAction || !audit.actionTargetDate || !audit.actionResponsiblePerson || !audit.actionStatus) {
        message.textContent = "Please complete all required auditee action fields.";
        message.className = "form-message error";
        return;
    }
    audit.currentStage = "Awaiting Auditor Review";
    audit.lastUpdatedDate = new Date().toISOString();
    saveProductRecord(audit);
    loadProductReview(audit);
    showPage("productReview");
});

document.getElementById("completeProductReviewBtn")?.addEventListener("click", function () {
    const audit = JSON.parse(localStorage.getItem("lastSubmittedProductAudit") || "{}");
    const status = document.getElementById("productFinalStatus").value;
    const message = document.getElementById("productReviewMessage");
    if (!document.getElementById("productReviewDate").value || !document.getElementById("productReviewSignOff").value.trim() || !document.getElementById("productReviewRemarks").value.trim() || !status) {
        message.textContent = "Please complete the review date, sign-off, remarks, and status.";
        message.className = "form-message error";
        return;
    }
    audit.reviewDate = document.getElementById("productReviewDate").value;
    audit.auditorSignOff = document.getElementById("productReviewSignOff").value.trim();
    audit.reviewRemarks = document.getElementById("productReviewRemarks").value.trim();
    audit.finalStatus = status;
    audit.currentStage = status === "Closed" ? "Closed" : "Returned to Auditee";
    audit.closureDate = status === "Closed" ? new Date().toISOString().split("T")[0] : "";
    audit.lastUpdatedDate = new Date().toISOString();
    saveProductRecord(audit);
    message.textContent = status === "Closed" ? "Product Audit closed successfully." : "Product Audit returned to Auditee.";
    message.className = "form-message success";
    if (status !== "Closed") {
        loadProductAuditee(audit);
        showPage("productAuditee");
        return;
    }

    displayProductAuditRecords();
    showPage("productRecords");
});

document.getElementById("returnProductToAuditeeBtn")?.addEventListener("click", function () {
    loadProductAuditee(JSON.parse(localStorage.getItem("lastSubmittedProductAudit") || "{}"));
    showPage("productAuditee");
});

["productRecordSearch", "productRecordType", "productRecordInspectionType", "productRecordCategory", "productRecordStatus"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", displayProductAuditRecords);
    document.getElementById(id)?.addEventListener("change", displayProductAuditRecords);
});

document.getElementById("resetProductRecordsBtn")?.addEventListener("click", function () {
    ["productRecordSearch", "productRecordType", "productRecordInspectionType", "productRecordCategory", "productRecordStatus"].forEach(id => {
        document.getElementById(id).value = "";
    });
    displayProductAuditRecords();
});

/* ---------------------------------------------------------
   INITIAL LOAD
--------------------------------------------------------- */

displayProcessAuditRecords();

// Keep the application from opening with every content page hidden.
if (!appPage.classList.contains("hidden")) {
    showPage("dashboard");
}
