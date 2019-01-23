import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';

@inject("GeneralStore", "RestaurantStore")
@observer
class Restaurant extends Component{
    render () {
        return (
            <div>
                <ResInput/>
                <button>Add Reservation</button>
            </div>
        )
    }
}

export default Restaurant