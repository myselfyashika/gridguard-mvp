# GridGuard

## AI-Powered Energy Loss Detection & Sustainable Grid Management

GridGuard is an AI-assisted electricity monitoring and decision-support system designed to identify abnormal energy consumption patterns and unaccounted electricity losses.

Instead of automatically declaring electricity theft, GridGuard identifies suspicious patterns, generates a risk score, explains why a case was flagged, and prioritizes cases for field inspection.

## Problem

Electricity distribution networks can experience:

- Technical losses
- Faulty or inaccurate meters
- Missing electricity data
- Unauthorized usage
- Possible electricity theft

Also, smart meters are not installed in every household. Therefore, GridGuard is designed to work with multiple available data sources.

## Solution

GridGuard follows this workflow:

Electricity Data Sources  
↓  
Data Validation  
↓  
Energy Balance Analysis  
↓  
AI Anomaly Detection  
↓  
Risk Scoring  
↓  
GridGuard Dashboard  
↓  
Priority Inspection  
↓  
Officer Notification  
↓  
Human Verification

Smart meters are used where available, but they are **not mandatory**.

## Key Features

- Transformer-level energy balance
- AI-based anomaly detection
- Risk scoring for suspicious cases
- Expected vs actual consumption analysis
- Explainable anomaly flags
- Priority-based inspection
- Officer notification workflow
- Interactive monitoring dashboard
- Multi-source electricity data support

## MVP

The current MVP is a browser-based prototype developed using:

- HTML
- CSS
- JavaScript

The MVP uses **simulated electricity data** to demonstrate the complete detection-to-inspection workflow because live DISCOM/utility data is not available to the team.

### MVP Demonstration

The prototype demonstrates:

1. Electricity data analysis
2. Energy discrepancy calculation
3. AI-based risk scoring
4. Identification of suspicious cases
5. Dashboard visualization
6. Officer notification
7. Inspection-pending workflow

> **Important:** A risk score is an inspection-priority indicator, not proof of electricity theft. Final verification must be performed by authorized personnel.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | HTML5 |
| Styling | CSS3 |
| Interactivity | JavaScript |
| AI Concept | Anomaly Detection & Risk Scoring |
| Deployment | GitHub Pages |
| Current Data | Simulated / Demo Data |

## Technology Readiness Level

**TRL 3 – Functional Proof of Concept**

The current prototype demonstrates the core software workflow using simulated electricity data. Future development will involve validation using authorized utility data and controlled pilot testing.

## Future Scope

- Integration with authorized smart-meter APIs
- Transformer → feeder → consumer drill-down
- Real historical electricity datasets
- Advanced time-series anomaly detection
- Energy-loss geographic maps
- Field-inspection feedback for model improvement
- Secure utility-side deployment
- Renewable energy generation and consumption analytics

## Team – GridGuard

- **Yashika Gupta** – Team Lead / Marketing & Business
- **Mehwish Khan** – Research & Problem Statement
- **Raihan Abdul Baseet** – Technical Approach
- **Aalok Kumar Kesh** – Impact & Benefits
- **Aditya Raj** – Finance & Feasibility

## Smart India Hackathon

**Problem Statement ID:** SIH26200

**Theme:** Renewable / Sustainable Energy

GridGuard supports sustainable energy management by improving visibility into electricity distribution losses and abnormal consumption patterns.

## Project Status

🚧 **Working MVP / Proof of Concept**

The current version uses simulated data and is intended for demonstration and validation of the core concept.

---

**GridGuard — Detect the Loss. Prioritize the Inspection. Improve the Grid.**
