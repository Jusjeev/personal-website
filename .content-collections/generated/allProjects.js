
export default [
  {
    "title": "Agri Market Advisor",
    "description": "Multi-agent AI system that analyzes agricultural commodity shipments, combining live market prices, weather forecasts, logistics data, and trade compliance checks into a single decision report.",
    "tags": [
      "FastAPI",
      "LangGraph",
      "Next.js",
      "React",
      "Python",
      "Supabase",
      "GPT-4o",
      "Docker"
    ],
    "github": "https://github.com/Jusjeev/agri-market-advisor",
    "liveUrl": "https://frontend-294225411892.us-central1.run.app",
    "content": "A multi-agent AI system for analyzing agricultural commodity shipments. Users submit natural-language queries about a shipment, and a pipeline of seven specialized agents — Orchestrator, Market, Risk, Compliance, Logistics, Critic, and Report — gathers live market pricing, weather forecasts, freight logistics, and trade compliance data before synthesizing a structured decision report. Built with a FastAPI/LangGraph backend and Next.js frontend, backed by Supabase (PostgreSQL with pgvector) and GPT-4o, pulling live data from USDA NASS, Open-Meteo, and Tavily. Deployed on GCP Cloud Run with Docker, and instrumented with LangSmith for observability.",
    "_meta": {
      "filePath": "agri-market-advisor.md",
      "fileName": "agri-market-advisor.md",
      "directory": ".",
      "extension": "md",
      "path": "agri-market-advisor"
    }
  },
  {
    "title": "Farm Robotics Challenge 2025",
    "description": "Built a navigation system for autonomous robot navigation in crop rows, with YOLO models achieving 90%+ accuracy for plant and weed classification.",
    "tags": [
      "ROS",
      "OpenCV",
      "PyTorch",
      "Roboflow",
      "YOLO",
      "Python"
    ],
    "github": "https://github.com/Jusjeev",
    "videoUrl": "https://www.farmroboticschallenge.ai/2025results/v/universityillinois",
    "reportUrl": "https://drive.google.com/file/d/1QHAiont1MFbhKoJ5cRm76X0uD-ouSZ-H/view",
    "content": "UIUC team project for the Farm Robotics Challenge 2025. Built a navigation system using model predictive control and row detection for autonomous navigation of a 4-wheeled robot in straight and curved crop rows. Trained YOLO classification models with 90%+ accuracy for horseradish and weeds. Contributed to system development using ROS, OpenCV, PyTorch, and Roboflow, and assisted with hardware setup including Oak-D stereo camera integration and Nvidia Jetson Nano deployment.",
    "_meta": {
      "filePath": "farm-robotics.md",
      "fileName": "farm-robotics.md",
      "directory": ".",
      "extension": "md",
      "path": "farm-robotics"
    }
  }
]