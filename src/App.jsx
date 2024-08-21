import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i.pinimg.com/736x/c0/12/bf/c012bf3b82a285f48d1e06ddbc572939.jpg",
      name: "Gandalf, the Grey",
      role: "Wizard and Hobbit admirer",
    },
    content: [
      { type: "paragraph", content: "Greetings 👋" },
      {
        type: "paragraph",
        content:
          "So do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us. 🧙‍♂️",
      },
      { type: "link", content: "👉 WizardThoughts.com" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://64.media.tumblr.com/a6d448ac3db5265e8e01d18c4284ad8c/tumblr_nqpo9s3ixf1tgh6zro9_400.png",
      name: "Bilbo Baggins",
      role: "Adventure and Post-breakfast Admirer",
    },
    content: [
      { type: "paragraph", content: "Greetings 👋" },
      {
        type: "paragraph",
        content:
          "So do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us. 🧙‍♂️",
      },
      { type: "link", content: "👉 WizardThoughts.com" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
