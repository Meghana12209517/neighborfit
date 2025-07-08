# 🌐 NeighborFit

NeighborFit is a full-stack web application that helps users find neighborhoods that best match their **lifestyle preferences** like safety, affordability, greenery, transport access, and community vibe.

---

## 📌 Features

- Users select their top lifestyle preferences
- System recommends top 3 neighborhoods using a weighted scoring algorithm
- Based on real-world data and survey insights
- User-friendly UI using React + backend logic in Flask

---

## 🔧 Tech Stack

- **Frontend**: React
- **Backend**: Flask + Flask-CORS
- **Data**: JSON (`neighborhoods.json`)

---
## 📦 Appendix

- Survey screenshots included in `/screenshots` folder
- Project report: `NeighborFit_Report.pdf`
- Dataset: `backend/data/neighborhoods.json`
- Algorithm logic: `backend/app.py`
---

## 🚀 How to Run Locally

### 🔷 Frontend (React)

```bash
cd frontend
npm install
npm start

```
Runs at: http://localhost:3000


### 🔶 Backend (Flask)

```bash
cd backend
pip install flask flask-cors
python app.py
```
Runs at: http://localhost:5000
