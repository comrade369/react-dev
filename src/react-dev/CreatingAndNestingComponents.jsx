

function Button() {
    
    return (
        <button>This is a button component.</button>
    );
}

export default function MyApp() {
    
    return (
        <>
            <h1>Welcome to MyApp Component</h1>
            <h3>This component nests Button component</h3>
            <h4>Button component placed below</h4>
            <Button />
        </>
    );
}