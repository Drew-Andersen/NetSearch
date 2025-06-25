import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import LogTable from "../../components/LogTable";
import Alerts from "../Alerts";

import './dashboard.css';

export default function Dashboard() {
    const [logs, setLogs] = useState([]);
    const [sortedConfig, setSortedConfig] = useState({ key: 'timestamp', direction: 'desc'});

    useEffect(() => {
        fetch('http://localhost:3001/api/logs/search?q=login&severity=ERROR')
            .then((res) => res.json())
            .then((data) => {
                setLogs(data.logs)
            })
            .catch((err) => console.error('Failed to load logs:', err))
    }, []);

    const sortedLogs = [...logs].sort((a, b) => {
        if (!sortedConfig.key) return 0;

        const aVal = a[sortedConfig.key];
        const bVal = b[sortedConfig.key];

        if (aVal < bVal) return sortedConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortedConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    const handleSearch = async (filters) => {
        const { query, startDate, endDate, severity } = filters

        const params = new URLSearchParams();
        if (query) params.append('q', query);
        if (severity && severity !== 'all') params.append('severity', severity);
        if (startDate && endDate) {
            params.append('startDate', startDate);
            params.append('endDate', endDate);
        }

        try {
            const res = await fetch('http://localhost:3001/api/logs/search?${params}');
            const data = await res.json();
            setLogs(data.logs);
        } catch (err) {
            console.log('Search failed:', err);
        }

        console.log(filters);
    }

    const handleSort = (key) => {
        setSortedConfig(prev => {
            if (prev.key === key) {
                return {
                    key,
                    direction: prev.direction === 'asc' ? 'desc' : 'asc'
                }
            } else {
                return { key, direction: 'asc' };
            }
        })
    }

    return(
        <>
            <div className="dashboard">
                <div className="mt-5 w-100">
                    <h1 className="text-primary my-4"><strong>NetSearch Dashboard</strong></h1>
                    <SearchBar onSearch={handleSearch } />
                    <Alerts />
                    <LogTable logs={sortedLogs} onSort={handleSort} sortedConfig={sortedConfig} />
                </div>
            </div>
        </>
    )
}