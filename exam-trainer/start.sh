#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Installing dependencies...${NC}"

# Install backend dependencies
echo -e "${BLUE}  → Backend dependencies...${NC}"
(cd backend && npm install --silent) 

# Install frontend dependencies
echo -e "${BLUE}  → Frontend dependencies...${NC}"
(cd frontend && npm install --silent)

echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

echo -e "${BLUE}🚀 Starting services...${NC}"

# Start Backend
echo -e "${BLUE}  → Starting Backend on port 3001...${NC}"
(cd backend && node server.js) &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start Frontend (with --host for Codespaces compatibility)
echo -e "${BLUE}  → Starting Frontend on port 5173...${NC}"
(cd frontend && npm run dev) &
FRONTEND_PID=$!

echo ""
echo -e "${GREEN}✅ Services started!${NC}"
echo -e "${GREEN}   Backend:  http://localhost:3001${NC}"
echo -e "${GREEN}   Frontend: http://localhost:5173${NC}"
echo ""
echo -e "${BLUE}Press Ctrl+C to stop all services${NC}"

trap "echo ''; echo -e '${BLUE}Stopping services...${NC}'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo -e '${GREEN}✅ Stopped${NC}'; exit" SIGINT SIGTERM

wait
