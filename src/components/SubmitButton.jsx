// Code SubmitButton Component Here

function SubmitButton (){
    function handleEnter(){
        console.log("Mouse Entering");
    }
    function handleLeave(){
        console.log("Mouse Exiting");
    }
    return(
        <>
        <div className="submit">
            <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Submit Password</button>
            </div>
        </>
    )
}

export default SubmitButton;