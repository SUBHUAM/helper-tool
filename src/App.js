import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    let data = inputRef.current.value;
    let myData = data && JSON.parse(data);
    let productHeadings = myData.productHeading;
    let filterBy = myData.filterBy;

    if (filterBy) {
      filterBy.map((item) => {
        let ans = productHeadings.find((x) => x.name === item.dText);
        let index = productHeadings.indexOf(ans);
        myData.productHeading[index] = {
          ...productHeadings[index],
          search: {
            type: item.dText === "Date" ? "date" : "text",
            parameter: item.fText,
          },
        };
        return null;
      });
    }
    let pageStaticData = {
      tblHeadings: myData.productHeading,
      bodyState: "",
      moduleUrl: "",
      apiUrl: myData && myData.apiUrl.slice(1),
    };
    // console.log(myData);
    let _pageStaticData = JSON.stringify(pageStaticData);
    const ans = _pageStaticData.replace(/"([^"]+)":/g, "$1:");
    console.log(ans);
    let finalAns = "";
    for (let i = 0; i < ans.length; i++) {
      finalAns = finalAns + ans[i];
       if(ans[i]===','){
        finalAns=finalAns+"\n";
       }
    }
    console.log(finalAns);
    document.getElementById("output").innerHTML = finalAns;
  };

  return (
    <div>
    <h2 className="mt-3 d-flex justify-content-center">Helper Tool</h2>
    <div class=" d-flex h-100">
      <div class="input-group w-50 mt-5 ml-5 mr-5 px-5">
        <span class="input-group-text">Enter you data</span>
        <textarea
          ref={inputRef}
          type="text"
          id="message"
          name="message"
          class="form-control"
          aria-label="Enter"
          rows="15"
        />
        <button
          class="btn btn-outline-secondary"
          onClick={handleClick}
          type="button"
          id="button-addon2"
        >
          Enter
        </button>
      </div>
      <div class="input-group w-50  mt-5 px-5">
        <span class="input-group-text ">Output</span>
        <textarea class="form-control h-100"
         rows="10"
          aria-label="Output" type="text" id="output" />
      </div>
    </div>
    </div>
  );
}

export default App;
