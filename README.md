# Fatma Nour — Junior Data Engineer Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222?logo=github)](https://fatoomnoour.github.io/fatma-portfolio/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=fff)](https://vite.dev/)

A professional portfolio showcasing Fatma Nour's work in **Data Engineering, AI, backend development, ETL pipelines, and programming education**.

## Live Website

[https://fatoomnoour.github.io/fatma-portfolio/](https://fatoomnoour.github.io/fatma-portfolio/)

## About

Fatma Nour is a Computer Science graduate and Junior Data Engineer focused on building practical data systems, reliable ETL pipelines, backend APIs, and AI-powered applications using Python, SQL, and modern web technologies.

She is open to:

- Junior Data Engineering roles
- Data Engineering internships
- Backend and API opportunities
- AI and Data projects
- Remote collaborations
- Programming and coding education opportunities

## Main Focus Areas

- Data Engineering
- ETL/ELT pipelines
- Data cleaning and transformation
- Data modeling
- SQL and relational databases
- Python development
- Backend APIs
- AI and Machine Learning
- Programming education

## Featured Projects

### ABP Estimation API

A backend architecture serving machine-learning predictions for Arterial Blood Pressure.

- **Problem solved:** Healthcare prediction models need a secure and dependable backend for inference requests.
- **Solution:** A Flask REST API wraps a deep-learning model, validates incoming signal data, applies preprocessing, and returns estimated blood-pressure values.
- **Technologies:** Python, Flask, TensorFlow, Keras, REST API, and data validation.
- **GitHub:** [Fatoomnoour/abp-api](https://github.com/Fatoomnoour/abp-api)
- **Live demo:** No public live demo is currently listed.

### Stress Detection ML Pipeline

A structured machine-learning workflow covering data collection, cleaning, feature engineering, model comparison, and evaluation.

- **Problem solved:** Noisy physiological data needs a reproducible workflow before it can support useful predictions.
- **Solution:** An exploratory data analysis and modeling pipeline prepares features with Pandas and compares classification models with Scikit-learn.
- **Technologies:** Python, Pandas, Scikit-learn, exploratory data analysis, and feature engineering.
- **GitHub:** [Fatoomnoour/Stress-Detection](https://github.com/Fatoomnoour/Stress-Detection)
- **Live demo:** No public live demo is currently listed.

### PharmStock Data Platform

An end-to-end data platform for turning pharmacy inventory events into reliable analytical data.

- **Problem solved:** Pharmacy inventory signals need consistent ingestion, processing, orchestration, and warehouse-ready outputs.
- **Solution:** A streaming and batch-oriented architecture moves events through ingestion, distributed processing, orchestration, and analytical serving stages.
- **Technologies:** Kafka, PySpark, Airflow, BigQuery, and ETL.
- **GitHub:** [Fatoomnoour/pharmstock-ai-data-platform](https://github.com/Fatoomnoour/pharmstock-ai-data-platform)
- **Live demo:** No public live demo is currently listed.

### Kids Coding Hub Curriculum

A structured coding curriculum covering Scratch, Python, and Web Development for young learners.

- **Problem solved:** Young learners need a clear progression from fundamentals to hands-on programming projects.
- **Solution:** A practical, project-based curriculum and delivery workflow makes technical concepts approachable.
- **Technologies and practice areas:** Curriculum design, Python education, mentoring, and community building.
- **Project page:** [Kids Coding Hub on Facebook](https://www.facebook.com/Kids.Coding.Hub)
- **Live demo:** No public live demo is currently listed.

## Technology Stack

The portfolio website is built with technologies that are present in this repository:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Git and GitHub

The projects showcased in the portfolio also represent practical experience with Python, SQL, Flask, TensorFlow, Keras, Pandas, NumPy, Scikit-learn, Kafka, PySpark, Airflow, BigQuery, REST APIs, ETL, and data validation.

## Website Features

- Responsive design for desktop, tablet, and mobile screens
- Light and dark mode
- Project showcase organized as case studies
- Data pipeline visualization in the Hero section
- Contact form powered by [Formspree](https://formspree.io/)
- GitHub, LinkedIn, email, and WhatsApp links
- Accessibility-friendly labels, keyboard focus states, reduced-motion support, and descriptive image alternatives
- SEO metadata, Open Graph and Twitter Card tags, sitemap, robots file, favicon, and structured JSON-LD data
- Lazy-loaded and responsive project imagery

## Running Locally

### Prerequisites

- Node.js 20 or newer
- npm

### Development server

```bash
npm install
npm run dev
```

The development server will print a local URL, usually `http://localhost:5173`.

### Production build

```bash
npm run build
```

The production output is generated in the `dist/` directory.

### Type checking

```bash
npx tsc --noEmit
```

### Preview the production build

```bash
npm run build
npm run preview
```

## Deployment

The portfolio is deployed using **GitHub Pages**. Changes pushed to the `main` branch are built and deployed by the repository's GitHub Actions workflow.

Before publishing a production update, verify the following:

```bash
npm run build
npx tsc --noEmit
git diff --check
```

## Contact

- **Email:** [fatmanour048@gmail.com](mailto:fatmanour048@gmail.com)
- **GitHub:** [github.com/Fatoomnoour](https://github.com/Fatoomnoour)
- **LinkedIn:** [linkedin.com/in/fatma-nour-ai-trainer](https://www.linkedin.com/in/fatma-nour-ai-trainer)
- **Portfolio:** [fatoomnoour.github.io/fatma-portfolio](https://fatoomnoour.github.io/fatma-portfolio/)

## License

This portfolio is a personal project. Please contact the owner before reusing its content, images, or code.
