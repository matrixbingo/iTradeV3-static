import {Control,Sync} from 'gfs-react-mvc'
import TestModel from '../model/TestModel'

@Control('test')
export default class TestControl{
    constructor(){

    }

    update(){

    }
    @Sync('/test')
    queryBookTypes(data){

        return data.data
    }
    queryBookTypesError(err){
        alert(JSON.stringify(err) )
    }
    @Sync('/test')
    getBooks(data,params){
        return data.data.books[params.body.id ]
    }
    @Sync()
    updateBook(index){
        
        return {
            data:{
                index:index
            }
        }
    }
    @Sync()
    delBook(index){

        return {
            data:{
                index:index
            }
        }
    }
}