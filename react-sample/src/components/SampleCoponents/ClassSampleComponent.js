import React from 'react';

import PropTypes from 'prop-types';

import Header from './ClassSampleHeaderComponent';

class Content extends React.Component {
    
    render(){
        return (
            <div>
                <h2>{this.props.say}</h2>
                <p>created by {this.props.name}</p>
            </div>
        );
    }

} // end Content

// https://velopert.com/1130
class ClassSampleComponent extends React.Component {

    /*
        1. create component 
            - constructor -> componentWillMount -> render -> componentDidMount
            - [1] -> [2] -> [3] -> [4]
        
        2. drop component 
            - componentWillUnmount 
            - [F]
        
        3. state changed, rerendering ... 
            - componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
            - [R1] -> [R2] -> [R3] -> [3] -> [R4]

    */
    
    constructor(props) { // [1]
        
        super(props);

        console.log("[1] init ... constructor");

        this.state = {
            
            message : props.name,
            isonline : '1',
            ontest : false,

        }
        
        //this.isonline = '1';
        
    } // end constructor

    componentWillMount(){ // [2]

        console.log("[2] before dom ... componentWillMount"); // 컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.
        
    }

    componentWillReceiveProps(nextProps){ // [R1]
        
        if (this.state.ontest) console.log("[R1] get new props ... componentWillReceiveProps: " + JSON.stringify(nextProps)); // 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.

    }

    shouldComponentUpdate(nextProps, nextState){ // [R2]
        
        if (this.state.ontest) console.log("[R2] confirm rerendering or not ... shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState)); // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.

        return true;

    }

    componentWillUpdate(nextProps, nextState){ // [R3]
        
        if (this.state.ontest) console.log("[R3] before component update ... componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState)); // 컴포넌트가 업데이트 되기 전에 실행됩니다.

    }

    render() { // [3]
        
        console.log("[3] rendering ... render");

        return  (
            <div>
                <Header/>
                <Content name={this.props.name} say={this.props.say} />
                {this.props.name}<br />
                Message : {this.state.message}<br />
                <input type="text" value={this.state.message} onChange={(e) => this.handleUpdate(e)} />::{this.state.isonline}
            </div>
        
        ); // end return
        
    } // end render

    componentDidMount(){ // [4] after first rendering
        
        console.log("[4] after first rendering ... componentDidMount"); // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.

        // document.addEventListener('visibilitychange',this.handleVisibilitychange);

        this.onVisibilityChange( ( visible ) => { 

            console.log('---> [1]',visible,this.state.isonline)

            this.setState( { ...this.state, isonline : visible ? '1' : '0' } );

            //setIsonline(visible ? '1' : '0'); 

        });
        
    }

    componentDidUpdate(prevProps, prevState){ // [R4]

        if (this.state.ontest) console.log("[R4] after component update ... componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState)); // 컴포넌트가 리렌더링을 마친 후 실행됩니다.

    }

    componentWillUnmount(){ // [F]
        
        console.log("[F] after drop component ... componentWillUnmount"); // 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.

    }

    // custom funcion ... 

    handleVisibilitychange = ( data ) => {

        console.log( this.state, data )

    }

    handleUpdate(event) {

        this.setState( { ...this.state, message : event.currentTarget.value } );

    } // end handleUpdate

    onVisibilityChange = (callback) => {
        
        var visible = true;
    
        if (!callback) {
            throw new Error('no callback given');
        }
    
        function focused() {
            if (!visible) {
                callback(visible = true);
            }
        }
    
        function unfocused() {
            if (visible) {
                callback(visible = false);
            }
        }
    
        // Standards:
        if ('hidden' in document) {
            document.addEventListener('visibilitychange',
                function() {(document.hidden ? unfocused : focused)()});
        }
        if ('mozHidden' in document) {
            document.addEventListener('mozvisibilitychange',
                function() {(document.mozHidden ? unfocused : focused)()});
        }
        if ('webkitHidden' in document) {
            document.addEventListener('webkitvisibilitychange',
                function() {(document.webkitHidden ? unfocused : focused)()});
        }
        if ('msHidden' in document) {
            document.addEventListener('msvisibilitychange',
                function() {(document.msHidden ? unfocused : focused)()});
        }
        // IE 9 and lower:
        if ('onfocusin' in document) {
            document.onfocusin = focused;
            document.onfocusout = unfocused;
        }
        // All others:
        window.onpageshow = window.onfocus = focused;
        window.onpagehide = window.onblur = unfocused;
    
    } // end onVisibilityChange

} // end ClassSampleComponent

ClassSampleComponent.propTypes = {
    name : PropTypes.string.isRequired,
}

ClassSampleComponent.defaultProps = {
    say : 'I am a class component!!',
}

export default ClassSampleComponent;
