import { Certificate } from "./certificate"


export const Addcertificate = () => {
    return (
        <>
            <h1 className={` font-semibold text-3xl my-1  p-[5px]`}>Certificate</h1>
            <main className="flex gap-[15px] flex-wrap ">
                <Certificate name="Network" img="src/assets/certificate.webp" />
                <Certificate name="HTML"  img="src/assets/certificate.webp" />
                <Certificate name="CSS"  img="src/assets/certificate.webp" />
                <Certificate name="Python" img="src/assets/certificate.webp" />
            </main>
        </>
    )
}