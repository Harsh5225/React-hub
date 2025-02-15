# 🔍 GitHub Profile Viewer  

A **React-based GitHub Profile Viewer** that fetches random GitHub profiles using the **GitHub API**. Users can control the number of profiles displayed dynamically.  

---

## 📌 Features  

✅ **Fetch Random GitHub Profiles** – Retrieves user profiles from the GitHub API.  
✅ **Customizable Profile Count** – Input field allows users to set the number of profiles to fetch.  
✅ **Optimized State Management** – Uses `useState()` and `useEffect()` for dynamic updates.  
✅ **Custom Hook (`useFetch`)** – Separates API logic from UI for reusability.  
✅ **Efficient Rendering** – Avoids unnecessary re-renders with state optimization.  

---

## 🛠️ Tech Stack  

- **React** – Functional Components, Hooks (`useState`, `useEffect`).  
- **JavaScript (ES6+)** – Fetch API, event handling.  
- **CSS** – Basic styling for UI.  

---

## 📂 Project Structure  

```
/github-profile-viewer
│── src/
│   ├── components/
│   │   ├── Header.js        # Displays the app title
│   │   ├── Body.js          # Handles user input & displays profiles
│   ├── hooks/
│   │   ├── useFetch.js      # Custom hook for fetching GitHub profiles
│── public/
│   ├── index.html           # Root HTML file
│── package.json             # Dependencies & scripts
│── README.md                # Project documentation
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/github-profile-viewer.git
cd github-profile-viewer
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Run the App**  
```bash
npm start
```
The app will now be running at **`http://localhost:3000/`** in your browser.  

---

## 📝 Code Explanation  

### **1️⃣ `useState` – State Management**  
```js
const [profile, setProfile] = useState([]);
const [profilecount, setprofilecount] = useState(10);
```
- **Stores the list of profiles** → `profile`.  
- **Tracks the number of profiles to fetch** → `profilecount`.  
- **Ensures UI updates dynamically** when state changes.  

---

### **2️⃣ `useEffect` – Fetch Data on Component Mount**  
```js
useEffect(() => {
  fetchInfo();
}, []);
```
🔹 **Why `useEffect([])`?**  
- Runs only **once** when the component mounts.  
- Ensures profiles are fetched **on initial load**.  

---

### **3️⃣ Custom Hook (`useFetch`) – Code Reusability**  
```js
export function usefetch() {
  const [profile, setProfile] = useState([]);
  const [profilecount, setprofilecount] = useState(10);

  async function fetchInfo() {
    const ranNum = Math.floor(Math.random() * 6000);
    try {
      const response = await fetch(
        `https://api.github.com/users?since=${ranNum}&per_page=${profilecount}`
      );
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return { fetchInfo, profilecount, setprofilecount, profile };
}
```
🔹 **Why use a custom hook?**  
- Separates **fetching logic** from the UI (component).  
- Makes it **reusable** across multiple components.  
- **Encapsulates API calls** and ensures better organization.  

---

### **4️⃣ Body Component – Controls User Input & Renders Profiles**  
```js
function Body() {
  console.log("Body first");
  const { fetchInfo, profilecount, setprofilecount, profile } = usefetch();
  console.log("Body last");

  return (
    <>
      <div className="search">
        <input
          placeholder="Input your number"
          type="number"
          value={profilecount}
          onChange={(e) => setprofilecount(e.target.value)}
          min={1}
        />
        <button onClick={fetchInfo}>Search Profile</button>
      </div>

      <div className="profile">
        {profile.map((value) => (
          <div key={value.id} className="cards">
            <img src={value.avatar_url} alt="GitHub Avatar"/>
            <h2>{value.login}</h2>
            <a href={value.html_url} target="_blank" rel="noopener noreferrer">
              Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
```
🔹 **Key Concepts in `Body.js`**  
- **Controlled Input (`value={profilecount}`)** → Ensures React controls input state.  
- **Reactivity (`onChange` handler)** → Updates `profilecount` dynamically.  
- **Mapping over `profile`** → Renders profile cards with **GitHub avatar & profile link**.  

---

## 📷 Preview  

![GitHub Profile Viewer Preview](https://github.com/Harsh5225/React-hub/blob/main/github.png)  

---

## 🔧 Optimizations & Best Practices  

✅ **Custom Hook (`useFetch`)** – Separates logic for better reusability.  
✅ **State Management (`useState`)** – Ensures efficient UI updates.  
✅ **Effect Hook (`useEffect`)** – Triggers data fetch on mount.  
✅ **Controlled Components** – React controls input for better performance.  

---

## 🤝 Contributing  

Want to improve this project? Feel free to:  
- ⭐ Star this repository  
- 🛠️ Open an issue  
- 🔀 Submit a pull request  

---

## 📜 License  

This project is **open-source** and available under the **MIT License**.  

---

Let me know if you need modifications! 🚀