export const getAllProperties = async () => {
    const res = await fetch('http://localhost:5000/properties');
    const data = await res.json();
    return data;
};

