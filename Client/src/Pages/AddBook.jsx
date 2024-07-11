import React, { useState } from "react";
import "./AddBook.css";
import BaseUrl from "../BaseUrl";

const AddBook = () => {
  const [option, setOption] = useState("select");

  const [bookdetail, setBookdetail] = useState({
    Img: "",
    Title: "",
    Pages: "",
    Link: "",
    Author: "",
    Genre: "",
    Description: "",
  });
  const handleChange = (e) => {
    setOption(e.target.value);
    const { name, value } = e.target;
    setBookdetail({
      ...bookdetail,
      [name]: value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
        const response = await fetch(`${BaseUrl}/book/addbook`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(bookdetail)
        })
        if(response.ok){
            alert("book submitted")
        }
        else{
            alert("unable to submit the book")
        }
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <div className="formcont">
      <h1>Add book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Img">
              Book Image<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={bookdetail.Img}
              name="Img"
              onChange={handleChange}
              id="Img"
              placeholder="Image Link"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Title">
              Title<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              value={bookdetail.Title}
              onChange={handleChange}
              name="Title"
              id="title"
              placeholder="Book title"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Pages">
            Pages<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            className="form-control"
            value={bookdetail.Pages}
            onChange={handleChange}
            id="pages"
            name="Pages"
            placeholder="Enter no of pages"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Link">Book Link</label>
          <input
            type="text"
            className="form-control"
            value={bookdetail.Link}
            onChange={handleChange}
            name="Link"
            id="Book-Link"
            placeholder="Enter book link here"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="Author">
              Author<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={bookdetail.Author}
              id="Author"
              name="Author"
              placeholder="Enter author name"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="Genre">
              Genre<span style={{ color: "red" }}>*</span>
            </label>
            {option === "select" ? (
              <select
                id="Genre"
                name="Genre"
                value={bookdetail.Genre}
                className="form-control"
                onChange={handleChange}
              >
                <option value="Manga">Manga</option>
                <option value="Mystery">Mystery</option>
                <option value="Horror">Horror</option>
                <option value="Autobiography">Autobiography</option>
                <option value="Add Genre">Add Genre</option>
              </select>
            ) : (
              <input
                type="text"
                className="form-control"
                id="GenreInput"
                name="Genre"
                placeholder="Enter genre"
                value={bookdetail.Genre}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">
              Description<span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              value={bookdetail.Description}
              type="text"
              rows="6"
              cols="100"
              id="Description"
              onChange={handleChange}
              name="Description"
              placeholder="Enter breif Description about book"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
