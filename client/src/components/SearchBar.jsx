import { useState, useEffect, useRef } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [severity, setSeverity] = useState('');

    const queryInfoRef = useRef(null);

    useEffect(() => {
        queryInfoRef.current?.focus();
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ 
            query, 
            startDate: startDate ? startDate.toISOString().split('T')[0] : '', 
            endDate: endDate ? endDate.toISOString().split('T')[0] : '', 
            severity 
        });
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="row g-2 mb-4">
                <div className="col-md-6">
                    <input 
                        ref={queryInfoRef}
                        type="text" 
                        className="form-control" 
                        placeholder="Search logs (ex. error, login, 403)..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="col-md-2 d-flex justify-content-center align-items-center gap-2">
                    <DatePicker 
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        customInput={
                            <button type="button" className="btn btn-outline-secondary w-100">
                                <FaCalendarAlt className="me-2" />
                                {startDate ? startDate.toLocaleDateString() : "Start Date"}
                            </button>
                        }
                    />
                </div>

                <div className="col-md-2 d-flex justify-content-center align-items-center gap-2">
                    <DatePicker 
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        customInput={
                            <button type="button" className="btn btn-outline-secondary w-100">
                                <FaCalendarAlt className="me-2" />
                                {endDate ? endDate.toLocaleDateString() : "End Date"}
                            </button>
                        }
                    />
                </div>

                <div className="col-md-2">
                    <select 
                        className="form-select"
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                    >
                        <option value="all">All Severities</option>
                        <option value="INFO">Info</option>
                        <option value="WARNING">Warning</option>
                        <option value="ERROR">Error</option>
                        <option value="CRITICAL">Critical</option>
                    </select>
                </div>

                <div className="col-md-6 mx-auto">
                    <button type="submit" className="btn btn-primary w-100">
                        Search
                    </button>
                </div>
            </form>
        </>
    )
}