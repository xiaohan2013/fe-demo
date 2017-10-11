import { init, h } from 'snabbdom/snabbdom'
// var snabbdom = require('snabbdom')

console.log(h)


import clazz from 'snabbdom/modules/class'
import props from 'snabbdom/modules/props'
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'

// require('snabbdom/modules/class').default,
//     require('snabbdom/modules/props').default,
//     require('snabbdom/modules/style').default,
//     require('snabbdom/modules/eventlisteners').default,

var patch = init([
    clazz,
    props,
    style,
    eventlisteners
]);

var container = document.getElementById('J_container');

var noop = () => {}
var someFn = (e) => {
    console.log(e)
}

var vnode = h('div#container.two.classes', { on: { click: someFn } }, [
    h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
    ' and this is just normal text',
    h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
]);
patch(container, vnode);