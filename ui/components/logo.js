var React = require('react');
var a = React.DOM.a;
var img = React.DOM.img;

var styles = {
    img: {
        padding: '15px 15px',
        height: 50,
    },
};

module.exports = function logo(props) {
    return a({key: props.key, href: '/'}, [
        img({
            src: 'https://www.compasshb.com/CBC-HB-logo.png',
            alt: 'Compass Bible Church Huntington Beach',
            style: styles.img,
        }),
    ]);
};
