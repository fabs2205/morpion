let joueur = true
let recommencer = document.getElementById("recommencer")
let win = document.getElementById("win")
const cellules = document.querySelectorAll('.cellule')
let jvsj = document.getElementById("jvsj")
let jvsia = document.getElementById("jvsia")
let contreIa = false
let quitter = document.getElementById("quitter")
let ligne = document.querySelectorAll(".ligne")


jvsj.addEventListener("click", function () {    
    let cacher = document.getElementById("cacher")
    cacher.classList.remove("hidden")
    let menu = document.getElementById("menu")
    menu.classList.add("hidden")
    menu.style.display = "none"
    contreIa = false
})

jvsia.addEventListener("click", function () {
    let cacher = document.getElementById("cacher")
    cacher.classList.remove("hidden")
    let menu = document.getElementById("menu")
    menu.classList.add("hidden")
    menu.style.display = "none"
    contreIa = true

})


cellules.forEach(function (cellule) {
    cellule.addEventListener("click", function () {
        if (cellule.textContent === "") {

            if (joueur) {
                cellule.textContent = "X"
                cellule.style.color = "red"
                cellule.style.backgroundColor = "blue"

            } else {
                cellule.textContent = "O"
                cellule.style.color = "blue"
                cellule.style.backgroundColor = "red"
            }
            joueur = !joueur

        }
        const gagnant = victoire()
        if (gagnant != "") {
            win.textContent = gagnant + " " + " Win !"
            recommencer.style.display = "block"
            recommencer.addEventListener("click", () => rejouer())
            quitter.style.display = "block"
            quitter.addEventListener("click", function () {
                window.close();

            })
        } else if (matchnul()) {
            win.textContent = "Egalité !"
            recommencer.style.display = "block"
            recommencer.addEventListener("click", () => rejouer())
            quitter.style.display = "block"
            quitter.addEventListener("click", function () {
                window.close();

            })

        } else if (contreIa && !joueur) {

            iaplay()
        }

    })
})
function victoire() {
    const c1 = cellules[0].textContent
    const c2 = cellules[1].textContent
    const c3 = cellules[2].textContent
    const c4 = cellules[3].textContent
    const c5 = cellules[4].textContent
    const c6 = cellules[5].textContent
    const c7 = cellules[6].textContent
    const c8 = cellules[7].textContent
    const c9 = cellules[8].textContent


    if (c1 === c2 && c2 === c3 && c1 !== "") {
        return c1
    }
    if (c4 === c5 && c5 === c6 && c4 !== "") {
        return c4
    }
    if (c7 === c8 && c8 === c9 && c7 !== "") {
        return c7
    }

    if (c1 === c4 && c4 === c7 && c1 !== "") {
        return c1
    }
    if (c2 === c5 && c5 === c8 && c2 !== "") {
        return c2
    }
    if (c3 === c6 && c6 === c9 && c3 !== "") {
        return c3
    }


    if (c1 === c5 && c5 === c9 && c1 !== "") {
        return c1
    }
    if (c3 === c5 && c5 === c7 && c3 !== "") {
        return c3
    }

    return ""

}


function rejouer() {
    cellules.forEach(function (cellule) {
        cellule.textContent = ""
        cellule.style.backgroundColor = "";
    })
    joueur = true
    win.textContent = ""
    recommencer.style.display = "none"
    quitter.style.display = "none"

}


function matchnul() {
    const c1 = cellules[0].textContent
    const c2 = cellules[1].textContent
    const c3 = cellules[2].textContent
    const c4 = cellules[3].textContent
    const c5 = cellules[4].textContent
    const c6 = cellules[5].textContent
    const c7 = cellules[6].textContent
    const c8 = cellules[7].textContent
    const c9 = cellules[8].textContent

    if (c1 !== "" && c2 !== "" && c3 !== "" && c4 !== "" && c5 !== "" && c6 !== "" && c7 !== "" && c8 !== "" && c9 !== "") {
        if (!victoire()) {
            return true
        }
    }
    return false
}


function iaplay() {
    let cellulesLibres = Array.from(cellules).filter(cellule => cellule.textContent === "")
    if (cellulesLibres.length > 0) {
        let celluleChoisie = cellulesLibres[Math.floor(Math.random() * cellulesLibres.length)]
        celluleChoisie.textContent = "O"
        celluleChoisie.style.color = "blue"
        celluleChoisie.style.backgroundColor = "red"


        const gagnant = victoire()
        if (gagnant !== "") {
            win.textContent = "Victoire " + gagnant + " !"
            recommencer.addEventListener("click", () => rejouer())
            recommencer.style.display = "block"
            quitter.style.display = "block"
        }

        joueur = !joueur
    }


}

