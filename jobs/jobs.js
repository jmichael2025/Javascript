document.addEventListener("DOMContentLoaded", loadJobs);

function loadJobs() {
    fetch("jobs.json")
        .then(response => response.json())
        .then(jobs => {

            const container = document.getElementById("jobsContainer");

            jobs.forEach(job => {
                container.innerHTML +=
                    `<div class="job-card">
                <h2>${job.title}</h2>

                <p><strong>Company:</strong> ${job.company}</p>

                <p><strong>Location:</strong> ${job.location}</p>

                
                <p><strong>Summary:</strong> ${job.summary}</p>

                <button class="jobBtn"
    onclick="location.href='jobDetails.html?id=${job.id}'">
    View Job
</button>
                    </div>`
                    ;
            });

        })
        .catch(error => {
            console.log("Error loading jobs:", error);
        });
}




