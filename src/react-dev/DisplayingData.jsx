
const god = {
    name: "Lord Hanuman",
    imgUrl: "https://w0.peakpx.com/wallpaper/996/653/HD-wallpaper-lord-hanuman-praise-statue-lord-hanuman-praise-statue-god-bajrangbali-jai-shree-ram.jpg",
    imgSize: 90,
};

export default function Profile() {

    return (
        <>
            <h1>{god.name}</h1>
            <img 
                src={god.imgUrl} 
                alt={"The photo of " + god.name}
                style={{
                    height: god.imgSize,
                    width: god.imgSize,
                }}
                />
        </>
    );
}