import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const content = {
    1: "content1=Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut fugiat dolorum unde, dicta beatae alias consequatur sunt tempore iusto distinctio! Tempora repellat fuga, eveniet vero velit totam corrupti nam aliquam?",
    2: "content2=Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero tempore obcaecati sunt dignissimos nobis, doloribus officia nesciunt veniam provident tempora nam dolores enim. At, enim repudiandae? Vitae, magni aut?",
    3: "content3=Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit molestias id ipsa reprehenderit assumenda voluptate harum non odio voluptatibus vel perspiciatis similique laboriosam, corrupti consequuntur nobis repudiandae earum quidem excepturi.",
    4: "content4=Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odio laboriosam incidunt. Provident reiciendis quidem quia, ut earum pariatur cum at quaerat nam consequuntur, doloribus voluptates est exercitationem praesentium."
  }
 const currentState=Number (localStorage.getItem("activeTab")); 
   const [activeTab, setActiveTab] = useState(currentState);
localStorage.setItem("activeTab",activeTab);

console.log(currentState);





  function cont(activeTab) {
    switch (activeTab) {
      case 1:
        return <p>{content[1]}</p>;

      case 2:
        return <p>{content[2]}</p>;

      case 3:
        return <p>{content[3]}</p>;

      case 4:
        return <p>{content[4]}</p>;

      default:
        return null;
    }
  }
  return (
    <div className='site'>
<div  className='wrap'>
      <button className={activeTab === 1 ? "active" : "" }
      onClick={() => setActiveTab(1)}>home</button>

      <button className={activeTab === 2 ? "active" : "" } onClick={() => setActiveTab(2)}>about </button>

      <button className={activeTab === 3 ? "active" : "" } onClick={() => setActiveTab(3)}>contact </button>

      <button className={activeTab === 4 ? "active" : "" }  onClick={() => setActiveTab(4)}>products </button>
</div>
      {cont(activeTab)}
    </div >

  );

}

export default App;
