import Navbar from "@/appcomponents/navBar";
import NetajiIntro from "@/appcomponents/netajiIntro";
import NetajiAbout from "@/appcomponents/netajiAbout";
import NetajiTimelineCarousel from "@/appcomponents/netajiPoliticalActivity"

const Home = () => {
  const Title = "About Summary";
  const Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ";

  return (
    <div>
      {/* <h1>Home Page</h1> */}

      {/* <Navbar/> */}

      <NetajiIntro />
      <NetajiAbout title={Title} content={Content} />
      <NetajiTimelineCarousel />
    </div>
  );
};

export default Home;
