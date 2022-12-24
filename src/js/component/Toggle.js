import React, { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);


    const handleClick = () => {
        setToggle(!toggle);
    };


    return (
        <div>
            <button onClick={handleClick} class="btn btn-primary mb-5">Toggle State</button>

            {toggle ?
                <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
                </ul>
                :
                <></>
            }
        </div>
    )

}

export default Toggle;