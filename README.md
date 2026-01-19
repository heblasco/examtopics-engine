# ExamTopics Engine

This project is a comprehensive solution for practicing certification exams. It includes a scraper to download exam questions and a web application (Exam Trainer) to practice them.

## Solution Overview

The solution consists of two main parts:

1.  **Exam Scraper**: A tool to download exam questions from ExamTopics.
2.  **Exam Trainer**: A local web application to practice the downloaded exams.

## Quick Start with GitHub Codespaces

The easiest way to get started is using GitHub Codespaces:

1. Click the green **Code** button on the repository page
2. Select **Codespaces** → **Create codespace on main**
3. Once the codespace is ready, open a terminal and run:
    ```bash
    cd exam-trainer
    ./start.sh
    ```
4. When prompted, click **Open in Browser** for port 5173
5. Start practicing your exams!

> **Note**: The frontend uses a Vite proxy to communicate with the backend, so you only need to access the frontend URL (port 5173).

## Prerequisites

-   [Node.js](https://nodejs.org/) (Latest LTS version recommended)

## Installation (Local Development)

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd examtopics-engine
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

This will:
- Install all dependencies automatically
- Launch the backend server on port 3001
- Launch the frontend application on http://localhost:5173

Open your browser and navigate to the frontend URL to start practicing!

## Project Structure

-   `exams/`: Directory to store downloaded exam Markdown files.
-   `exam-trainer/`: Contains the source code for the unified application.
    -   `backend/`: Node.js/Express backend.
    -   `frontend/`: React/Vite frontend.
    -   `start.sh`: Script to run both services simultaneously.

## Troubleshooting

### Codespaces: "No exams found"
Make sure the backend is running. The frontend proxies API requests through Vite, so both services must be running.

### Port already in use
Kill existing processes:
```bash
pkill -f "node server.js"
pkill -f "vite"
```
Then run `./start.sh` again.
