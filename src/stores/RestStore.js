import { observable, computed, action } from  'mobx'

class Res {
    @observable name
    @observable time
    @observable numPeople
    constructor(name, time, numPeople, id) {
        this.name = name
        this.time = time
        this.numPeople = numPeople
        this.id = id
    }
}

class RestaurantStore {
    @observable reservations = []
    @observable numTables = 10
    @computed get openTables() {
        return (this.numTables - this.reservations.length)
    }
    @computed get restPopulation() {
        let total = 0
        this.reservations.forEach(r => total+= r.numPeople)
        return total
    }
    @action addRes = (name, time, numPeople) => {
        this.reservations.push(new Res(name, time, numPeople))
    }
    @action CompleteRes = (id) => {
        this.reservations.find(r => r.id === id)
    }
}

export default new RestaurantStore()