const showTag = function () {
    
    console.log('Показывает объект', this)
    console.log(`Показывает тег этого обьекта, "${this.tag}"`)
}


const user = {
    tag: "Mango",
    city: "Tokyo",
}

const player = {
    tag: "Poly",
    city: "Paris",
    
}

user.showUserTage = showTag;

player.showPlayerTag = showTag;


user.showUserTage()

player.showPlayerTag()

const xyz = user.showUserTage;

console.log(xyz)



