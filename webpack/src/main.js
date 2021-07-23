// js打包入口文件

import $ from 'jquery';
import './css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import tools from './js/tools';

$(function(){
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'bule');
})

class Person {
    static info = {name: 'k'}
}

console.log(Person.info)

ReactDOM.render(<h1>react dom</h1>, document.getElementById('react-dom'));

// tools.addDom();