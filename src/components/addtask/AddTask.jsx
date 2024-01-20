import React from "react";

function AddTask() {
  return (
    <div className="col-span-12 bg-green-400">
      <div className="grid border bg-blue-400 justify-center">
        <div className="col-span-6 border bg-red-400">
          <form className="grid grid-cols-12 bg-yellow-400 border">
            <label className="col-span-2">Blog Title</label>
            <input
              className="col-span-10 bg-slate-200"
              type="text"
              placeholder="Blog Title"
              name="title"
            />
            <label className="col-span-2">Author Name</label>
            <input
              className="col-span-10 bg-slate-200"
              type="text"
              placeholder="Author Name"
              name="auther"
            />
            <label className="col-span-2">Image</label>
            <input
              className="col-span-10 bg-slate-200"
              type="text"
              placeholder="Image Link"
            />
            <label className="col-span-2">Enter Blog</label>
            <textarea
              className="col-span-10 bg-slate-200"
              name="content"
              id=""
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
