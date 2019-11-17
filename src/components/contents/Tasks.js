import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
    console.log("change", newValue);
}
const tasks = () => {
    return (
        <div>
            <AceEditor
                mode="sass"
                theme="monokai"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
            />
            tasks page!!
        </div>
    )
};

export default tasks;
