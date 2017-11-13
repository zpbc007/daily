export class Action {
    type: number
    filter: string
    constructor (type: number, filter: string) {
        this.type = type
        this.filter = filter
    }
}