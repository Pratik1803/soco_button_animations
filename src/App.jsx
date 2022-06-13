import Add_post from "./animations/add_post/Add_Post";
import ButtonHover from "./animations/button_hover/ButtonHover";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.app}>
      {/* <Add_post/> */}
      <ButtonHover/>
    </div>
  );
}

export default App;
