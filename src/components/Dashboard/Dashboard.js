import React from 'react';
import Alert from './Alert';
import Stats from './Stats';

function Dashboard() {
    return (
        <div className="dashboard">
            <Alert />
            <Stats />
        </div>
    );
}

export default Dashboard;
