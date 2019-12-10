import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './login/login.html';

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('login', {
        path: '/login'
    });
    // this.route('signup', {
    //     path: 'signup'
    // });
});
