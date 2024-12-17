type button = {
text :string
}

function Button(props:button){

    return(
        <>

            <button className="w-[170px] h-[50px] bg-orange-500 rounded-3xl my-3 text-white">{props.text}</button>

        </>
    )
}
export default Button