import React from "react";

function AddTask() {
  return (
    <div className="col-span-12 bg-green-400">
      <div className="grid border bg-blue-400 justify-center">
        <div className="col-span-6 border bg-red-400">
          <form className="border">
            <div className="grid justify-between">
              <div className="p-4 col-span-1 bg-black"></div>
              <div className="p-4 col-span-1 bg-red-500"></div>
              {/* <label className="col-span-1">Blog Title</label>
              <input
                className="col-span-1"
                type="text"
                placeholder="Blog Title"
                name="title"
              /> */}
            </div>
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
