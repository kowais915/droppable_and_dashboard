import Sidebar from "../../../components/ui/Sidebar";
const DashboardLayout = ({ children }) => {
    return (  
        <div className="flex gap-7 w-1/4">
                <Sidebar/>
                { children}
        </div>
    );
}
 
export default DashboardLayout;
