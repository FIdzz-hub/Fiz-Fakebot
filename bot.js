const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementById("container")

let init = 0

const botSay = (data) => {
    return [
        `Halo nama saya FizBot, siapa nama kamu?..`,
        `halo ${data?.nama}, berapa usia kamu?..`,
        `ohh ${data?.usia}, hobi kamu apa?..`,
        `wawww sama dong aku juga hobby ${data?.hobby}, btw punya pacar gak?..`,
        `ohh ${data?.pacar}, yaudah kalau gitu, udahan ya..`
    ]
}

pertanyaan.innerHTML = botSay({})[0]

let usersData = {}

function botStart() {
    if(jawaban.value.length < 1 ) return alert("silahkan isi jawaban dulu")

    const currentInit = init
    init++

    if (init === 1) {
        botDelay({ nama: jawaban.value })
    }else if (init === 2) {
        botDelay({ usia: jawaban.value })
    }else if (init === 3) {
        botDelay({ hobby: jawaban.value })
    }else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    }else if (init === 5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container.style.filter = "blur(4px)"

    Object.assign(usersData, jawabanUser)

    setTimeout(() => {
        pertanyaan.innerHTML = botSay(usersData)[init]
        loaders.style.display = "none"
        container.style.filter = "none"
    }, 1000)
    jawaban.value = ""
}

function finishing() {
    loaders.style.display = "block"
    container.style.filter = "blur(4px)"
    setTimeout(() => {
        loaders.style.display = "none"
        container.style.filter = "none"
    }, 1000)
    pertanyaan.innerHTML = `Thank u ya ${usersData.nama} udh maen ke FizBot, kali-kali kita main ${usersData.hobby} bareng ya!..`
    jawaban.value = "siap thanks juga"
}

function botEnd() {
    alert(`Terimakasih ${usersData.nama} sudah berkunjung!`)
    window.location.reload()
}