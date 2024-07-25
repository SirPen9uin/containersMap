export default class ErrorRepository {
    constructor() {
        this.errorStorage = new Map();
    }
    translate(errorNum) {
        errorNum = String(errorNum)
        if (this.errorStorage.has(errorNum)) {
            return this.errorStorage.get(errorNum)
        }
        throw new Error('Unknown error')
    }
}