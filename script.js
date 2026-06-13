// ===========================



// Personal Goal - script.js



// ===========================



// Load everything when the page opens



document.addEventListener("DOMContentLoaded", () => {



    loadQuickNotes();



    updateProgress();



    loadCTFCount();



    loadRoadmapStatuses();



});



// ===========================



// Quick Notes



// ===========================



function saveQuickNotes() {



    const notes = document.getElementById("quick-notes");



    if (!notes) return;



    localStorage.setItem(



        "personalGoalQuickNotes",



        notes.value



    );



    alert("Notes saved!");



}



function loadQuickNotes() {



    const notes = document.getElementById("quick-notes");



    if (!notes) return;



    notes.value =



        localStorage.getItem(



            "personalGoalQuickNotes"



        ) || "";



}



// ===========================



// Progress Tracking



// ===========================



const roadmapItems = [



    "networking",



    "linux",



    "ctf",



    "osint",



    "crypto",



    "python",



    "forensics",



    "web",



    "reverse",



    "binary",



    "advanced"



];



function markComplete(topic) {



    localStorage.setItem(



        `completed_${topic}`,



        "true"



    );



    updateProgress();



    loadRoadmapStatuses();



}



function unmarkComplete(topic) {



    localStorage.removeItem(



        `completed_${topic}`



    );



    updateProgress();



    loadRoadmapStatuses();



}



function isCompleted(topic) {



    return localStorage.getItem(



        `completed_${topic}`



    ) === "true";



}



function updateProgress() {



    const progressBar =



        document.getElementById(



            "overall-progress"



        );



    const progressText =



        document.getElementById(



            "progress-text"



        );



    if (!progressBar || !progressText)



        return;



    let completed = 0;



    roadmapItems.forEach(topic => {



        if (isCompleted(topic)) {



            completed++;



        }



    });



    const percent = Math.round(



        (completed / roadmapItems.length) * 100



    );



    progressBar.style.width =



        percent + "%";



    progressText.textContent =



        `${percent}% Complete (${completed}/${roadmapItems.length})`;



}



// ===========================



// Roadmap Status Display



// ===========================



function loadRoadmapStatuses() {



    updateStatus(



        "networking-status",



        "Networking Fundamentals",



        "networking"



    );



    updateStatus(



        "linux-status",



        "Linux Basics",



        "linux"



    );



    updateStatus(



        "ctf-status",



        "Introduction to CTFs",



        "ctf"



    );



}



function updateStatus(



    elementId,



    displayName,



    topic



) {



    const element =



        document.getElementById(



            elementId



        );



    if (!element) return;



    if (isCompleted(topic)) {



        element.textContent =



            `✅ ${displayName}`;



        element.className =



            "completed";



    } else {



        element.textContent =



            `⏳ ${displayName}`;



        element.className =



            "not-started";



    }



}



// ===========================



// CTF Tracker



// ===========================



function addCTFChallenge() {



    let count = parseInt(



        localStorage.getItem(



            "ctfSolved"



        ) || 0



    );



    count++;



    localStorage.setItem(



        "ctfSolved",



        count



    );



    loadCTFCount();



}



function removeCTFChallenge() {



    let count = parseInt(



        localStorage.getItem(



            "ctfSolved"



        ) || 0



    );



    if (count > 0) {



        count--;



    }



    localStorage.setItem(



        "ctfSolved",



        count



    );



    loadCTFCount();



}



function loadCTFCount() {



    const counter =



        document.getElementById(



            "ctf-count"



        );



    if (!counter) return;



    counter.textContent =



        localStorage.getItem(



            "ctfSolved"



        ) || 0;



}



// ===========================



// Current Lesson



// ===========================



function setCurrentLesson(



    lessonName



) {



    localStorage.setItem(



        "currentLesson",



        lessonName



    );



    loadCurrentLesson();



}



function loadCurrentLesson() {



    const lesson =



        document.getElementById(



            "current-lesson"



        );



    if (!lesson) return;



    lesson.textContent =



        localStorage.getItem(



            "currentLesson"



        ) ||



        "Networking Fundamentals";



}



loadCurrentLesson();



// ===========================



// Reset Progress



// ===========================



function resetEverything() {



    const confirmed = confirm(



        "Are you sure you want to reset ALL progress? This cannot be undone."



    );



    if (!confirmed) return;



    localStorage.clear();



    location.reload();



}



// ===========================



// Export Backup



// ===========================



function exportData() {



    const data = {};



    for (



        let i = 0;



        i < localStorage.length;



        i++



    ) {



        const key =



            localStorage.key(i);



        data[key] =



            localStorage.getItem(



                key



            );



    }



    const blob = new Blob(



        [



            JSON.stringify(



                data,



                null,



                2



            )



        ],



        {



            type:



                "application/json"



        }



    );



    const link =



        document.createElement(



            "a"



        );



    link.href =



        URL.createObjectURL(blob);



    link.download =



        "personal_goal_backup.json";



    link.click();



}



// ===========================



// Import Backup



// ===========================



function importData(event) {



    const file =



        event.target.files[0];



    if (!file) return;



    const reader =



        new FileReader();



    reader.onload = e => {



        const data =



            JSON.parse(



                e.target.result



            );



        Object.entries(



            data



        ).forEach(



            ([key, value]) => {



                localStorage.setItem(



                    key,



                    value



                );



            }



        );



        alert(



            "Backup imported!"



        );



        location.reload();



    };



    reader.readAsText(file);



}
