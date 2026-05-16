  import { useState } from "react";
  import Button from "./Button";
  import { MdOutlineMessage } from "react-icons/md";
  import { IoCall } from "react-icons/io5";
  import { IoMdMail } from "react-icons/io";





  const LeftContent = () => {

    const [savedData, setSavedData] = useState({
      name: "",
      email: "",
      text: ""
    })

    const onSubmit = (event) => {

      event.preventDefault();

      const dataname = event.target.name.value;
      const dataemail = event.target.email.value;
      const datatext = event.target.text.value;

      // Save to localStorage
      localStorage.setItem("name", dataname)
      localStorage.setItem("email", dataemail)
      localStorage.setItem("text", datatext)

      // Get back from localStorage
      const savedName = localStorage.getItem("name")
      const savedEmail = localStorage.getItem("email")
      const savedText = localStorage.getItem("text")

      // Save in state
      setSavedData({
        name: savedName,
        email: savedEmail,
        text: savedText
      })

      alert('Data Saved Successfully')
    }



    return (
        <div className="leftContent">
          <div className="button_group flex lg:gap-8 gap-3  pb-3 lg:flex-row flex-col">
            
            <Button 
            text='VIA SUPPORT CHAT' 
            icon={<MdOutlineMessage color="white" />}
            classesName="flex flex-row justify-center items-center gap-2 bg-black text-white px-10 py-2 rounded "
            ></Button>
            
            <Button 
            text='VIA CALL' 
            icon={<IoCall color="white" />}
            classesName="flex flex-row justify-center items-center gap-2 bg-black text-white px-10 py-2 rounded"
            ></Button>
          </div>
        
          <div className="single_button">
                      
            <Button 
            text='VIA EMAIL FORM' 
            icon={<IoMdMail color="black" />}
            classesName="flex flex-row justify-center items-center gap-2 bg-white text-black border-1 border-black w-full py-2 rounded justify-center"
            ></Button>
          </div>
          
          <div className="form pt-7 pb-7">
            <form action="" onSubmit={onSubmit}>
              <div className="form-control flex flex-col w-full relative pt-7">
                <label htmlFor="name" className="absolute top-[15px] bg-white left-[20px] px-1 font-semibold">Name</label>
                <input 
                  name="name"
                  className=" px-3 border-[0.5px] rounded border-black h-[45px]" 
                  type="text"/>
              </div>
              <div className="form-control flex flex-col w-full relative pt-7">
                <label htmlFor="email" className="absolute top-[15px] bg-white left-[20px] px-1 font-semibold">E-Mail</label>
                <input 
                  name="email"
                  className=" px-3 border-[0.5px] rounded border-black h-[45px]" 
                  type="email"/>
              </div>
              <div className="form-control flex flex-col w-full relative pt-7">
                <label htmlFor="name" className="absolute top-[15px] bg-white left-[20px] px-1 font-semibold">Text</label>
                <textarea 
                  name="text"
                  className="px-3 pt-2 border-[0.5px] rounded border-black h-[120px]" 
                  type="text"/>
              </div> 
              <div className="submitButton pt-6 flex justify-end">
                          <Button 
                            text='SUBMIT' 
                            
                            classesName="flex flex-row justfy-center items-center gap-2 bg-black text-white border-1 border-black px-10 py-2 rounded justify-center"
                            ></Button>
              </div>                       
            </form>

          {/* Display Saved Data */}
          <div className="pt-6">

            <p>Name: {savedData.name}</p>
            <p>Email: {savedData.email}</p>
            <p>Text: {savedData.text}</p>

          </div>


          </div>
        </div>
    )
  }

  export default LeftContent