export const getStaticProps = async () => {
    const res = await fetch('https://airbnb-clone-server-five.vercel.app/properties');
    const data = await res.json();

    return {
        props: {
            properties: data,
        },
        revalidate: 30, // Revalidates the static page every 30 seconds
    };
};