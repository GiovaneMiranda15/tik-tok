import "./App.css";
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <div className="app_video">
        <Video likes={78} messages={55} shares={24} name='@giovaneluna' description='Pulo do gato' music='Cena épica' url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z'/>
        <Video likes={53} messages={35} shares={45} name='@giovaneluna' description='Gato curioso' music='Musica animada' url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z'/>
      </div>
    </div>
  );
}

export default App;
