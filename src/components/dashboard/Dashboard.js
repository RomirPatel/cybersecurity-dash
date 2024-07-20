import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Dashboard.css'; // Import custom CSS for dashboard styling
import Chart from './Chart'; // Import the LineChart component
import PieChart from './PieChart'; // Import the PieChart component

const Dashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    // Dummy data for various sections
    const newsItems = [
        { title: 'New Cybersecurity Threat Detected', content: 'Details about the new threat and how to protect yourself.' },
        { title: 'Latest Cybersecurity Trends', content: 'An overview of the latest trends in cybersecurity.' },
        { title: 'Upcoming Security Webinar', content: 'Join our webinar to learn more about securing your systems.' },
    ];

    const recentActivities = [
        { activity: 'User login from IP: 192.168.1.1', time: '2 minutes ago' },
        { activity: 'Failed login attempt from IP: 10.0.0.2', time: '10 minutes ago' },
        { activity: 'New device registered', time: '30 minutes ago' },
    ];

    const threatIntelligence = [
        { title: 'Critical Vulnerability in XYZ Software', content: 'Patch available. Update ASAP to avoid exploitation.' },
        { title: 'New Ransomware Campaign', content: 'Details on new ransomware and mitigation steps.' },
        { title: 'Phishing Attack Trends', content: 'Recent trends in phishing attacks and prevention tips.' },
    ];

    const systemHealth = {
        cpuUsage: '45%',
        memoryUsage: '60%',
        diskSpace: '20% used',
    };

    const attackMapData = [
        { country: 'USA', attacks: 120 },
        { country: 'China', attacks: 90 },
        { country: 'Russia', attacks: 60 },
        { country: 'Germany', attacks: 40 },
    ];

    const vulnerabilityList = [
        { name: 'CVE-2024-12345', severity: 'Critical', status: 'Unpatched' },
        { name: 'CVE-2024-67890', severity: 'High', status: 'Patched' },
        { name: 'CVE-2024-11223', severity: 'Medium', status: 'Unpatched' },
    ];

    const complianceStatus = [
        { standard: 'GDPR', status: 'Compliant' },
        { standard: 'HIPAA', status: 'Non-compliant' },
    ];

    const incidentResponseTime = '2 hours since last incident';

    const attackVectorAnalysis = [
        { vector: 'Phishing', count: 45 },
        { vector: 'Malware', count: 30 },
        { vector: 'Insider Threat', count: 15 },
    ];

    const threatActorProfiles = [
        { name: 'APT28', description: 'Russian threat actor group known for cyber espionage.' },
        { name: 'DarkSide', description: 'Ransomware group known for high-profile attacks.' },
    ];

    const dataBreachAlerts = [
        { alert: 'Data breach at Company A', details: 'Exposed 1 million records.' },
        { alert: 'Data breach at Company B', details: 'Exposed 500,000 records.' },
    ];

    return (
        <Container fluid className={`dashboard-container ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <Row noGutters>
                {/* Sidebar */}
                <Col md={2} className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
                    <div className="sidebar-content">
                        <Form className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Search..."
                            />
                        </Form>

                    </div>
                </Col>

                {/* Main Content */}
                <Col md={10} className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                    <Row>
                        {/* News Section */}
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 news-card">
                                <Card.Header>Latest News</Card.Header>
                                <Card.Body>
                                    {newsItems.map((news, index) => (
                                        <div key={index} className="news-item mb-3">
                                            <Card.Title>{news.title}</Card.Title>
                                            <Card.Text>{news.content}</Card.Text>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Threat Intelligence Section */}
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 threat-card">
                                <Card.Header>Threat Intelligence</Card.Header>
                                <Card.Body>
                                    {threatIntelligence.map((item, index) => (
                                        <div key={index} className="threat-item mb-3">
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.content}</Card.Text>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Statistics Section */}
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 stats-card">
                                <Card.Header>Statistics</Card.Header>
                                <Card.Body>
                                    <div className="statistics">
                                        <p>Total Alerts: <span className="stat-value">123</span></p>
                                        <p>Active Incidents: <span className="stat-value">7</span></p>
                                        <p>System Health:
                                            <span className="stat-value">CPU: {systemHealth.cpuUsage},
                                            Memory: {systemHealth.memoryUsage},
                                            Disk Space: {systemHealth.diskSpace}</span>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Recent Activities Section */}
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 activities-card">
                                <Card.Header>Recent Activities</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        {recentActivities.map((activity, index) => (
                                            <li key={index} className="activity-item mb-2">
                                                <p>{activity.activity}</p>
                                                <small>{activity.time}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Attack Map Section */}
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 attack-map-card">
                                <Card.Header>Geographic Map of Attacks</Card.Header>
                                <Card.Body>
                                    {/* Placeholder for attack map visualization */}
                                    <div className="attack-map">
                                        {/* Dummy map visualization */}
                                        <p>Attack map data:</p>
                                        {attackMapData.map((data, index) => (
                                            <p key={index}>{data.country}: {data.attacks} attacks</p>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Vulnerability List Section */}
                        <Col md={6}>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 vulnerabilities-card">
                                <Card.Header>Vulnerability List</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        {vulnerabilityList.map((vuln, index) => (
                                            <li key={index} className={`vulnerability-item mb-2 ${vuln.severity.toLowerCase()}`}>
                                                <h6>{vuln.name}</h6>
                                                <p>Severity: <span className={`badge badge-${vuln.severity.toLowerCase()}`}>{vuln.severity}</span></p>
                                                <p>Status: {vuln.status}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Compliance Status Section */}
                    <Row>
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 compliance-card">
                                <Card.Header>Compliance Status</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        {complianceStatus.map((status, index) => (
                                            <li key={index} className={`compliance-item mb-2 ${status.status.toLowerCase()}`}>
                                                <h6>{status.standard}</h6>
                                                <p>Status: {status.status}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Incident Response Section */}
                    <Row>
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 incident-response-card">
                                <Card.Header>Incident Response</Card.Header>
                                <Card.Body>
                                    <p>Time since last incident: {incidentResponseTime}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Attack Vector Analysis Section */}
                    <Row>
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 attack-vectors-card">
                                <Card.Header>Attack Vector Analysis</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        {attackVectorAnalysis.map((vector, index) => (
                                            <li key={index} className="attack-vector-item mb-2">
                                                <p>{vector.vector}: {vector.count} occurrences</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Threat Actor Profiles Section */}
                    <Row>
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 threat-actors-card">
                                <Card.Header>Threat Actor Profiles</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        {threatActorProfiles.map((profile, index) => (
                                            <li key={index} className="threat-actor-item mb-2">
                                                <h6>{profile.name}</h6>
                                                <p>{profile.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Data Breach Alerts Section */}
                    <Row>
                        <Col>
                            <Card className="mb-4 bg-dark text-light shadow-sm border-0 breach-alerts-card">
                                <Card.Header>Data Breach Alerts</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        {dataBreachAlerts.map((alert, index) => (
                                            <li key={index} className="breach-alert-item mb-2">
                                                <h6>{alert.alert}</h6>
                                                <p>{alert.details}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Charts */}
                    <Row>
                        <Col md={6}>
                            <Card className="bg-dark text-light shadow-sm border-0 chart-card">
                                <Card.Header>Monthly Trends</Card.Header>
                                <Card.Body>
                                    <Chart />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="bg-dark text-light shadow-sm border-0 chart-card">
                                <Card.Header>Category Distribution</Card.Header>
                                <Card.Body>
                                    <PieChart />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
