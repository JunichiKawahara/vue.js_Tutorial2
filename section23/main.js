Vue.component('comp-child', {
    template: '<p>This is Child Component</p>'
})
Vue.component('my-component', {
    template: '<div style="background: #ffcc00;"><p>my-component</p><p><comp-child></comp-chld></p></div>'
})
Vue.component('comp-child2', {
    template: '<p>{{ val }}</p>',
    props: ['val']
})
Vue.component('comp-child3', {
    template: '<p>リアクティブデータ:<span style="color: #ffcc00;">{{ val }}</span></p>',
    props: ['val']
})
Vue.component('comp-child4', {
    template: '<li>{{ name }} HP.{{ hp }}</li>',
    props: ['name', 'hp']
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    }
})