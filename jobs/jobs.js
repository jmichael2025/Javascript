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

                <button class="jobBtn" id="jobBtn"
                    onclick="viewJob(
                    '${job.title}',
                                '${job.company}',
                                '${job.location}',
                                '${job.salary}',
                                \`${job.description}\`
                            )">
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

            

function viewJob(title, company, location, salary, description) {

    document.getElementById("jobDetails").style.display = "block";

    document.getElementById("jobTitle").textContent = title;
    document.getElementById("company").textContent = company;
    document.getElementById("location").textContent = location;
    document.getElementById("salary").textContent = salary;
    document.getElementById("description").textContent = description;

    document.getElementById("jobDetails").scrollIntoView({
        behavior: "smooth"
    });
        }


