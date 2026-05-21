# React Context API & Zustand Demo ⚛️

A React application built using **React + Vite** to demonstrate advanced state management concepts such as:

* React Context API
* Zustand State Management
* useContext Hook
* useRef Hook
* useEffect Hook
* Shared Global State
* Component Communication

This project was created to understand how global state management works in React applications using both Context API and Zustand.

---

# 📌 Project Overview

This project demonstrates:

✅ Sharing state between components using Context API
✅ Managing global state using Zustand
✅ Updating shared state dynamically
✅ React Hooks usage
✅ Component communication without prop drilling
✅ Reusable provider architecture
✅ Tailwind CSS styling

The project contains multiple components (`A`, `B`, and `C`) that access and modify shared state using both Context API and Zustand store.

---

# 🌐 Live Demo

🔗 **Deployed Link:**
`https://react-context-demo-orpin.vercel.app/`

---

# 📂 Project Structure

```bash id="s4j1vn"
react-context-demo/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── A.jsx
│   │   ├── B.jsx
│   │   └── C.jsx
│   │
│   ├── contexts/
│   │   ├── CounterContext.js
│   │   ├── CounterContextProvider.jsx
│   │   ├── UserContext.js
│   │   └── UserContextProvider.jsx
│   │
│   ├── store/
│   │   └── TestStore.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

# ⚙️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* React Context API
* Zustand
* Tailwind CSS
* JSX

---

# 📦 Packages Installed

## 1️⃣ Create React Project using Vite

```bash id="l82zvn"
npm create vite@latest
```

---

## 2️⃣ Install Dependencies

```bash id="md4gxt"
npm install
```

---

## 3️⃣ Install Zustand

```bash id="wsm9zw"
npm install zustand
```

---

## 4️⃣ Install Tailwind CSS

```bash id="mr5p9q"
npm install tailwindcss @tailwindcss/vite
```

---

# ▶️ How to Run the Project

## Step 1: Clone the Repository

```bash id="2eqq7u"
git clone https://github.com/ritesh-mogilamoni/react-context-demo
```

---

## Step 2: Move into Project Folder

```bash id="lm06wq"
cd react-context-demo
```

---

## Step 3: Install Dependencies

```bash id="tpkjlwm"
npm install
```

---

## Step 4: Start Development Server

```bash id="y8o7as"
npm run dev
```

---

# ✨ Features

✅ Global State Management using Context API
✅ Global State Management using Zustand
✅ Shared Counter State
✅ Shared User State
✅ State Updates Across Components
✅ Auto Focus Input using `useRef`
✅ Side Effects using `useEffect`
✅ Reusable Context Providers
✅ Responsive UI using Tailwind CSS

---

# 🧠 Concepts Learned

---

# 🔹 React Context API

Used Context API to share data globally without prop drilling.

### Created Contexts:

* `CounterContext`
* `UserContext`

Example:

```js id="9j4y1r"
export const CounterContext = createContext()
```

---

# 🔹 Context Providers

Wrapped components with providers to share state globally.

Example:

```js id="jlwm89"
<CounterContext.Provider value={{counter1, changeCounter1}}>
```

---

# 🔹 useContext Hook

Used `useContext()` to access shared data inside components.

Example:

```js id="jlwm77"
const { counter1, changeCounter1 } = useContext(CounterContext)
```

---

# 🔹 Zustand State Management

Implemented global state management using Zustand.

### Store Includes:

* Shared state
* Functions to update state
* User object
* Counter values

Example:

```js id="jlwm55"
export const useTest = create((set) => ({
  x: 10,
  y: 20
}))
```

---

# 🔹 useState Hook

Used `useState` inside providers to manage local shared state.

Example:

```js id="jlwm21"
const [counter1, setCounter1] = useState(100)
```

---

# 🔹 useRef Hook

Used `useRef()` to focus input automatically.

Example:

```js id="jlwm45"
const inputRef = useRef(null)
```

---

# 🔹 useEffect Hook

Used `useEffect()` for automatic input focus after component render.

Example:

```js id="jlwm11"
useEffect(() => {
  inputRef.current.focus()
}, [])
```

---

# 🔹 Shared State Updates

Learned how updating state in one component automatically updates all connected components.

---

# 📖 Component Explanation

---

# 1️⃣ A.jsx

## Purpose

Demonstrates:

* Context API usage
* Zustand usage
* useRef
* useEffect

### Features

* Auto focus input
* Modify Zustand user
* Update Context counter
* Update Context user

### Learned

* Multiple hook usage
* Shared state updates
* Global state management

---

# 2️⃣ B.jsx

## Purpose

Demonstrates shared Zustand and Context state.

### Features

* Increment Zustand `y`
* Update shared counter
* Update shared user

### Learned

* Zustand selectors
* Shared state updates
* useContext hook

---

# 3️⃣ C.jsx

## Purpose

Demonstrates Zustand state updates and Context API usage.

### Features

* Increment Zustand `x`
* Update shared counter

### Learned

* Zustand functions
* Context state sharing

---

# 📖 Context Files Explanation

---

# 4️⃣ CounterContext.js

## Purpose

Creates Counter Context using `createContext()`.

---

# 5️⃣ CounterContextProvider.jsx

## Purpose

Provides shared counter state globally.

### Learned

* Context Provider structure
* Global state sharing

---

# 6️⃣ UserContext.js

## Purpose

Creates User Context.

---

# 7️⃣ UserContextProvider.jsx

## Purpose

Provides shared user data globally.

### Learned

* Sharing objects using Context API
* Updating shared objects

---

# 📖 Zustand Store Explanation

---

# 8️⃣ TestStore.js

## Purpose

Creates Zustand global store.

### Contains

* State variables
* Update functions
* Shared user object

### Learned

* Zustand store creation
* Global state updates
* State selectors

Example:

```js id="jlwm33"
incrementX: () => set((state) => ({ x: state.x + 1 }))
```

---

# 🎨 UI Styling

Tailwind CSS was used for styling.

### Styling concepts practiced:

* Flexbox
* Padding & margins
* Rounded corners
* Responsive layout
* Button styling
* Typography styling

Example:

```js id="y1jlwm"
className="bg-blue-500 text-white p-2 rounded m-2"
```

---

# 🚀 Future Improvements

Features that can be added later:

* Dark Mode
* Theme Context
* Authentication Context
* Persistent Zustand Store
* API Integration
* Form Validation
* Context Optimization
* Zustand Middleware
* TypeScript Support

---

# 🚀 Deployment

This project can be deployed using:

* Vercel
* Netlify
* GitHub Pages

---

# 📚 What I Learned From This Project

Through this project, I learned:

* How React Context API works
* How to avoid prop drilling
* How Zustand simplifies global state management
* Creating reusable context providers
* Managing shared state between components
* Using hooks like `useContext`, `useRef`, and `useEffect`
* Structuring scalable React applications
* Styling React apps using Tailwind CSS

This project helped me understand modern React state management techniques and how global state works in real-world applications.

---

# 🙌 Author

**Ritesh Mogilamoni**

GitHub: `https://github.com/ritesh-mogilamoni`

---

# ⭐ Conclusion

The React Context Demo project is a beginner-friendly application that demonstrates Context API, Zustand, React Hooks, shared global state, and reusable architecture using React, Vite, and Tailwind CSS.
