let fileInput = document.getElementById("fileInput");
let uploadBox = document.getElementById("uploadBox");

uploadBox.onclick = () => fileInput.click();

fileInput.addEventListener("change", async (e) => {

    let file = e.target.files[0];
    if(!file) return;

    alert("Uploading...");

    // STEP 1: Upload to backend
    let formData = new FormData();
    formData.append("file", file);

    let res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
    });

    let data = await res.json();
    let cid = data.cid;

    // STEP 2: Save to blockchain
    let tx = await contract.saveDoc(file.name, "GENERAL", cid);
    await tx.wait();

    alert("Saved Successfully!");

    loadDocuments();
});


async function loadDocuments() {

    let docs = await contract.getDocs();

    let container = document.getElementById("docList");
    container.innerHTML = "";

    docs.forEach(doc => {

        let div = document.createElement("div");
        div.className = "doc-card";

        div.innerHTML = `
            <div class="doc-header">${doc.docType}</div>
            <h3>${doc.name}</h3>
            <a href="https://gateway.pinata.cloud/ipfs/${doc.cid}" target="_blank">Open</a>
        `;

        container.appendChild(div);
    });
}