// import _ from 'lodash';
// import printMe from './print';
// import './style.css';
import {cube} from './math';

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode');
}

function component(){
    // var element = document.createElement('div');
    // var btn = document.createElement('button');
    var element = document.createElement('pre');

    // element.innerHTML = _.join(['Hello', 'webpack'], '');

    // btn.innerHTML = 'click me and check the console!';
    // btn.onclick = printMe;
    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    // element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
// let element = component();
// document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}