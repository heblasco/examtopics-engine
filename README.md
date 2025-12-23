# ExamTopics Engine

This project is a comprehensive solution for practicing certification exams. It includes a scraper to download exam questions and a web application (Exam Trainer) to practice them.

## Solution Overview

The solution consists of two main parts:

1.  **Exam Scraper**: A tool to download exam questions from ExamTopics.
2.  **Exam Trainer**: A local web application to practice the downloaded exams.

## Prerequisites

-   [Node.js](https://nodejs.org/) (Latest LTS version recommended)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd exametopics-engine
    ```

2.  Install dependencies for the backend:
    ```bash
    cd exam-trainer/backend
    npm install
    ```

3.  Install dependencies for the frontend:
    ```bash
    cd ../frontend
    npm install
    ```

## Usage

### Getting Exams

To download exams in Markdown format, we recommend using the `examtopics-downloader` tool.

**Repository**: [https://github.com/thatonecodes/examtopics-downloader.git](https://github.com/thatonecodes/examtopics-downloader.git)

Follow the instructions in that repository to download the exams you need. Once downloaded, place the Markdown files in the `exams` directory of this project.

### Running the Exam Trainer

You can start both the backend and frontend services using the provided start script.

1.  Navigate to the `exam-trainer` directory:
    ```bash
    cd exam-trainer
    ```

2.  Run the start script:
    ```bash
    ./start.sh
    ```

This will launch:
-   The backend server (usually on port 3000)
-   The frontend application (usually on http://localhost:5173)

Open your browser and navigate to the frontend URL to start practicing!

## Project Structure

-   `exams/`: Directory to store downloaded exam Markdown files.
-   `exam-trainer/`: Contains the source code for the unified application.
    -   `backend/`: Node.js/Express backend.
    -   `frontend/`: React/Vite frontend.
    -   `start.sh`: Script to run both services simultaneously.
