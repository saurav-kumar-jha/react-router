


export const Addskill = () => {
    return (
        <>
            <h1 className={` font-semibold text-3xl my-1  p-[5px]`} >Skill</h1>
            <section className="h-[120px] w-[90%] border rounded-md border-transparent mx-3 my-2 flex flex-wrap items-center ">
                <Skill img="java.jfif" name="JAVA" />
                <Skill img="js.png" name="JAVASCRIPT" />
            </section >
        </>
    )
}

export const Skill = (props)=>{
    return (
        <>       
            <img className="rounded-md cursor-pointer mx-2 my-1.5 h-[110px] w-[110px] object-cover " title={props.name} src={props.img} alt="" />
        </>
    )
}