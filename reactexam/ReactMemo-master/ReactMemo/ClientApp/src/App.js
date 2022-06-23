import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { HelloComponent } from './components/Demos/HelloComponent';
import { StyleAttribute } from './components/Demos/StyleAttribute';
import { ClassNameDemo } from './components/Demos/ClassNameDemo/ClassNameDemo';
import MyComponent from './components/Demos/MyComponent';
import { PropsDemo } from './components/Demos/PropsDemo/PropsDemo';
import { PropsChildrenDemo } from './components/Demos/PropsChildrenDemo/PropsChildrenDemo';
import { DestructuringAssignmentDemo } from './components/Demos/DestructuringAssignmentDemo/DestructuringAssignmentDemo';
import { StateDemo } from './components/Demos/StateDemo/StateDemo';
import { StateObjectLiteral } from './components/Demos/StateObjectLiteral/StateObjectLiteral';
import { OnClickDemo } from './components/Demos/OnClickDemo/OnClickDemo';
import InlineStyle from './components/Demos/InlineStyles/InlineStyles';
import './custom.css'
import { OneWayBinding } from './components/Demos/OneWayBinding/OneWayBinding';
import { MapFunctionDemo } from './components/Demos/MapFunctionDemo/MapFunctionDemo';
import { MapFunctionBookList } from './components/Demos/MapFunctionBookList/MapFunctionBookList';
import StateDescription from './components/Demos/StateDescription/StateDescription';
import OnClickEventHandler from './components/Samples/OnClickEventHandler';
import FetchApiPractice from './components/Samples/FetchApiPractice';
import TextBoxOnChangeEventHandler from './components/Samples/TextBoxOnChangeEventHandler';
import ReactFragmentDemo from './components/Samples/ReactFragmentDemo';
import FunctionStateDemo from './components/Samples/FunctionStateDemo';
import UseEffectDemo from './components/Samples/UseEffectDemo';
import UseEffectFetchApi from './components/Samples/UseEffectFetchApi';
import TodoListInMemory from './components/TodoListInMemory';
import { PropsTypesDemo } from './components/Demos/PropsTypesDemo/PropsTypesDemo';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path="/UseEffectFetchApi" component={UseEffectFetchApi} />
                <Route path='/FunctionStateDemo' component={FunctionStateDemo} />
                <Route path="/UseEffectDemo" component={UseEffectDemo} />
                <Route path='/hellocomponent' component={HelloComponent} />
                <Route path='/StyleAttribute' component={StyleAttribute} />
                <Route path="/ClassNameDemo" component={ClassNameDemo} />
                <Route path="/MyComponent" component={MyComponent} />
                <Route path="/PropsDemo" component={PropsDemo} />
                <Route path="/PropsChildrenDemo" component={PropsChildrenDemo} />
                <Route path='/PropsTypesDemo' component={PropsTypesDemo} />
                <Route path='/DestructuringAssignmentDemo' component={DestructuringAssignmentDemo} />
                <Route path='/StateDemo' component={StateDemo} />
                <Route path="/StateDescription" component={StateDescription} />
                <Route path='/StateObjectLiteral' component={StateObjectLiteral} />
                <Route path='/OnClickDemo' component={OnClickDemo} />
                <Route path="/OnClickEventHandler" component={OnClickEventHandler} />
                <Route path='/InlineStyles' component={InlineStyle} />
                <Route path='/TodoListInMemory' component={TodoListInMemory} />
                <Route path='/OneWayBinding' component={OneWayBinding} />
                <Route path='/MapFunctionDemo' component={MapFunctionDemo} />
                <Route path='/MapFunctionBookList' component={MapFunctionBookList} />
                <Route path='/FetchApiPractice' component={FetchApiPractice} />
                <Route path='/TextBoxOnChangeEventHandler' component={TextBoxOnChangeEventHandler} />
                <Route path='/ReactFragmentDemo' component={ReactFragmentDemo} />
            </Layout>
        );
    }
}
