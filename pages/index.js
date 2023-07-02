
import Header from "../components/Header";
import LeftHandSide from "../components/LeftHandSide";
import RightHandSide from "../components/RightHandSide";

export default function Home() {
  return (
    <div>
      <Header isShow={true} />
      <main>
        <LeftHandSide />
        <RightHandSide />
      </main>
    </div>
  );
}
