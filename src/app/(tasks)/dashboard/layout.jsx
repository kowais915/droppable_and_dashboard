import Sidebar from "../../../components/ui/Sidebar";
const DashboardLayout = ({ children }) => {
    return (  
        <div className="flex gap-7 ">
                <Sidebar/>
                <div className="w-full">{ children}</div>
        </div>
    );
}
 
export default DashboardLayout;
