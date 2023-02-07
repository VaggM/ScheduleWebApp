const monday = document.getElementById("Mon")
const tuesday = document.getElementById("Tue")
const wednesday = document.getElementById("Wed")
const thursday = document.getElementById("Thu")
const friday = document.getElementById("Fri")

const winter = document.getElementById("winter")
const spring = document.getElementById("spring")

const url_winter = '/api/schedule?season=winter'
const url_spring = '/api/schedule?season=spring'

const semButtons = document.getElementById("semButtons")
const optionButtons = document.getElementById("optionButtons")
const optionText = document.getElementById("options")


// fetch data for schedule and button ids for opacity change

let lessons = []
let semLessons = []
let shownLessons = []
let semIds = []
let optionIds = []
let optionType = ""


// default season based on month

const currentMonth = new Date().getMonth() + 1

if (1 < currentMonth && currentMonth < 9)
    selectSeason('spring')
else
    selectSeason('winter')

    
// season click

function selectSeason(season) {

    resetSemesters()
    
    if (season === "winter") {
        seasonButtonSwap(winter, spring, url_winter)
    }
    else if (season === "spring") {
        seasonButtonSwap(spring, winter, url_spring)
    }
}


function seasonButtonSwap(newSeason, oldSeason, url) {
    swapSeasonOpacity(newSeason, oldSeason)
    queryScheduleAndAddButtons(url)
}


function queryScheduleAndAddButtons(url) {
    fetch(url)
        .then(res => res.json())
        .then(out => {
            lessons = out.data
            const sems = getUniqueValueSet(lessons, 'semester')
            addSemButtons(sems)
            selectSemester(Number(semIds[0][3]))
        })
        .catch(err => { console.log('could not fetch') })
}


function addSemButtons(sems) {
    sems.forEach((sem) => {
        createSemButton(sem)
    })
}


function selectSemester(sem) {
    resetSchedule()
    resetOptions()
    swapSemesterOpacity(sem)
    semLessons = lessons.filter((lesson) => lesson.semester === sem)
    fillSchedule(semLessons)
    selectDay('Mon')
    addOptionButtons()
}


function addOptionButtons() {
    checkOptions('tmima', 'Τμήμα:')
    checkOptions('kiklos', 'Κύκλος Σπουδών:')
}


function checkOptions(key, text) {
    const options = getUniqueValueSet(semLessons, key)

    if (options[0] !== null) {
        optionType = key
        optionText.innerHTML = text
        options.forEach((option) => {
            if (option !== null)
                createOptionButton(option)
        })
    }
}


function selectOption(option) {
    resetSchedule()
    swapOptionOpacity(option)
    const optLessons = semLessons.filter((lesson) => (lesson[optionType] === option) || (lesson[optionType] === null))
    fillSchedule(optLessons)
    selectDay('Mon')
}

// Fill with lessons

function fillSchedule(lessons) {
    shownLessons = lessons
    lessons.sort((a,b)=> (a.hours > b.hours ? 1 : -1))
    lessons.forEach((lesson) => {
        const day = document.getElementById(lesson.day)
        addLessonLi(day, setScheduleText(lesson))
    })
}


function setScheduleText(lesson) {
    let fullText = ` ${lesson.hours} <br> ${lesson.subject} ${lesson.tmima} <br> ${lesson.prof_last_name} <br> ${lesson.classroom} `
    return fullText
}


function addLessonLi(day, text) {
    const li = document.createElement("li")
    li.innerHTML = text
    day.appendChild(li)
}


// Bonus functions

function createSemButton(sem) {
    const button = document.createElement("button")
    button.innerText = sem
    button.setAttribute('onclick', `selectSemester(${sem})`)
    button.id = `sem${sem}`
    semIds.push(button.id)
    semButtons.appendChild(button)
}

function createOptionButton(option) {
    const button = document.createElement("button")
    button.innerHTML = option
    button.style.opacity = 0.6
    button.setAttribute('onclick', `selectOption(${option})`)
    button.id = `option${option}`
    optionIds.push(button.id)
    optionButtons.appendChild(button)
}

function swapSeasonOpacity(newSeason, oldSeason) {
    newSeason.style.opacity = 1
    oldSeason.style.opacity = 0.6
}

function swapSemesterOpacity(sem) {
    semIds.forEach((button) => {
        const buttonSem = document.getElementById(button)
        if (button === `sem${sem}`)
            buttonSem.style.opacity = 1
        else
            buttonSem.style.opacity = 0.6
    })
}

function swapOptionOpacity(opt) {
    optionIds.forEach((id) => {
        const buttonOpt = document.getElementById(id)
        if (id === `option${opt}`)
            buttonOpt.style.opacity = 1
        else
            buttonOpt.style.opacity = 0.6
    })
}


function resetSemesters() {
    semButtons.innerHTML = ""
    semIds = []
}


function resetOptions() {
    optionText.innerHTML = ""
    optionButtons.innerHTML = ""
    optionIds = []
}


function resetSchedule() {
    monday.innerHTML = "";
    tuesday.innerHTML = "";
    wednesday.innerHTML = "";
    thursday.innerHTML = "";
    friday.innerHTML = "";
}


function getUniqueValueSet(array, keyName) {
    const set = [... new Set( array.map((item) => item[keyName]) )]
    return set.sort()
}