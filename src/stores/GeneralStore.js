import { observable } from  'mobx'

class GeneralStore {
    @observable name
    @observable time
    @observable numPeople
}

export default new GeneralStore()