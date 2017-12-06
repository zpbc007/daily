function Player (name, teamColor) {
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
// 死亡
Player.prototype.die = function () {
    this.state = 'dead'
    playerDirector.reciveMessage('playerDead', this)
}
// 移除
Player.prototype.remove = function () {
    playerDirector.reciveMessage('removePlayer', this)
}
// 换队
Player.prototype.changeTeam = function (color) {
    playerDirector.reciveMessage('changeTeam', this, color)
}
var playerFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor)
    playerDirector.reciveMessage('addPlayer', newPlayer)
    return newPlayer
}

var playerDirector = (function (){
    var players = {},// 所有玩家
        operations = {} // 可以执行的操作

    // 添加
    operations.addPlayer = function (player) {
        var teamColor = player.teamColor
        players[teamColor] = players[teamColor] || []

        players[teamColor].push(player)
    }    

    // 移除
    operations.removePlayer = function (player) {
        var teamColor = player.teamColor,
            teamPlayers = players[teamColor] || []
        
        for (var i = teamPlayers.length - 1; i >= 0; i--) {
            if (teamPlayers[i] === player) {
                teamPlayers.splice(i, 1)
            }
        }
    }

    // 换队
    operations.changeTeam = function (player, newTeamColor) {
        operations.removePlayer(player)
        player.teamColor = newTeamColor
        operations.addPlayer(player)
    }

    // 死亡
    operations.playerDead = function (player){
        var teamColor = player.teamColor
            teamPlayers = players[teamColor]

        var all_dead = true

        for (var i = 0, player; player = teamPlayers[i++];) {
            if (player.state !== 'dead') {
                all_dead = false
                break
            }
        }

        if (all_dead === true) {
            for (var i = 0, player; player = teamPlayers[i++];){
                player.lose()
            }

            for (var color in players) {
                if (color !== teamColor) {
                    var teamPlayers = players[color]
                    for (var i = 0, player; player = teamPlayers[i++];){
                        player.win()
                    }
                }
            } 
        }
    }

    var reciveMessage = function (){
        var message = Array.prototype.shift.call(arguments)
        operations[message].apply(this, arguments)
    } 

    return {reciveMessage}
})()

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

