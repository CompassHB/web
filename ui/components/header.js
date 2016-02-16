var React = require('react');

var nav = React.DOM.nav;
var button = React.DOM.button;
var a = React.DOM.a;
var ul = React.DOM.ul;
var li = React.DOM.li;

var logo = require('./logo');

module.exports = function header() {
    return nav({}, [
        button({key: 'open-nav'}, 'Menu'),
        logo({key: 'logo'}),
        ul({key: 'menu'}, [
            li({key: 'who-we-are'}, [
                a({href: 'https://www.compasshb.com/who-we-are'}, 'Who We Are'),
            ]),
        ]),
    ]);
};

/*
<nav class="navbar navbar-default navbar-static-top">
    <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <a href="https://www.compasshb.com/who-we-are" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    Who We Are <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-left">
                    <li>
                        <a href="https://www.compasshb.com/who-we-are">
                            <i class="material-icons">person</i> Who We Are
                        </a>
                    </li>
                    <li>
                        <a href="https://www.compasshb.com/eight-distinctives">
                            <i class="material-icons">flag</i> 8 Distinctives
                        </a>
                    </li>
                    <li><a href="https://www.compasshb.com/what-we-believe"><i class="material-icons">library_books</i> What We Believe</a></li> </ul> </li> <li class="dropdown"> <a href="https://www.compasshb.com/kids" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ministries <span class="caret"></span></a> <ul class="dropdown-menu dropdown-menu-left"> <li><a href="https://www.compasshb.com/kids"><i class="material-icons">child_care</i> Kids Ministry</a></li> <li><a href="https://www.compasshb.com/youth"><i class="material-icons">group</i> Youth Ministry</a></li> <li><a href="https://www.compasshb.com/college"><i class="material-icons">domain</i> College Ministry</a></li> <li><a href="https://www.compasshb.com/sundayschool"><i class="material-icons">free_breakfast</i> Adult Sunday School</a></li> <li><a href="https://www.compasshb.com/fellowship"><i class="material-icons">home</i> Home Fellowship Groups</a></li> <li><a href="https://www.compasshb.com/men"><i class="material-icons">account_box</i> Mens Ministry</a></li> <li><a href="https://www.compasshb.com/women"><i class="material-icons">account_circle</i> Womens Ministry</a></li> </ul> </li> <li class="dropdown"> <a href="https://www.compasshb.com/sermons" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sermons <span class="caret"></span></a> <ul class="dropdown-menu dropdown-menu-left"> <li><a href="https://www.compasshb.com/sermons"><i class="material-icons">video_library</i> Sermons</a></li> <li><a href="https://www.compasshb.com/read"><i class="material-icons">library_books</i> Scripture of the Day</a></li> <li><a href="https://www.compasshb.com/blog"><i class="material-icons">announcement</i> Blog</a></li> <li><a href="https://www.compasshb.com/songs"><i class="material-icons">music_note</i> Songs</a></li> <li><a href="https://www.compasshb.com/events"><i class="material-icons">event</i> Events</a></li> <li><a href="https://www.compasshb.com/give"><i class="material-icons">card_giftcard</i> Give Online</a></li> </ul> </li> <li><a href="https://www.compasshb.com/ice-cream-evangelism">Ice Cream Evangelism</a></li> <li><a href="https://www.compasshb.com/search" aria-label="Search" id="toggle-search-show"><i class="material-icons">search</i></a> </li> </ul> </div>
                    </nav>
                    */