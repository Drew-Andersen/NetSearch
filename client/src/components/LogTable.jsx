export default function LogTable ({ logs, onSort, sortedConfig }) {
    return(
        <>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                        <tr>
                            <th 
                                onClick={() => onSort('timestamp')} style={{ cursor: 'pointer' }}
                            >
                                Timestamp {sortedConfig.key === 'timestamp' ? (sortedConfig.direction === 'asc' ? '↑' : '↓') : ''}
                            </th>
                            <th>Host</th>
                            <th>Serverity</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.length === 0 ? (
                            <tr>
                                <td colSpan='4' className="text-center">No results found</td>
                            </tr>
                        ) : (
                            logs.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.timestamp}</td>
                                    <td>{log.host}</td>
                                    <td>{log.severity}</td>
                                    <td>{log.message}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}