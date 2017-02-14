import React, { Component /*,PropTypes*/} from 'react'
import { Redirect, Router, Route } from 'react-router'
import {View,page} from 'gfs-react-mvc'
import History from 'history/lib/createHashHistory'
import TestContainer from './Test'
import TestControl from '@controller/TestControl'
import {Grid,Row,Col} from 'eagle-ui'

@View(TestControl)
class Index extends Component {
    constructor(props) {
        super(props)
        
    }

    render(){

        return (
            <Grid fluid>
                <Row>
                    <Col style={{
                        textAlign:'center'
                    }}><a className="eg-btn button" href="#test">跳转到测试页面</a></Col>
                </Row>
                
            </Grid>
        )
    }
}

class AppRouter extends Component {

    constructor(props) {
        super(props)
        // Opt-out of persistent state, not recommended.
        this.history = new History({
            queryKey: false
        })
    }

    static defaultProps={

    }
    /**
     * 页面路由总览，children为外接做入口，外接入口即为AppRouter
     */
    render() {
        return (
            <div>
                <Router history={this.history}>
                    <Route path="/index" component={Index} />
                    <Route path="/test" component={TestContainer} />
                    <Redirect from="/" to="/index" />
                </Router>
            </div>
        )
    }
}

page(AppRouter )