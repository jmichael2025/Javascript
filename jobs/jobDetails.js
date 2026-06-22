/* jshint esversion: 6 */
const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");


fetch("jobs.json")
    .then(response => response.json())
    .then(jobs => {

        // Find the matching job
        const job = jobs.find(
            item => item.id == jobId
        );

        if (job) {
            document.getElementById("title").textContent = job.title;
            document.getElementById("company").textContent = job.company;
            document.getElementById("location").textContent = job.location;
            document.getElementById("salary").textContent = job.salary;
            document.getElementById("description").textContent = job.description;
        } else {
            document.querySelector(".details").innerHTML =
                "<h2>Job not found</h2>";
        }

    })
    .catch(error => {
        console.log("Error loading job details:", error);
    });