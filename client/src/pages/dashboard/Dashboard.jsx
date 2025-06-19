import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import LogTable from "../../components/LogTable";

import './dashboard.css';

export default function Dashboard() {
    const [logs, setLogs] = useState([]);

    const handleSearch = async (filters) => {
        // Add startDate, endDate to the filters
        const { query, severity } = filters

        const mockLogs = [
            {
                timestamp: new Date().toISOString(),
                host: 'web-server-1',
                severity: severity === 'all' ? 'INFO' : severity,
                message: `Mock log matching "${query}"`,
            },
        ];
        setLogs(mockLogs)
    }

    return(
        <>
            <div className="dashboard">
                <div className="mt-5 w-100">
                    <h1 className="text-primary my-3">NetSearch Dashboard</h1>
                    <SearchBar onSearch={handleSearch } />
                    <LogTable logs={logs} />
                </div>
            </div>
        </>
    )
}