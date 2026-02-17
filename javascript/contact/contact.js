/*jshint esversion: 6 */

let userStatusData = ["Please select your employment status", "Job Seeker", "Employer", "Other"];
userStatusData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlStatus.appendChild(option);
});

let currentEmploymentData = ["What is your current employment?", "Employed", "Unemployed", "Student", "Retired"];
currentEmploymentData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlEmployment.appendChild(option);
});


let careerLevelData = ["What best describes your career level?", "Entry-level", "Mid-level", "Senior-level", "Manager", "Executive", "Career switcher"];
careerLevelData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlCareerLevel.appendChild(option);
});

let yourIndustryData = ["What industry are you primarily searching in?", "Technology", "Finance", "Healthcare", "Education", "Marketing/Sales", "Engineering", "Other"];
yourIndustryData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlIndustry.appendChild(option);
});

let jobRolesData = ["What types of job roles are you most interested in?", "Full-time roles", "Part-time roles", "Contract / freelance", "Remote jobs", "Internships"];
jobRolesData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlJobRoles.appendChild(option);
});
let referralSourceData = ["Where did you hear about JobNest?", "Social media", "Search engine", "Friend / Family", "Advertisement", "Other"];
referralSourceData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlReferralSource.appendChild(option);
});
let easeOfUseData = ["How difficult is it to use JobNest?", "Very difficult", "Medium", "Very easy"];
easeOfUseData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlEaseOfUse.appendChild(option);
});
let jobRelevanceData = ["How relevant are the job listings to you?", "Very relevant", "Somewhat relevant"];
jobRelevanceData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlJobRelevance.appendChild(option);
});
let overallSatisfactionData = ["Overall, how satisfied are you with your experience on JobNest?", "Dissatisfied", "Neutral", "Satisfied",];
overallSatisfactionData.forEach(function(userStatusstatus) {
    let option = document.createElement("option");
    option.text = userStatusstatus;
    option.value = userStatusstatus;
    ddlOverallSatisfaction.appendChild(option);
});


function submitSurvey() {

if(ddlStatus.value === ddlStatus.options[0].value)
 {
    alert("Please complete employment status?");
    ddlStatus.focus();  
    return false;
 }
 else if(ddlEmployment.value === ddlEmployment.options[0].value)    
 {
    alert("Please complete current employment?");
    ddlEmployment.focus();            
   return false;
 }
    else if(ddlCareerLevel.value === ddlCareerLevel.options[0].value)
 {
    alert("Please complete career level?");
    ddlCareerLevel.focus();
    return false;
 }              
    else if(ddlIndustry.value === ddlIndustry.options[0].value)
    {           
    alert("Please complete industry?"); 
    ddlIndustry.focus();
    return false;
    }   
    else if(ddlJobRoles.value === ddlJobRoles.options[0].value)
    {           
    alert("Please complete job roles?"); 
    ddlJobRoles.focus();    
    return false;
    }                   
    else if(ddlReferralSource.value === ddlReferralSource.options[0].value)     
    {           
    alert("Please complete referral source?"); 
    ddlReferralSource.focus();  
    return false;
    }   
    else if(ddlEaseOfUse.value === ddlEaseOfUse.options[0].value)           
    { 
    alert("Please complete ease of use?"); 
    ddlEaseOfUse.focus();
    return false;
    }
    else if(ddlJobRelevance.value === ddlJobRelevance.options[0].value)
    { 
    alert("Please complete job relevance?"); 
    ddlJobRelevance.focus();
    return false;
    }                   

        else if(ddlOverallSatisfaction.value === ddlOverallSatisfaction.options[0].value)       
    { 
    alert("Please complete overall satisfaction?"); 
    ddlOverallSatisfaction.focus();                 
    return false;
    }
 else
 {   
    popModalSuccess.style.display = "block"; 
      document.getElementById("formValues").innerHTML = 
        "<p><Employment Status: " + ddlStatus.value + "</p>" +
        "<p>Current Employment: " + ddlEmployment.value + "</p>" +
        "<p>Career Level: " + ddlCareerLevel.value + "</p>" +
        "<p>Industry: " + ddlIndustry.value + "</p>" +
        "<p>Job Roles: " + ddlJobRoles.value + "</p>" +
        "<p>Referral Source: " + ddlReferralSource.value + "</p>" +
        "<p>Ease of Use: " + ddlEaseOfUse.value + "</p>" +
        "<p>Job Relevance: " + ddlJobRelevance.value + "</p>" +
        "<p>Overall Satisfaction:" + ddlOverallSatisfaction.value + "</p>" +
        "<p>Additional Comments:" + comments.value + "</p>";    
    return false;   
 }

}
var modal = document.getElementById("popModalSuccess");
var spanClose = document.getElementsByClassName("close")[0];

spanClose.onclick = function() {
  modal.style.display = "none";
document.getElementById("surveyForm").reset();  
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};