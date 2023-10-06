"use client";
import React, { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Papa from "papaparse";

const Attendence = () => {
  const [fileData, setFileData] = useState([]);
  const [columnArray, setColumnArray] = useState([]);
  const [values, setValues] = useState([]);

  const handleFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const columnArray = [];
        const valueArray = [];

        results.data.map((d) => {
          columnArray.push(Object.keys(d));
          valueArray.push(Object.values(d));
        });
        setFileData(results.data);
        setColumnArray(columnArray[0]);
        setValues(valueArray);
      },
    });
  };
  // console.log(values);
  return (
    <BaseLayout>
      <div>
        <h1>Record Your Attendence</h1>
        <form>
          <label htmlFor="">input attendence</label>
          <input type="file" name="file" accept=".csv" onChange={handleFile} />
          <input type="submit" value="Save" />
        </form>
      </div>
    </BaseLayout>
  );
};

export default Attendence;
