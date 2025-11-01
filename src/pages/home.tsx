import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    <div className="underline mx-5">App</div>
    <Link to="/pomodoro">Go to Pomodoro</Link>
    </>

  )
}

export default Home;