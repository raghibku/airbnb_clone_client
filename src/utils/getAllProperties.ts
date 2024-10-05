export const getAllProperties = async () => {
    const res = await fetch('https://airbnb-clone-server-five.vercel.app/properties');
    const data = await res.json();
    return data;
};

