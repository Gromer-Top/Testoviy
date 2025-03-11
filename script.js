const videoElement = document.getElementById('videoElement');

        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                videoElement.srcObject = stream;
            } catch (err) {
                console.error("Error accessing the camera: ", err);
                alert("Unable to access the camera. Please check your browser permissions.");
            }
        }

        startCamera(); // Call the function to start the camera
