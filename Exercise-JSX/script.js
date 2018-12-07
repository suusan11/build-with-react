import React from 'react';

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

ReactDOM.render(
    <div>
        <a href="#" className="button">button</a>
        <div>{ipsumText}</div>
    </div>,
    document.getElementById('impl')
);