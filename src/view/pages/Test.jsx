import React, { Component /*,PropTypes*/} from 'react'
import {View,page} from 'gfs-react-mvc'

import TestControl from '@controller/TestControl'
import HeaderCompoent from '@component/test/Header'
import FooterCompoent from '@component/test/Footer'
import TestCompoent from '@component/test/Test'
import '../styles/test.less'

@View(TestControl)
export default class Test extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <HeaderCompoent />
                <TestCompoent {...this.props} />
                <FooterCompoent />
            </div>
        )
    }
}

let url = window.location.hash
if(url.match('#/')==null && window.location.href.match('index')==null ){
    page(Test )
}
