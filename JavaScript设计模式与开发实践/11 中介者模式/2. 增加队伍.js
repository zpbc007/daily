// 保存所有玩家
var players = []

function Player (name, teamColor) {
    this.partners = []
    this.enemies = []
    this.state = 'live'
    this.name = name
    this.teamColor = teamColor
}

Player.prototype.win = function () {
    console.log(`${this.name}, won`)
}

Player.prototype.lose = function () {
    console.log(`${this.name}, lose`)
}

Player.prototype.die = function () {
    var all_dead = true
    this.state = 'dead'

    for (var i = 0, partner; partner = this.partners[i++];){
        if (partner.state !== 'dead'){
            all_dead = false
            break
        }
    }
    if (all_dead === true) {
        this.lose()
        for (var i = 0, partner; partner = this.partners[i++];) {
            partner.lose()
        }
        for (var i = 0, enemy; enemy = this.enemies[i++];) {
            enemy.win()
        }
    }
}

var playerFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor)

    for (var i = 0, player; player = players[i++]; ){
        if (player.teamColor === newPlayer.teamColor) {
            player.partners.push(newPlayer)
            newPlayer.partners.push(player)
        }else {
            player.enemies.push(newPlayer)
            newPlayer.enemies.push(player)
        }
    }
    players.push(newPlayer)

    return newPlayer
}

// 红队
var player1 = playerFactory('001', 'red'),
    player2 = playerFactory('002', 'red'),
    player3 = playerFactory('003', 'red'),
    player4 = playerFactory('004', 'red')

var player11 = playerFactory('011', 'blue'),
    player22 = playerFactory('012', 'blue'),
    player33 = playerFactory('013', 'blue'),
    player44 = playerFactory('014', 'blue')

player1.die()
player2.die()
player3.die()
player4.die()

