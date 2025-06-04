# HR Performance Dashboard - README

Deployment link: https://684075bacbdb1b40f3a0dc75--hrdashboardsruth.netlify.app/

https://github.com/user-attachments/assets/4324e43d-b8df-485b-a318-7b73e81df56d


![Screenshot 2025-05-27 155351](https://github.com/user-attachments/assets/e8d644b9-cd88-4b9b-b1df-e2fbf86c247e)


![Screenshot 2025-05-27 155620](https://github.com/user-attachments/assets/2c52f50f-b613-48c0-8c9f-7aa24c7d3454)
![Screenshot 2025-05-27 155517](https://github.com/user-attachments/assets/492d7a43-2e3b-4e1b-af4a-4e703bdf573c)
![Screenshot 2025-05-27 155528](https://github.com/user-attachments/assets/c229165c-734e-41c5-ad3d-2b0ba4d22f1e)
![Screenshot 2025-05-27 154506](https://github.com/user-attachments/assets/9869e864-6f72-4c11-a9d4-cb58443922e0)

![Screenshot 2025-05-27 154451](https://github.com/user-attachments/assets/010d29cf-7cb6-44b4-a6ba-6939150e0a8d)



## 📝 Overview

A modern HR dashboard built with Next.js that allows HR managers to track employee performance, manage bookmarks, and view detailed analytics. The application features responsive design, dark/light mode, and interactive data visualization.

## ✨ Features

### Core Features
- **Employee Dashboard**: View and manage employee profiles
- **Search & Filter**: Find employees by name, department, or rating
- **Employee Details**: Detailed profiles with performance history
- **Bookmark Manager**: Save and organize important profiles
- **Analytics**: Visualize department performance and trends

### Advanced Features
- **Dark/Light Mode**: Toggle between color schemes
- **State Management**: Zustand for global state
- **Responsive Design**: Works on all device sizes
- **Dynamic Routing**: Employee detail pages
- **Chart Visualizations**: Performance analytics

### Bonus Features
- **Authentication**: Protected routes with NextAuth
- **Form Validation**: Add new employees
- **Animations**: Smooth UI transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: Chart.js
- **Authentication**: NextAuth.js
- **Icons**: Heroicons
- **Animation**: Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hr-dashboard.git
   cd hr-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file:
   ```env
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/
│   ├── (auth)/                   # Authentication routes
│   ├── (dashboard)/              # Protected dashboard routes
│   │   ├── analytics/            # Analytics page
│   │   ├── bookmarks/            # Bookmarks manager
│   │   ├── employee/             # Employee details
│   │   └── page.tsx              # Dashboard home
│   ├── api/                      # API routes
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
├── context/                      # Context providers
├── hooks/                        # Custom hooks
├── lib/                          # Utilities and config
├── styles/                       # Global styles
└── providers.tsx                 # App providers
```

## 🔧 Customization

### Environment Variables
- `NEXTAUTH_SECRET`: Secret key for authentication
- `NEXTAUTH_URL`: Base URL for authentication callbacks

### Styling
Edit the Tailwind config in `tailwind.config.ts` to customize:
- Color scheme
- Font family
- Breakpoints

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![Screenshot 2025-05-27 154506](https://github.com/user-attachments/assets/88e592d7-c44a-460c-ae6f-754012e478b3) | ![Screenshot 2025-05-27 152144](https://github.com/user-attachments/assets/871ec1d2-f151-40d9-b6e6-cc2f87d20770) |

| Dashboard | Analytics |
|-----------|-----------|
| ![Screenshot 2025-05-27 152101](https://github.com/user-attachments/assets/2e1978b3-8f6c-427f-aa03-7fe631923d5e) | ![Screenshot 2025-05-27 155626](https://github.com/user-attachments/assets/f64a41c3-2d9d-42b2-9e46-d89a9d2399ed) |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

mail to - sruthivihitha_potluri@srmap.edu.in

Project Link: https://684075bacbdb1b40f3a0dc75--hrdashboardsruth.netlify.app/
