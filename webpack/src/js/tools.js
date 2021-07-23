
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const tools = {
    addDom: () => {
        ReactDOM.render(<h1>react dom 2</h1>, document.getElementById('react-dom-2'));
    },

    changeBg: (node) => {
        $(`#${node}`).css('background', 'red')
    }
}
tools.addDom();