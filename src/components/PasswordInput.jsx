// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange(){
        console.log("Entering password...")
    }
    return(
        <>
        <div className="input">
            <input  onChange={handleChange} type="password" placeholder="Enter Your Password"/>
        </div>     
        </>
    )
}

export default PasswordInput;