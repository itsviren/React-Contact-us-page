import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const MainContent = () => {
  return (
        <div className="mainContent flex flex-col lg:flex-row lg:pt-20 pt-10 px-10 lg:justify-around">
            <LeftContent className="justify-self-center w-1/2"></LeftContent>
            <RightContent className="justify-self-center  w-1/2"></RightContent>
            
        </div>
  )
}

export default MainContent