import React from 'react';
import {Input} from "@material-tailwind/react";

function Test(props) {
    return (
        <div>
            <Input
                type="text"
                color="blue"
                size="lg"
                outline={false}
                className={"w-8"}
                placeholder="Password"
            />
        </div>
    );
}

export default Test;