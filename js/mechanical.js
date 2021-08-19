let labs = [
    { 
        labName: "Operating System Lab", 
        experiments: [
            {id: "Fundamentals of Interrupts", path: "exp-interrupts"},
            {id: "Fundamentals of System Calls", path: "exp-system-calls"},
            {id: "Process Scheduling Algorithms", path: "exp-process-scheduling-algorithm"}]
    }
]

let labList = "";
let experimentList = "";
labs.forEach((lab)=>{
    experimentList = "";
    getExperimentList(lab.experiments);
    labList += `
    <div class="card col-md-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${lab.labName}</h5>
            <p class="card-text">List of Experiments</p>
            ${experimentList}
        </div>
    </div> 
    `
});

function getExperimentList(experiments){
    experiments.forEach(function(expt){
        experimentList+= `
        <button onclick="location.href='${expt.path}'"class="btn btn-outline-primary m-2 p-2">${expt.id}</button>
        `
    });
    return experimentList;
    
} 

document.getElementById("labCards").innerHTML = labList;