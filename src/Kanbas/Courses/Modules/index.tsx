import ModuleList from "./List";
import ModuleStatus from "./Status";
function Modules() {
  return (
    <div>
   
      <div className="module-row">
        <ModuleList />
        <ModuleStatus/>
      </div>
    </div>
  );
}
export default Modules;
