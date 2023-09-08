



const Contact = ()=> {


    return(
        <>
        <div className="contact  mt-[850px] z-40 relative w-full h-[700px]">
                 
            <img src="images/contact_shape.png" alt="contact shape" className="w-full contact_shape h-[700px]" />
            <img src="images/contactshape.png" alt="contact shape" className="w-full mobile_contact_shape h-[700px]" />


            <div className="contact_content absolute w-full left-0 top-5 ">
                    <h2  className="font-[700] text-[45px] text-white my-8 text-center">Contact us </h2>
                    <div className="container contact_form_wrapper flex justify-between items-center mx-auto">
                          <div className="contact_left flex-col w-[58%]">
                            <textarea className="w-full p-3 h-[400px] placeholder:font-black">
                                Message
                            </textarea>
                            <input type="submit" value='Send Message' className=" bg-black mobileSubmit text-white  text-start px-5 py-2 rounded-xl cursor-pointer"/>
                          </div>

                          <div className="contact_right h-[400px] flex justify-start flex-col items-start w-[40%]">
                             <input type="text" placeholder="Name" className="w-[300px] px-3 h-[59px]"/>
                             <input type="text" placeholder="email" className="w-[300px] px-3 my-7 h-[59px]"/>
                             <input type="submit" value='Send Message' className=" bg-black deskSubmit text-white  text-start px-5 py-2 rounded-xl cursor-pointer"/>
                          </div>
                    </div>
                    </div>
        </div>
        

          <footer className="w-full h-[400px] relative">
            <img src="images/footer_shape.png" alt="footer shape" className="w-full desktop_footer_shape h-[400px]"/>
            <img src="images/mobile_footer_shape.png" alt="footer shape" className="w-full  mobile_footer_shape h-[400px]"/>
             <div className="w-full bottom-0 absolute pb-5 left-0">
                <p className="text-white text-center leading-[24px] text-[20px] font-[600]">Email Us: admin@jobrebuilder.com <br className="footer_br"/>| Tel: 123-456-7890 | San Diego, CA 92122</p>
             </div>
          </footer>


        </>
    )
}


export default Contact;