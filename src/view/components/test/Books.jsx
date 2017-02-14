import React, { Component /*,PropTypes*/} from 'react'
import {Row,Col,Table,Tr,Td,Th,Button} from 'eagle-ui'
// import {} from 'gfs-react-redux-twoway-binding'
import {View} from 'gfs-react-mvc'
import TestControl from '../../../controller/TestControl'
import '../../../utils/function'
import Immutable from 'immutable'

@View(TestControl)
export default class Books extends Component{

    constructor(props){
        super(props)
    }

    checkUpdatePanel(index){
        //this.props.updateBook(index)
        if(index>=0){
            
            this.manualChange('book',Immutable.fromJS(this.props.books[index] ) )
        }
        this.manualChange('updateIndex',index )
    }

    getUpdatePanel(item){
        let index = this.props.testmodel.get('updateIndex')
        return (
            <Tr key={item.name}>
                <Td><input className='test-input' valueLink={this.binding('book.name')} /></Td>
                <Td><input className='test-input' valueLink={this.binding('book.author')} /></Td>
                <Td><input className='test-input' valueLink={this.binding('book.press')} /></Td>
                <Td><input className='test-input' valueLink={this.binding('book.price')} /></Td>
                <Td><input className='test-input' valueLink={this.binding('book.date')} /></Td>
                <Td><input className='test-input' valueLink={this.binding('book.description')} /></Td>
                <Td><Button onClick={()=>{
                    this.props.updateBook(index )
                }}>保存</Button>  <Button onClick={this.checkUpdatePanel.bind(this,-1)}>取消</Button></Td>
            </Tr>
        )
    }
    getDataPanel(item,index){
        
        return (
            <Tr key={item.name}>
                <Td>{item.name}</Td>
                <Td>{item.author}</Td>
                <Td>{item.press}</Td>
                <Td>{item.price}</Td>
                <Td>{item.date}</Td>
                <Td>{item.description || '无'}</Td>
                <Td><Button onClick={this.props.delBook.bind(this,index)}>删除</Button>  <Button onClick={this.checkUpdatePanel.bind(this,index)}>修改</Button></Td>
            </Tr>
        )  
    }

    render(){
        const updateIndex = this.props.testmodel.get('updateIndex')
        return (

            <Row>
                <Col>
                    <Table>
                        <thead>
                        <Tr>
                            <Th clickCallback={()=>{}}>书名</Th>
                            <Th clickCallback={()=>{}}>作者</Th>
                            <Th clickCallback={()=>{}}>出版社</Th>
                            <Th clickCallback={()=>{}}>价格</Th>
                            <Th clickCallback={()=>{}}>出版日期</Th>
                            <Th clickCallback={()=>{}}>简介</Th>
                            <Th clickCallback={()=>{}} style={{
                                width:'15%'
                            }}>操作</Th>
                        </Tr>
                        </thead>
                        <tbody>
                            {
                                this.props.books.map((item,index)=>{
                                    return updateIndex ===index ? this.getUpdatePanel(item ):this.getDataPanel(item,index)
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}