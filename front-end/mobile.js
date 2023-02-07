const daysMobile = document.getElementById('days-mobile')
const dayButtons = document.getElementsByClassName('day-button')
const singleDay = document.getElementById('single-day')

// Screen size fix

resizeAction()
window.addEventListener('resize', resizeAction, true);

function resizeAction() {
    if (window.innerWidth < 900) {
        days.style.display = 'none'
        daysMobile.style.display = 'flex'
    }
    else {
        days.style.display = 'flex'
        daysMobile.style.display = 'none'
    }
}


// Single day buttons

function selectDay(day) {
    resetSingleDay()
    const dayLessons = shownLessons.filter((lesson) => lesson.day === day)
    dayLessons.forEach((lesson) => {
        const li = document.createElement("li")
        li.innerHTML = setScheduleText(lesson)
        singleDay.appendChild(li)
    })
    swapDayOpacity(day)
}

function swapDayOpacity(day) {
    for (let button of dayButtons) {
        if (button.id == `mobile${day}`)
            button.style.opacity = 1
        else
            button.style.opacity = 0.6
    }
}

function resetSingleDay() {
    singleDay.innerHTML = ""
}
