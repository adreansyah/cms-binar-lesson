import { useEffect, useState } from "react";
import { ProductService } from "./data";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PrimeReactProvider } from 'primereact/api';
// import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const DataTables = () => {
    const [product, setproduct] = useState(null);
    useEffect(() => {
        setproduct(ProductService?.getProductsData().map((item, index) => ({
            no: index + 1,
            ...item
        })))
    }, []);
    console.log(product);
    return (
        <PrimeReactProvider>
            <DataTable value={product} tableStyle={{ minWidth: '50rem' }}>
                <Column field="no" header="No." style={{ width: '5%' }} />
                <Column field="code" header="Code" style={{ width: '20%' }} />
                <Column field="category" header="Category" style={{ width: '20%' }} />
                <Column field="inventoryStatus" header="Inventory" style={{ width: '20%' }} />
            </DataTable>
        </PrimeReactProvider>
    )
}

export default DataTables;