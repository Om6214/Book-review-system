import React, { useState, useEffect } from "react";
import "./About.css";
import { useAuth } from "../storage/auth";
import  BaseUrl  from "../BaseUrl";

const About = () => {
  const { detail, isLoggedin,setLoading } = useAuth();
  const [reply, setReply] = useState({
    Username: detail && detail.length > 0 ? detail[0].Name : null,
    Message: "",
  });
  const [publicReplies, setPublicReplies] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await fetch(`${BaseUrl}/getComment`, {
          method: "GET",
        });
        if (response.ok) {
          const res = await response.json();
          setPublicReplies(res.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchReplies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReply({
      ...reply,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoggedin) {
        setLoading(true)
        const response = await fetch(`${BaseUrl}/addComment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reply),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Reply added successfully");
          setPublicReplies([...publicReplies, reply]);
          setReply({ ...reply, Message: "" });
        } else {
          console.error(data.message);
          alert(data.message || "Error adding reply");
        }
      } else {
        alert("Please login to add reply");
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  };

  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <main>
        <section id="tutorial">
          <h2>How It Works</h2>
          <p>
            Welcome to our Book Review Website! Here's a quick guide on how to
            use our platform:
          </p>
          <ol>
            <li>
              <strong>Sign Up:</strong> Create an account by providing your
              email and setting a password.
            </li>
            <li>
              <strong>Log In:</strong> Log in to your account to start reviewing
              books.
            </li>
            <li>
              <strong>Browse Books:</strong> Explore our collection of books
              available for review.
            </li>
            <li>
              <strong>Read Reviews:</strong> Read reviews written by other users
              to get insights into different books.
            </li>
            <li>
              <strong>Write Reviews:</strong> Share your thoughts on books
              you've read by writing your own reviews.
            </li>
            <li>
              <strong>Edit/Delete Reviews:</strong> Update or delete your
              reviews at any time.
            </li>
          </ol>
        </section>
        <section id="public-replies">
          <h2>Public Replies</h2>
          {publicReplies.length > 0 ? (
            <ul>
              {publicReplies.map((reply, index) => {
                return (
                  <div className="review" key={index}>
                    <div className="profile">
                      <img src="user.jpeg" alt="" />
                      {reply.Username}
                    </div>
                    <div className="mainRev">
                      <p>{reply.Message}</p>
                    </div>
                  </div>
                );
              })}
            </ul>
          ) : (
            <p>No replies yet.</p>
          )}
        </section>
        <section id="contact">
          <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="message">Leave a reply:</label>
            <textarea
              id="message"
              name="Message"
              rows="5"
              value={reply.Message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <div className="footer">
        <p>&copy; 2024 Book Review Website. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
