const getGelocalization = async (): Promise<GeolocationCoordinates> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    if (coords) {
                        resolve(coords);
                    }
                },
                (error) => reject(error)
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });
};
export default getGelocalization;
