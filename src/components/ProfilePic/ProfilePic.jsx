import React, { useState } from "react";
import "./App.css";

function UploadPicture() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);
            } else {
                setFile(null);
                setError("Please select an image file (png or jpg)");
            }
        }
    };

    return (
        <div className="App">
            <form>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>Upload Image</span>
                </label>
            </form>
        </div>
    );
}

export default UploadPicture;