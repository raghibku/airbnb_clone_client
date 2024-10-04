export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/properties');
    const data = await res.json();

    return {
        props: {
            properties: data,
        },
        revalidate: 30, // Revalidates the static page every 30 seconds
    };
};