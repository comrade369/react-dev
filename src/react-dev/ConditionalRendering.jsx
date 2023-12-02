
function LogIn() {
    return (
        <>
            <h4>Please Log in to access info.</h4>
        </>
    );
}

function LoggedIn() {
    return (
        <>
            <h4>You successfully Logged in.</h4>
        </>
    );
}

export default function ConditionalRendering() {

    // conditional rendering using if-else statements.
    // let content;
    let isLoggedIn = true;
    // if (isLoggedIn) {
    //     content = <LoggedIn />
    // } else {
    //     content = <LogIn />
    // }

    // return (
    //     <>
    //         <h3>Conditional Rendering using if-else statements.</h3>
    //         {content}
    //     </>
    // );

    //conditional rendering using ternary operator.
    return (
        <>
            {
                isLoggedIn ? <LoggedIn /> : <LogIn />
            }
        </>
    );

    // conditional rendering using && operator.
    // return (
    //     <>
    //         {
    //             isLoggedIn && <p>If you don't want else condition, better use && operator in jsx</p>
    //         }
    //     </>
    // );
}