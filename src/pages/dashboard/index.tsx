import ModalDisplay from "../../components/modal/modal";
import { Dashboard } from "../../components/sectionDashboard/section_dash";
import { Main } from "../../style/main/style";

export default function MainDashboard() {
  return (
    <Main>
      <Dashboard />
      <ModalDisplay />
    </Main>
  );
}
