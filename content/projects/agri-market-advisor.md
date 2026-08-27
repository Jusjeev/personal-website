---
title: "Agri Market Advisor"
description: "Multi-agent AI system that analyzes agricultural commodity shipments, combining live market prices, weather forecasts, logistics data, and trade compliance checks into a single decision report."
tags: ["FastAPI", "LangGraph", "Next.js", "React", "Python", "Supabase", "GPT-4o", "Docker"]
github: "https://github.com/Jusjeev/agri-market-advisor"
liveUrl: "https://frontend-294225411892.us-central1.run.app"
---

A multi-agent AI system for analyzing agricultural commodity shipments. Users submit natural-language queries about a shipment, and a pipeline of seven specialized agents — Orchestrator, Market, Risk, Compliance, Logistics, Critic, and Report — gathers live market pricing, weather forecasts, freight logistics, and trade compliance data before synthesizing a structured decision report. Built with a FastAPI/LangGraph backend and Next.js frontend, backed by Supabase (PostgreSQL with pgvector) and GPT-4o, pulling live data from USDA NASS, Open-Meteo, and Tavily. Deployed on GCP Cloud Run with Docker, and instrumented with LangSmith for observability.
