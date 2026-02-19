# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
React portfolio website showcasing Gabriel Arias' work as a Software Engineer. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compiler then Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture
Simple React portfolio application with component-based architecture:

- **Main App** (`src/App.tsx`): Root component rendering portfolio sections
- **Components** (`src/components/`): Reusable UI components including:
  - `WorkExperience` - Professional experience display
  - `Skills` - Technical skills showcase  
  - `ExperienceItem` - Individual experience entries
  - `About`, `Contact`, `Featured` - Additional portfolio sections

## Tech Stack
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite with SWC plugin for fast compilation
- **Styling**: Tailwind CSS v4 with custom fonts in `src/fonts/`
- **Assets**: Company logos stored in `public/` directory

## Key Configuration
- Uses Vite config with React SWC and Tailwind CSS plugins
- TypeScript project references for app and Node configs
- Custom CSS classes including `font-sketch-written` for headings

## Asset Management
Company logos and images are stored in `public/` directory for direct access. Some assets were recently moved from `src/assets/` to `public/` based on git status.