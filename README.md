# Orivon Edge Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**Orivon Edge** is a next-generation Venture Studio and AI-powered Innovation Platform. It combines a global venture building agency with a suite of proprietary AI tools designed to accelerate the journey from "Idea" to "Investable Company".

Built with a "Million Dollar" aesthetic, high-fidelity animations, and a robust hybrid architecture.

---

## 🚀 Key Features

### 🧭 North (AI Career Pathfinding)
A personalized "GPS for your career". North uses Google Gemini AI to analyze a user's skills, interests, and goals to generate a dynamic, step-by-step learning path to land their dream tech job.
- **Adaptive Curriculum:** Using real-time market data to teach only the most relevant skills.
- **Cinematic UI:** A premium, "Swiss-Style" HUD interface for tracking progress.
- **Course Integration:** Direct links to curated learning materials.

### 📊 Deckly (Pitch Deck Assessor)
An AI Investment Committee in your browser. Users upload their pitch deck or paste their executive summary, and Deckly provides an instant, brutal, and actionable VC-grade assessment.
- **Analysis Simulation:** Visualizes the "thinking process" of an investor (Market Sizing, Risk Assessment, etc.).
- **Scoring Engine:** quantitative 0-100 score based on investability.
- **Hybrid Auth:** Secure assessment storage via Supabase RLS.

### 🔮 Deep Reveal (First-Principles Engine)
A tool for validating startup ideas before a single line of code is written. It deconstructs problem statements into their atomic components: Pain Intensity, Market Size, and Solution Angles.
- **Market Pulse:**  AI checks if real people are searching for a solution to the problem.
- **Pivot Suggestions:** Generates alternative startup ideas based on adjacent market gaps.

---

## 🛠️ Tech Stack

**Frontend**
*   **Framework:** React 18 + Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS + Shadcn UI
*   **Animations:** Framer Motion + React Three Fiber (3D)
*   **Icons:** Lucide React + Phosphor Icons

**Backend & Services**
*   **Database:** Supabase (PostgreSQL)
*   **Authentication:** Firebase Auth (Hybrid Integration)
*   **AI Models:** Google Gemini 1.5 Flash (via Generative AI SDK)
*   **State Management:** TanStack Query

---

## 🏗️ Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/orivon-edge.git
    cd orivon-edge
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your API keys:
    ```env
    VITE_GEMINI_API_KEY=your_google_ai_key
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**
    ```sh
    npm run dev
    ```

---

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Buttons, Nav, Footer)
├── lib/            # API clients (Gemini, Supabase, Firebase)
├── pages/          # Main application pages (Home, Deckly, North, etc.)
└── index.css       # Global styles and Tailwind directives
```

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**Orivon Edge** - info@orivonedge.dev
<br />
**Borno State, Nigeria**

Project Link: [https://github.com/yourusername/orivon-edge](https://github.com/yourusername/orivon-edge)
