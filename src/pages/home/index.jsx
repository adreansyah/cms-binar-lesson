import BarChart from "../../components/dashboard/barchart";
import DataTables from "../../components/dashboard/datatable";

const Home = () => {
    return (
        <div className="d-flex gap-5 flex-column">
            <BarChart />
            <DataTables />
        </div>
    )
}

export default Home;