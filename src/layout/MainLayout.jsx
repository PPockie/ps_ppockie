import MainHeader from '../components/Nav/MainHeader';
import Intro from '../components/Content/Intro';
import About from '../components/Content/About';
import Skills from '../components/Content/Skill';
import Project from '../components/Content/Project';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  return (
    <section id='main-layout'>
      <header className='fixed w-full z-50'>
        <MainHeader></MainHeader>
      </header>
      
      <div className="container-fiuld w-full h-screen">
        <Intro></Intro>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Footer></Footer>
      </div>
    </section>
  )
}

export default MainLayout;
