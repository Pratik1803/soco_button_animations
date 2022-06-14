import Add_post from "./animations/add_post/Add_Post";
import Hover_animation from "./animations/hover_animation/Hover_animation";
import UploadButton from "./animations/upload_button/Upload_btn";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.app}>
      {/* <Add_post/> */}
      {/* <UploadButton/> */}
      <Hover_animation/>
    </div>
  );
}

export default App;
