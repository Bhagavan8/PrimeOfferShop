import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    // Handle image file selection
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle form submission to upload image
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:8080/api/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResult(response.data);  // Display analysis result
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept="image/*" />
                <button type="submit">Upload Image</button>
            </form>

            {result && (
                <div>
                    <h3>Image Analysis Result</h3>
                    <p>Colors: {result.colors.join(', ')}</p>
                    <p>Height: {result.height} cm</p>
                    <p>Weight: {result.weight} kg</p>
                    <p>BMI: {result.bmi}</p>
                    <p>Matched Dresses: {result.matchedDresses.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
